import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateRequestSchema, type AIResponse } from "@shared/schema";
import { generateAIResponses } from "./services/openai";

export async function registerRoutes(app: Express): Promise<Server> {
  // Generate AI responses for different prompt styles
  app.post("/api/generate", async (req, res) => {
    try {
      const { prompt, style } = generateRequestSchema.parse(req.body);
      
      // Store the request
      const promptRequest = await storage.createPromptRequest({
        prompt,
        style,
      });

      // Generate responses for all three styles
      const responses = await generateAIResponses(prompt);

      // Update the stored request with responses
      await storage.updatePromptRequest(promptRequest.id, {
        creativeResponse: responses.creative,
        conciseResponse: responses.concise,
        stepbystepResponse: responses.stepbystep,
      });

      res.json(responses);
    } catch (error) {
      console.error("Generate API error:", error);
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Failed to generate AI responses" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
