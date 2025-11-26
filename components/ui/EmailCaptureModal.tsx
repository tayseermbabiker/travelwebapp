'use client';

import { useState } from 'react';
import { X, Mail, Loader2, CheckCircle } from 'lucide-react';
import { GateType, getModalCopy, saveEmail } from '@/lib/user-tracking';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  gateType: GateType;
  tags: string[];
}

export default function EmailCaptureModal({
  isOpen,
  onClose,
  onSuccess,
  gateType,
  tags,
}: EmailCaptureModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const modalCopy = getModalCopy(gateType);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to Brevo API
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          tags,
          source: gateType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      // Save email locally
      saveEmail(email, tags);

      // Show success state briefly
      setIsSuccess(true);

      // Wait a moment then trigger success callback
      setTimeout(() => {
        onSuccess();
        onClose();
        // Reset state for next use
        setIsSuccess(false);
        setEmail('');
      }, 1000);

    } catch (err) {
      console.error('Subscription error:', err);
      // Even if API fails, save locally and let user continue
      // This ensures good UX while we debug API issues
      saveEmail(email, tags);
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess();
        onClose();
        setIsSuccess(false);
        setEmail('');
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              {isSuccess ? (
                <CheckCircle className="w-8 h-8 text-teal-600" />
              ) : (
                <Mail className="w-8 h-8 text-teal-600" />
              )}
            </div>
          </div>

          {/* Text */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {isSuccess ? 'You\'re All Set!' : modalCopy.title}
            </h3>
            <p className="text-gray-600">
              {isSuccess
                ? 'Thanks for joining! Continuing...'
                : modalCopy.description}
            </p>
          </div>

          {/* Form */}
          {!isSuccess && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                    error ? 'border-red-400' : 'border-gray-300'
                  }`}
                  disabled={isSubmitting}
                  autoFocus
                />
                {error && (
                  <p className="mt-2 text-sm text-red-500">{error}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full py-3 px-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  modalCopy.buttonText
                )}
              </button>

              <p className="text-xs text-center text-gray-500">
                By continuing, you agree to receive travel tips and offers.
                Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>

        {/* Decorative bottom bar */}
        <div className="h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600" />
      </div>
    </div>
  );
}
