import { User } from "@domain/entities/User";

export interface CreateUserInput {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserRepository {
  create(input: CreateUserInput): Promise<User>;
  getById(id: string): Promise<User | null>;
}
