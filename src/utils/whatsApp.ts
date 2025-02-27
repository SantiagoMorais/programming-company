import { env } from "@/env";

const formatMessageForWeb = (message: string): string => {
  return encodeURIComponent(message);
};

const greetingsHour = () => {
  const date = new Date();
  const hour = date.getHours();
  const inTheMorning = hour >= 6 && hour < 12;
  const inTheAfternoon = hour >= 12 && hour < 18;
  const inTheNight = hour >= 18 && hour < 24;

  switch (true) {
    case inTheMorning:
      return "Bom dia";
    case inTheAfternoon:
      return "Boa tarde";
    case inTheNight:
      return "Boa noite";
    default:
      return "Olá";
  }
};

const defaultWhatsappMessage: string = `${greetingsHour()}! Encontrei o contato da empresa pelo site e gostaria de um orçamento.`;

export const whatsAppLink: string = `https://api.whatsApp.com/send?phone=${env.WHATSAPP_NUMBER}&text=${formatMessageForWeb(defaultWhatsappMessage)}`;
