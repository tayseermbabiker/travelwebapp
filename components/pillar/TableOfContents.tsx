'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, List } from 'lucide-react';

export interface TocSection {
  id: string;
  label: string;
  icon?: string;
}

interface TableOfContentsProps {
  title: string;
  summary: string;
  highlights?: {
    label: string;
    value: string;
  }[];
  sections: TocSection[];
}

export default function TableOfContents({
  title,
  summary,
  highlights,
  sections,
}: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6 mb-8">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between mb-4"
      >
        <div className="flex items-center gap-3">
          <List className="w-5 h-5 text-teal-600" />
          <h2 className="text-lg font-bold text-gray-900">Quick Navigation</h2>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {isExpanded && (
        <>
          {/* Summary */}
          <div className="mb-5 pb-5 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{summary}</p>
          </div>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="mb-5 pb-5 border-b border-gray-200">
              <div className="flex flex-wrap gap-3">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-teal-50 to-teal-100 px-4 py-2 rounded-lg"
                  >
                    <span className="text-xs text-teal-600 font-medium">{highlight.label}</span>
                    <p className="text-sm font-bold text-teal-800">{highlight.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Jump Links */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Jump to section
            </p>
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="px-3 py-2 bg-gray-100 hover:bg-teal-100 text-gray-700 hover:text-teal-700 rounded-lg text-sm font-medium transition-colors"
                >
                  {section.icon && <span className="mr-1">{section.icon}</span>}
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
