import { IHomeSetting } from "./types";

export const HOME_OPTIONS: IHomeSetting[] = [
  {
    title: "Crear un nuevo Hogar",
    icon: "heart-plus",
    description: "Configura un nuevo espacio financiero para ti y tu pareja",
    homeType: "NEW",
  },
  {
    title: "Unirme a un Hogar",
    icon: "account-heart",
    description: "Usa el código de invitación que te compartió tu cónyuge",
    homeType: "JOIN",
  },
];
