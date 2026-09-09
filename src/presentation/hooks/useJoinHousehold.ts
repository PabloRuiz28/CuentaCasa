import { useState } from "react";
import { JoinHouseholdDTO } from "@application/dto/JoinHouseholdDTO";
import { container } from "@core/di/container";
import { HouseholdMember } from "@domain/entities/HouseholdMember";
import { AppError } from "@domain/errors";

export const useJoinHousehold = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);

  const joinHousehold = async (
    dto: JoinHouseholdDTO,
  ): Promise<HouseholdMember | null> => {
    setIsLoading(true);
    setError(null);
    try {
      return await container.joinHouseholdUseCase.execute(dto);
    } catch (e) {
      setError(e instanceof AppError ? e : new AppError("UNKNOWN"));
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { joinHousehold, isLoading, error };
};
