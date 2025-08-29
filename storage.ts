import { type User, type InsertUser, type PromptRequest, type InsertPromptRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createPromptRequest(request: InsertPromptRequest): Promise<PromptRequest>;
  getPromptRequest(id: string): Promise<PromptRequest | undefined>;
  updatePromptRequest(id: string, update: Partial<PromptRequest>): Promise<PromptRequest | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private promptRequests: Map<string, PromptRequest>;

  constructor() {
    this.users = new Map();
    this.promptRequests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createPromptRequest(insertRequest: InsertPromptRequest): Promise<PromptRequest> {
    const id = randomUUID();
    const request: PromptRequest = {
      id,
      ...insertRequest,
      creativeResponse: null,
      conciseResponse: null,
      stepbystepResponse: null,
      createdAt: new Date(),
    };
    this.promptRequests.set(id, request);
    return request;
  }

  async getPromptRequest(id: string): Promise<PromptRequest | undefined> {
    return this.promptRequests.get(id);
  }

  async updatePromptRequest(id: string, update: Partial<PromptRequest>): Promise<PromptRequest | undefined> {
    const existing = this.promptRequests.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...update };
    this.promptRequests.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
