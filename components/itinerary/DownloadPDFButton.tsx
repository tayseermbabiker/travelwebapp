'use client';

import { useState } from 'react';
import { Download, Share2, MessageCircle, Copy } from 'lucide-react';
import { downloadPDF } from '@/lib/pdf/generator';

interface DownloadPDFButtonProps {
  itineraryData: any;
}

export default function DownloadPDFButton({ itineraryData }: DownloadPDFButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      // Prepare data for PDF
      const pdfData = {
        destination: itineraryData.destination,
        dateRange: itineraryData.dateRange,
        companionType: itineraryData.companionType,
        interests: itineraryData.interests,
        budgetAllocation: itineraryData.budgetAllocation,
        days: itineraryData.days || [],
        hotel: itineraryData.days?.[0]?.accommodation?.hotel,
      };

      downloadPDF(pdfData);
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const shareToWhatsApp = () => {
    // Create a text summary for WhatsApp
    const summary = `
🌍 *${itineraryData.destination} Travel Itinerary*

📅 ${new Date(itineraryData.dateRange.start).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - ${new Date(itineraryData.dateRange.end).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}

💰 Total Budget: $${itineraryData.budgetAllocation?.totalBudget || 'N/A'}

${itineraryData.days.map((day: any) => `
*Day ${day.day}: ${day.theme}*
${day.date}${day.city ? ` (${day.city})` : ''}

🌅 Morning: ${day.morning?.activity?.name || 'Free time'}
🍽️ Lunch: ${day.lunch?.restaurant?.name || 'TBD'}
☀️ Afternoon: ${day.afternoon?.activity?.name || 'Free time'}
🌙 Evening: ${day.evening?.activity?.name || day.evening?.restaurant?.name || 'Free time'}
`).join('\n')}

✨ Planned with Wander - AI Travel Planner
🔗 wander.travel
    `.trim();

    // Encode for WhatsApp URL
    const encodedText = encodeURIComponent(summary);
    const whatsappUrl = `https://wa.me/?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    setShowShareMenu(false);
  };

  const copyToClipboard = async () => {
    const summary = `
${itineraryData.destination} Travel Itinerary

${new Date(itineraryData.dateRange.start).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - ${new Date(itineraryData.dateRange.end).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}

Total Budget: $${itineraryData.budgetAllocation?.totalBudget || 'N/A'}

${itineraryData.days.map((day: any) => `
Day ${day.day}: ${day.theme}
${day.date}${day.city ? ` (${day.city})` : ''}

Morning: ${day.morning?.activity?.name || 'Free time'}
Lunch: ${day.lunch?.restaurant?.name || 'TBD'}
Afternoon: ${day.afternoon?.activity?.name || 'Free time'}
Evening: ${day.evening?.activity?.name || day.evening?.restaurant?.name || 'Free time'}
`).join('\n')}

Planned with Wander - AI Travel Planner
    `.trim();

    try {
      await navigator.clipboard.writeText(summary);
      alert('✅ Itinerary copied to clipboard!');
      setShowShareMenu(false);
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('❌ Failed to copy to clipboard');
    }
  };

  return (
    <div className="flex gap-3 relative">
      {/* Download PDF Button */}
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
      >
        {isGenerating ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Generating...</span>
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </>
        )}
      </button>

      {/* Share Button with Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowShareMenu(!showShareMenu)}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md"
        >
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>

        {/* Share Dropdown Menu */}
        {showShareMenu && (
          <>
            {/* Backdrop to close menu */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowShareMenu(false)}
            ></div>

            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-20">
              <button
                onClick={shareToWhatsApp}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
                <div>
                  <div className="text-gray-800 font-medium">WhatsApp</div>
                  <div className="text-xs text-gray-500">Share via WhatsApp</div>
                </div>
              </button>

              <button
                onClick={copyToClipboard}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition"
              >
                <Copy className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="text-gray-800 font-medium">Copy Text</div>
                  <div className="text-xs text-gray-500">Copy to clipboard</div>
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
