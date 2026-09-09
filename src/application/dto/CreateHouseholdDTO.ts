import z from "zod";
import { FRECUENCIAS } from "@domain/types";

export const CreateHouseholdSchema = z.object({
  houseName: z.string().trim().optional(),
  baseAmount: z.number().positive("El monto base debe ser mayor a 0"),
  contributionFrequency: z.enum(FRECUENCIAS),
  createdByUserId: z.string().trim().min(1),
});

export type CreateHouseholdDTO = z.infer<typeof CreateHouseholdSchema>;
