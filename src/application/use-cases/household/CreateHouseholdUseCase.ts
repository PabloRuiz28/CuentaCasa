import {
  CreateHouseholdDTO,
  CreateHouseholdSchema,
} from "@application/dto/CreateHouseholdDTO";
import { HouseholdCodeService } from "@application/services/HouseholdCodeService";
import { toValidationError } from "@application/validation/mapZodError";
import { Household } from "@domain/entities/Household";
import {
  CreateHouseholdInput,
  HouseholdRepository,
} from "@domain/repositories/HouseholdRepository";

export class CreateHouseholdUseCase {
  constructor(
    private readonly householdRepository: HouseholdRepository,
    private readonly householdCodeService: HouseholdCodeService,
  ) {}

  async execute(dto: CreateHouseholdDTO): Promise<Household> {
    const parsed = CreateHouseholdSchema.safeParse(dto);

    if (!parsed.success) throw toValidationError(parsed.error);

    const { data } = parsed;

    const input: CreateHouseholdInput = {
      houseName: data.houseName,
      code: this.householdCodeService.generate(),
      baseAmount: data.baseAmount,
      contributionFrequency: data.contributionFrequency,
      createdByUserId: data.createdByUserId,
    };

    return this.householdRepository.create(input);
  }
}
