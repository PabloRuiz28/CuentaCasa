import {
  JoinHouseholdDTO,
  JoinHouseholdSchema,
} from "@application/dto/JoinHouseholdDTO";
import { toValidationError } from "@application/validation/mapZodError";
import { HouseholdMember } from "@domain/entities/HouseholdMember";
import { NotFoundError } from "@domain/errors";
import { HouseholdRepository } from "@domain/repositories/HouseholdRepository";

export class JoinHouseholdUseCase {
  constructor(private readonly householdRepository: HouseholdRepository) {}

  async execute(dto: JoinHouseholdDTO): Promise<HouseholdMember> {
    const parsed = JoinHouseholdSchema.safeParse(dto);

    if (!parsed.success) throw toValidationError(parsed.error);

    const household = await this.householdRepository.getByCode(
      parsed.data.code,
    );

    if (!household)
      throw new NotFoundError(
        "HOUSEHOLD_NOT_FOUND",
        "Código de hogar inválido",
      );

    return this.householdRepository.join(household.id, dto.userId);
  }
}
