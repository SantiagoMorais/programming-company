import { LucideIcon, MoonStar, Sun, Sunrise } from "lucide-react";

interface ICustomizableOption {
  title: string;
  icon: LucideIcon;
  value: string;
}

export const customizableContentOptions: ICustomizableOption[] = [
  { title: "Manhã", icon: Sunrise, value: "option-one" },
  { title: "Tarde", icon: Sun, value: "option-two" },
  { title: "Noite", icon: MoonStar, value: "option-three" },
];
