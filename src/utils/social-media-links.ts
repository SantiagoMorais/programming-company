import { LucideIcon } from "lucide-react";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

import { env } from "@/env";

import { whatsAppLink } from "./whatsApp";

interface SocialLink {
  title: string;
  icon: LucideIcon;
  url: string;
}

export const socialLinks: SocialLink[] = [
  env.LINKEDIN_URL && {
    title: "LinkedIn",
    icon: Linkedin,
    url: env.LINKEDIN_URL,
  },
  env.INSTAGRAM_URL && {
    title: "Instagram",
    icon: Instagram,
    url: env.INSTAGRAM_URL,
  },
  {
    title: "WhatsApp",
    icon: Phone,
    url: whatsAppLink,
  },
  { title: "E-mail", icon: Mail, url: `mailto:${env.EMAIL}` },
].filter((link): link is SocialLink => Boolean(link));
