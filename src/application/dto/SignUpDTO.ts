import z from "zod";

export const SignUpSchema = z.object({
  firstName: z.string().trim().min(2, "El nombre es requerido"),
  lastName: z.string().trim().min(2, "El apellido es requerido"),
  email: z.string().trim().pipe(z.email("El correo electrónico no es válido")),
  password: z
    .string()
    .trim()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .refine((val) => /[A-Z]/.test(val), {
      error: "La contraseña debe contener al menos una letra mayúscula.",
    })
    .refine((val) => /[a-z]/.test(val), {
      message: "La contraseña debe contener al menos una letra minúscula.",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "La contraseña debe contener al menos un número.",
    })
    .refine((val) => /[^A-Za-z0-9]/.test(val), {
      message: "La contraseña debe contener al menos un carácter especial.",
    }),
});

export type SignUpDTO = z.infer<typeof SignUpSchema>;
