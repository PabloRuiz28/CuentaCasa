import { User } from "@domain/entities/User";
import {
  CreateUserInput,
  UserRepository,
} from "@domain/repositories/UserRepository";

export class FakeUserRepository implements UserRepository {
  private readonly users = new Map<string, User>([
    [
      "demo-user",
      {
        id: "demo-user",
        firstName: "Demo",
        lastName: "Usuario",
        email: "demo@correo.com",
        createdAt: new Date(),
      },
    ],
  ]);

  async create(input: CreateUserInput): Promise<User> {
    const user: User = {
      id: input.id,
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      createdAt: new Date(),
    };

    this.users.set(user.id, user);
    return user;
  }

  async getById(id: string): Promise<User | null> {
    return this.users.get(id) ?? null;
  }
}
