import { AuthError } from "@domain/errors";
import { AuthRepository } from "@domain/repositories/AuthRepository";

type Credential = { email: string; password: string };

export class FakeAuthRepository implements AuthRepository {
  private readonly users = new Map<string, Credential>([
    ["demo-user", { email: "demo@correo.com", password: "123456" }],
  ]);

  private currentUserId: string | null = null;
  private counter = 0;

  async signUp(email: string, password: string): Promise<string> {
    const normalized = email.trim().toLowerCase();

    if ([...this.users.values()].some((c) => c.email === normalized)) {
      throw new AuthError("AUTH_EMAIL_IN_USE", "El correo ya está registrado");
    }

    const id = `user-${++this.counter}`;
    this.users.set(id, { email: normalized, password });
    this.currentUserId = id;
    return id;
  }

  async signIn(email: string, password: string): Promise<string> {
    const normalized = email.trim().toLowerCase();

    for (const [id, credential] of this.users) {
      if (credential.email === normalized) {
        if (credential.password !== password) {
          throw new AuthError(
            "AUTH_INVALID_CREDENTIALS",
            "Contraseña incorrecta",
          );
        }
        this.currentUserId = id;
        return id;
      }
    }

    throw new AuthError(
      "AUTH_INVALID_CREDENTIALS",
      "Correo o contraseña incorrectos",
    );
  }

  async signOut(): Promise<void> {
    this.currentUserId = null;
  }

  async getCurrentUserId(): Promise<string | null> {
    return this.currentUserId;
  }
}
