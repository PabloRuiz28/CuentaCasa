import z from "zod";

export const JoinHouseholdSchema = z.object({
  code: z.string().trim().min(1, "El código es obligatorio").toUpperCase(),
  userId: z.string().trim(),
});

export type JoinHouseholdDTO = z.infer<typeof JoinHouseholdSchema>;
