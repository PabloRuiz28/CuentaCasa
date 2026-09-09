import { useState } from "react";
import { CreateHouseholdDTO } from "@application/dto/CreateHouseholdDTO";
import { container } from "@core/di/container";
import { Household } from "@domain/entities/Household";
import { AppError } from "@domain/errors";

export const useCreateHousehold = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);

  const createHousehold = async (
    dto: CreateHouseholdDTO,
  ): Promise<Household | null> => {
    setIsLoading(true);
    setError(null);
    try {
      return await container.createHouseholdUseCase.execute(dto);
    } catch (e) {
      setError(e instanceof AppError ? e : new AppError("UNKNOWN"));
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { createHousehold, isLoading, error };
};
