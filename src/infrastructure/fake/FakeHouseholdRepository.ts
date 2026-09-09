import { Household } from "@domain/entities/Household";
import { HouseholdMember } from "@domain/entities/HouseholdMember";
import { ConflictError, NotFoundError } from "@domain/errors";
import {
  CreateHouseholdInput,
  HouseholdRepository,
} from "@domain/repositories/HouseholdRepository";

export class FakeHouseholdRepository implements HouseholdRepository {
  private readonly households = new Map<string, Household>([
    [
      "demo-household",
      {
        id: "demo-household",
        houseName: "Hogar Demo",
        code: "HOGAR-123456",
        baseAmount: 1500,
        contributionFrequency: "Semanal",
        createdByUserId: "demo-user",
        createdAt: new Date(),
      },
    ],
  ]);

  private readonly members = new Map<string, Map<string, HouseholdMember>>([
    [
      "demo-household",
      new Map([
        [
          "demo-user",
          {
            id: "demo-user",
            householdId: "demo-household",
            userId: "demo-user",
            role: "admin",
            joinedAt: new Date(),
          },
        ],
      ]),
    ],
  ]);

  private counter = 0;

  async create(input: CreateHouseholdInput): Promise<Household> {
    const id = `household-${++this.counter}`;

    const household: Household = {
      id,
      houseName: input.houseName,
      code: input.code,
      baseAmount: input.baseAmount,
      contributionFrequency: input.contributionFrequency,
      createdByUserId: input.createdByUserId,
      createdAt: new Date(),
    };
    this.households.set(id, household);

    const member: HouseholdMember = {
      id: input.createdByUserId,
      householdId: id,
      userId: input.createdByUserId,
      role: "admin",
      joinedAt: new Date(),
    };
    this.members.set(id, new Map([[member.userId, member]]));

    return household;
  }

  async getByCode(code: string): Promise<Household | null> {
    const normalized = code.trim().toUpperCase();

    for (const household of this.households.values()) {
      if (household.code.toUpperCase() === normalized) {
        return household;
      }
    }

    return null;
  }

  async join(householdId: string, userId: string): Promise<HouseholdMember> {
    if (!this.households.has(householdId)) {
      throw new NotFoundError("HOUSEHOLD_NOT_FOUND", "El hogar no existe");
    }

    const householdMembers =
      this.members.get(householdId) ?? new Map<string, HouseholdMember>();

    if (householdMembers.has(userId)) {
      throw new ConflictError(
        "HOUSEHOLD_ALREADY_MEMBER",
        "Ya eres miembro de este hogar",
      );
    }

    const member: HouseholdMember = {
      id: userId,
      householdId,
      userId,
      role: "member",
      joinedAt: new Date(),
    };

    householdMembers.set(userId, member);
    this.members.set(householdId, householdMembers);

    return member;
  }
}
