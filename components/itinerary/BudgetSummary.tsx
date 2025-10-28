'use client';

interface BudgetSummaryProps {
  budgetAllocation: {
    totalBudget: number;
    breakdown: {
      category: string;
      amount: number;
      percentage: number;
    }[];
    reasoning?: string;
    savingTips?: string[];
  };
}

export default function BudgetSummary({ budgetAllocation }: BudgetSummaryProps) {
  const getCategoryEmoji = (category: string) => {
    const emojiMap: { [key: string]: string } = {
      accommodation: '🏨',
      activities: '🎯',
      food: '🍽️',
      transportation: '🚗',
      shopping: '🛍️',
      contingency: '💰',
      flights: '✈️',
    };
    return emojiMap[category.toLowerCase()] || '💵';
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      'bg-teal-100 text-teal-800',
      'bg-blue-100 text-blue-800',
      'bg-purple-100 text-purple-800',
      'bg-orange-100 text-orange-800',
      'bg-pink-100 text-pink-800',
      'bg-green-100 text-green-800',
    ];
    return colors[index % colors.length];
  };

  // Convert breakdown to array if it's an object
  const breakdownArray = Array.isArray(budgetAllocation.breakdown)
    ? budgetAllocation.breakdown
    : Object.entries(budgetAllocation.breakdown || {}).map(([category, data]: [string, any]) => ({
        category,
        amount: data.amount || data,
        percentage: data.percentage || 0,
      }));

  return (
    <section className="bg-white rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        💰 Budget Breakdown
      </h2>

      {/* Total Budget */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl p-6 mb-6">
        <p className="text-sm opacity-90 mb-1">Total Budget</p>
        <p className="text-4xl font-bold">
          ${budgetAllocation.totalBudget.toLocaleString()}
        </p>
      </div>

      {/* Budget Categories */}
      <div className="space-y-4">
        {breakdownArray.map((item, index) => (
          <div key={index} className="space-y-2">
            {/* Category Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{getCategoryEmoji(item.category)}</span>
                <span className="font-semibold text-gray-800 capitalize">
                  {item.category}
                </span>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-800">
                  ${item.amount.toLocaleString()}
                </div>
                <div className={`text-xs font-semibold px-2 py-1 rounded-full inline-block ${getCategoryColor(index)}`}>
                  {item.percentage}%
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-teal-500 to-teal-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Reasoning */}
      {budgetAllocation.reasoning && (
        <div className="mt-6 bg-gray-50 rounded-xl p-4">
          <h3 className="font-semibold text-gray-800 mb-2 text-sm">
            💡 Budget Strategy
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {budgetAllocation.reasoning}
          </p>
        </div>
      )}
    </section>
  );
}
