import { openai, MODEL, TEMPERATURES } from './openai';
import { BUDGET_ALLOCATOR_PROMPT } from './prompts';
import { CompanionOptimizerOutput } from './companion-optimizer';

export interface BudgetAllocatorInput {
  totalBudget: number;
  days: number;
  destination: string;
  companionProfile: CompanionOptimizerOutput;
  companionType: string;
  flyingFrom?: string;
  skipFlights?: boolean;
}

export interface BudgetBreakdownItem {
  amount: number;
  percentage: number;
  reasoning: string;
}

export interface BudgetAllocatorOutput {
  totalBudget: number;
  breakdown: {
    flights: BudgetBreakdownItem;
    accommodation: BudgetBreakdownItem;
    activities: BudgetBreakdownItem;
    food: BudgetBreakdownItem;
    transport: BudgetBreakdownItem;
  };
  dailyBudget: {
    perDay: number;
    breakdown: string;
  };
  savingTips: string[];
}

export async function allocateBudget(
  input: BudgetAllocatorInput
): Promise<BudgetAllocatorOutput> {
  try {
    const userMessage = JSON.stringify({
      totalBudget: input.totalBudget,
      days: input.days,
      destination: input.destination,
      companionType: input.companionType,
      companionProfile: input.companionProfile,
      flyingFrom: input.flyingFrom,
      skipFlights: input.skipFlights,
    }, null, 2);

    const response = await openai.chat.completions.create({
      model: MODEL,
      messages: [
        { role: 'system', content: BUDGET_ALLOCATOR_PROMPT },
        { role: 'user', content: userMessage },
      ],
      temperature: TEMPERATURES.budgetAllocator,
      response_format: { type: 'json_object' },
      max_tokens: 800,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from AI');
    }

    const result = JSON.parse(content);

    // Validate output structure
    if (!result.breakdown || !result.dailyBudget) {
      throw new Error('Invalid AI response structure');
    }

    return result as BudgetAllocatorOutput;
  } catch (error) {
    console.error('Budget Allocator Error:', error);

    // Fallback response with basic allocation
    const perDay = Math.floor(input.totalBudget / input.days);
    const flightBudget = input.skipFlights ? 0 : Math.floor(input.totalBudget * 0.25);
    const remaining = input.totalBudget - flightBudget;

    return {
      totalBudget: input.totalBudget,
      breakdown: {
        flights: {
          amount: flightBudget,
          percentage: input.skipFlights ? 0 : 25,
          reasoning: input.skipFlights ? 'Flights arranged separately' : 'Standard flight allocation',
        },
        accommodation: {
          amount: Math.floor(remaining * 0.35),
          percentage: 35,
          reasoning: `${input.days} nights accommodation`,
        },
        activities: {
          amount: Math.floor(remaining * 0.30),
          percentage: 30,
          reasoning: 'Mix of paid and free activities',
        },
        food: {
          amount: Math.floor(remaining * 0.25),
          percentage: 25,
          reasoning: 'Local dining and one special meal',
        },
        transport: {
          amount: Math.floor(remaining * 0.10),
          percentage: 10,
          reasoning: 'Local transport and taxis',
        },
      },
      dailyBudget: {
        perDay: perDay,
        breakdown: `Approximately $${perDay} per day`,
      },
      savingTips: [
        'Use public transport when possible',
        'Book activities in advance for better rates',
        'Mix high-end and budget dining experiences',
      ],
    };
  }
}
