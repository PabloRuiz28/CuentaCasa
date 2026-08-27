import { useMemo } from "react";
import { useWindowDimensions } from "react-native";

const BASE_WIDTH = 375;

const TABLET_MIN_WIDTH = 768;

export interface ResponsiveInfo {
  width: number;
  height: number;
  isTablet: boolean;
  isLandscape: boolean;
  scale: (size: number) => number;
}

export const useResponsive = (): ResponsiveInfo => {
  const { width, height } = useWindowDimensions();
  return useMemo(
    () => ({
      width,
      height,
      isTablet: width >= TABLET_MIN_WIDTH,
      isLandscape: width > height,
      scale: (size: number) => Math.round(size * (width / BASE_WIDTH)),
    }),
    [width, height],
  );
};

export const useResponsiveContentStyle = () => {
  const { isTablet, isLandscape } = useResponsive();
  return {
    width: isLandscape ? "60%" : isTablet ? "80%" : "100%",
    maxHeight: isLandscape ? "100%" : isTablet ? "70%" : "auto",
    margin: "auto",
  } as const;
};
