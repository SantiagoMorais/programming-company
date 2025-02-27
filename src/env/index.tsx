import { z } from "zod";

export const envSchema = z.object({
  LINKEDIN_URL: z.string().url().optional(),
  INSTAGRAM_URL: z.string().url().optional(),
  WHATSAPP_NUMBER: z.string().refine((number) => number.length === 11, {
    message: "WhatsApp number must has 11 characters",
  }),
  EMAIL: z.string().email(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) throw new Error("Invalid Environment Variables");

export const env = _env.data;
