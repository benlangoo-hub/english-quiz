export type GradeLevel = "elementary" | "middle" | "high";

export type Question = {
  id: string;
  level: GradeLevel;
  promptZh: string;
  promptEn: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
};
