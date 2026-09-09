import { Frecuencia } from "@domain/types";

export interface Household {
  id: string;
  houseName?: string;
  code: string;
  baseAmount: number;
  contributionFrequency: Frecuencia;
  createdByUserId: string;
  createdAt: Date;
}
