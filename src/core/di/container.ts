import { HouseholdCodeService } from "@application/services/HouseholdCodeService";
import { GetCurrentUserUseCase } from "@application/use-cases/auth/GetCurrentUserUseCase";
import { SignInUseCase } from "@application/use-cases/auth/SignInUseCase";
import { SignOutUseCase } from "@application/use-cases/auth/SignOutUseCase";
import { SignUpUseCase } from "@application/use-cases/auth/SignUpUseCase";
import { CreateHouseholdUseCase } from "@application/use-cases/household/CreateHouseholdUseCase";
import { JoinHouseholdUseCase } from "@application/use-cases/household/JoinHouseholdUseCase";
import { FakeAuthRepository } from "@infrastructure/fake/FakeAuthRepository";
import { FakeHouseholdRepository } from "@infrastructure/fake/FakeHouseholdRepository";
import { FakeUserRepository } from "@infrastructure/fake/FakeUserRepository";

const authRepository = new FakeAuthRepository();
const userRepository = new FakeUserRepository();
const householdRepository = new FakeHouseholdRepository();
const householdCodeService = new HouseholdCodeService();

export const container = {
  getCurrentUserUseCase: new GetCurrentUserUseCase(
    authRepository,
    userRepository,
  ),
  signInUseCase: new SignInUseCase(authRepository, userRepository),
  signUpUseCase: new SignUpUseCase(authRepository, userRepository),
  signOutUseCase: new SignOutUseCase(authRepository),
  createHouseholdUseCase: new CreateHouseholdUseCase(
    householdRepository,
    householdCodeService,
  ),
  joinHouseholdUseCase: new JoinHouseholdUseCase(householdRepository),
};
