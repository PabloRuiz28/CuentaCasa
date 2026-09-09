import { createContext, useContext, useEffect, useState } from "react";
import { SignUpDTO } from "@application/dto/SignUpDTO";
import { container } from "@core/di/container";
import { User } from "@domain/entities/User";

type AuthContextValue = {
  user: User | null;
  isAuth: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<User>;
  signUp: (dto: SignUpDTO) => Promise<User>;
  signOut: () => Promise<void>;
  completeOnboarding: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const restore = async () => {
      try {
        const currentUser = await container.getCurrentUserUseCase.execute();
        if (active) {
          setUser(currentUser);
          setIsAuth(currentUser !== null);
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    restore();

    return () => {
      active = false;
    };
  }, []);

  const signIn = async (email: string, password: string): Promise<User> => {
    const signedInUser = await container.signInUseCase.execute(email, password);
    setUser(signedInUser);
    setIsAuth(true);
    return signedInUser;
  };

  const signUp = async (dto: SignUpDTO): Promise<User> => {
    const newUser = await container.signUpUseCase.execute(dto);
    setUser(newUser);
    return newUser;
  };

  const signOut = async (): Promise<void> => {
    await container.signOutUseCase.execute();
    setUser(null);
    setIsAuth(false);
  };

  const completeOnboarding = () => {
    setIsAuth(true);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        isLoading,
        signIn,
        signUp,
        signOut,
        completeOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }

  return context;
};
