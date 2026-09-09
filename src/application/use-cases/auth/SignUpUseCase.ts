import { SignUpDTO, SignUpSchema } from "@application/dto/SignUpDTO";
import { toValidationError } from "@application/validation/mapZodError";
import { User } from "@domain/entities/User";
import { AuthRepository } from "@domain/repositories/AuthRepository";
import {
  CreateUserInput,
  UserRepository,
} from "@domain/repositories/UserRepository";

export class SignUpUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(dto: SignUpDTO): Promise<User> {
    const parsed = SignUpSchema.safeParse(dto);

    if (!parsed.success) throw toValidationError(parsed.error);

    const userId = await this.authRepository.signUp(
      parsed.data.email,
      parsed.data.password,
    );

    const input: CreateUserInput = {
      id: userId,
      firstName: parsed.data.firstName!,
      lastName: parsed.data.lastName,
      email: parsed.data.email,
    };

    return this.userRepository.create(input);
  }
}
