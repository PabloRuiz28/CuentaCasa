import { Role } from "@domain/types";

export interface HouseholdMember {
  id: string;
  householdId: string;
  userId: string;
  role: Role;
  joinedAt: Date;
}
