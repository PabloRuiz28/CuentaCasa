import { User } from "@domain/entities/User";
import { AuthRepository } from "@domain/repositories/AuthRepository";
import { UserRepository } from "@domain/repositories/UserRepository";

export class GetCurrentUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(): Promise<User | null> {
    const userId = await this.authRepository.getCurrentUserId();
    if (!userId) return null;
    return this.userRepository.getById(userId);
  }
}
