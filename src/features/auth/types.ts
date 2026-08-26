export type HomeType = "NEW" | "JOIN";

export interface IHomeSetting {
  title: string;
  icon: string;
  description: string;
  homeType: HomeType;
}
