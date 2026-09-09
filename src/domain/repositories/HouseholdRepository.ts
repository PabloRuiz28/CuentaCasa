import { Household } from "@domain/entities/Household";
import { HouseholdMember } from "@domain/entities/HouseholdMember";
import { Frecuencia } from "@domain/types";

export interface CreateHouseholdInput {
  houseName?: string;
  code: string;
  baseAmount: number;
  contributionFrequency: Frecuencia;
  createdByUserId: string;
}

export interface HouseholdRepository {
  create(input: CreateHouseholdInput): Promise<Household>;
  getByCode(code: string): Promise<Household | null>;
  join(householdId: string, userId: string): Promise<HouseholdMember>;
}
