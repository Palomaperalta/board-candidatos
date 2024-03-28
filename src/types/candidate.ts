export type StepType =
  | "Entrevista inicial"
  | "Entrevista técnica"
  | "Oferta"
  | "Asignación"
  | "Rechazo";

export interface Candidate {
  id: string;
  name: string;
  step: StepType;
  comments: string;
}

export type ThemeType = "light" | "dark";
