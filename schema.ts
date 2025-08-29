import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const promptRequests = pgTable("prompt_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  prompt: text("prompt").notNull(),
  style: varchar("style", { length: 20 }).notNull(),
  creativeResponse: text("creative_response"),
  conciseResponse: text("concise_response"),
  stepbystepResponse: text("stepbystep_response"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPromptRequestSchema = createInsertSchema(promptRequests).pick({
  prompt: true,
  style: true,
});

export const generateRequestSchema = z.object({
  prompt: z.string().min(1, "Prompt is required"),
  style: z.enum(["creative", "concise", "stepbystep"]),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertPromptRequest = z.infer<typeof insertPromptRequestSchema>;
export type PromptRequest = typeof promptRequests.$inferSelect;
export type GenerateRequest = z.infer<typeof generateRequestSchema>;

export interface AIResponse {
  creative: string;
  concise: string;
  stepbystep: string;
}
