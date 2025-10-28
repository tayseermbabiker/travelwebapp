import OpenAI from 'openai';

// Initialize OpenAI client
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Model configuration
export const MODEL = 'gpt-4o-mini';
export const MAX_TOKENS = 2000;

// Temperature settings for different agents
export const TEMPERATURES = {
  companionOptimizer: 0.7,  // Creative but consistent
  budgetAllocator: 0.5,     // More deterministic
  discoveryEngine: 0.8,     // Most creative
};
