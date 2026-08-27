export type HomeType = "NEW" | "JOIN";

export type Frecuencia = "Semanal" | "Catorcenal" | "Quincenal";

export interface IHomeSetting {
  title: string;
  icon: string;
  description: string;
  homeType: HomeType;
}
