import { User } from "@domain/entities/User";
import { NotFoundError } from "@domain/errors";
import { AuthRepository } from "@domain/repositories/AuthRepository";
import { UserRepository } from "@domain/repositories/UserRepository";

export class SignInUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(email: string, password: string): Promise<User> {
    const userId = await this.authRepository.signIn(email, password);

    const user = await this.userRepository.getById(userId);
    if (!user) {
      throw new NotFoundError("NOT_FOUND", "No existe el perfil del usuario");
    }

    return user;
  }
}
