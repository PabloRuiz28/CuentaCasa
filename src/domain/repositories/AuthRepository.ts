export interface AuthRepository {
  signUp(email: string, password: string): Promise<string>;
  signIn(email: string, password: string): Promise<string>;
  signOut(): Promise<void>;
  getCurrentUserId(): Promise<string | null>;
}
