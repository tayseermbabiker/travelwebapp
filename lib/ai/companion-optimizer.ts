import { openai, MODEL, TEMPERATURES } from './openai';
import { COMPANION_OPTIMIZER_PROMPT } from './prompts';
import { CompanionType, InterestType } from '@/types';

export interface CompanionOptimizerInput {
  companionType: CompanionType;
  interests: InterestType[];
  destination: string;
  budget: number;
}

export interface CompanionOptimizerOutput {
  profile: string;
  priorities: {
    safety: number;
    romance: number;
    social: number;
    budget: number;
    adventure: number;
    culture: number;
    food: number;
    relaxation: number;
  };
  avoidances: string[];
  recommendations: string[];
}

export async function optimizeCompanion(
  input: CompanionOptimizerInput
): Promise<CompanionOptimizerOutput> {
  try {
    const userMessage = JSON.stringify({
      companionType: input.companionType,
      interests: input.interests,
      destination: input.destination,
      budget: input.budget,
    }, null, 2);

    const response = await openai.chat.completions.create({
      model: MODEL,
      messages: [
        { role: 'system', content: COMPANION_OPTIMIZER_PROMPT },
        { role: 'user', content: userMessage },
      ],
      temperature: TEMPERATURES.companionOptimizer,
      response_format: { type: 'json_object' },
      max_tokens: 1000,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from AI');
    }

    const result = JSON.parse(content);

    // Validate output structure
    if (!result.profile || !result.priorities || !result.recommendations) {
      throw new Error('Invalid AI response structure');
    }

    return result as CompanionOptimizerOutput;
  } catch (error) {
    console.error('Companion Optimizer Error:', error);

    // Fallback response
    return {
      profile: `${input.companionType} traveler interested in ${input.interests.join(', ')}. Looking for authentic experiences within budget.`,
      priorities: {
        safety: 7,
        romance: input.companionType === 'couple' ? 9 : 3,
        social: input.companionType === 'solo' || input.companionType === 'friends' ? 8 : 5,
        budget: 6,
        adventure: input.interests.includes('adventure') ? 8 : 5,
        culture: input.interests.includes('culture') ? 8 : 5,
        food: input.interests.includes('food') ? 9 : 6,
        relaxation: input.interests.includes('beach') || input.interests.includes('wellness') ? 8 : 5,
      },
      avoidances: ['Overcrowded tourist traps', 'Overpriced experiences'],
      recommendations: [
        'Mix of popular attractions and local experiences',
        'Balance activity levels throughout the day',
        'Book popular activities in advance',
      ],
    };
  }
}
