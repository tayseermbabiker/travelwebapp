'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Mail, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

interface PillarCTAProps {
  guideName: string;
  destination?: string;
}

export default function PillarCTA({ guideName, destination }: PillarCTAProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          tags: [`guide:${guideName}`, destination ? `interest:${destination}` : ''].filter(Boolean),
          source: 'pillar_page_cta',
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Store in localStorage
        const userData = JSON.parse(localStorage.getItem('roamovo_user_data') || '{}');
        userData.email = email;
        localStorage.setItem('roamovo_user_data', JSON.stringify(userData));
      }
    } catch (err) {
      // Still mark as success for UX
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 mb-12">
      {/* Itinerary Generator CTA */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl shadow-xl p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Ready to Plan Your Trip?</h2>
            </div>
            <p className="text-lg opacity-90">
              Get a personalized itinerary with hotels, activities, restaurants, and budget breakdown - all tailored to how you love to travel.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-teal-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg whitespace-nowrap"
          >
            Create My Itinerary
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Email Capture CTA */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white">
        {isSuccess ? (
          <div className="flex items-center justify-center gap-3 py-4">
            <CheckCircle className="w-8 h-8" />
            <span className="text-xl font-semibold">You are all set! Check your inbox for travel tips.</span>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Get This Guide + Exclusive Deals</h2>
              </div>
              <p className="text-lg opacity-90">
                Get personalized recommendations, destination deals, and updates when we add new content to this guide.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 min-w-[300px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>
        )}
        {error && <p className="mt-3 text-sm text-red-200">{error}</p>}
      </div>
    </div>
  );
}
