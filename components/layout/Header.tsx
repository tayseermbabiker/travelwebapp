'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesDropdownOpen, setGuidesDropdownOpen] = useState(false);

  const travelGuides = [
    { name: 'Destinations by Season', href: '/seasons', description: 'Best destinations by season' },
    { name: 'World Festivals', href: '/festivals', description: 'Celebrate global festivals' },
    { name: 'Foodie Destinations', href: '/foodie-destinations', description: 'World\'s top food cities' },
    { name: 'Solo Female Destinations', href: '/solo-female-travel', description: 'Safest destinations for women' },
    { name: 'Digital Nomad Destinations', href: '/digital-nomad', description: 'Remote work destinations' },
    { name: 'Family Destinations', href: '/family-travel', description: 'Kid-friendly destinations' },
    { name: 'Adventure Destinations', href: '/adventure-travel', description: 'Thrilling destinations' },
    { name: 'Wellness Destinations', href: '/wellness-retreats', description: 'Healing destinations' },
    { name: 'Affordable Destinations', href: '/budget-travel', description: 'Budget travel under $30/day' },
  ];

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-teal-600 hover:text-teal-700 transition">
            WANDER
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 font-medium transition"
              >
                {link.name}
              </Link>
            ))}

            {/* Travel Guides Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setGuidesDropdownOpen(true)}
              onMouseLeave={() => setGuidesDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-teal-600 font-medium transition py-2"
              >
                Travel Guides
                <ChevronDown className={`w-4 h-4 transition-transform ${guidesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Invisible bridge to prevent dropdown from closing */}
              <div className="absolute top-full left-0 w-64 h-2 -mt-0.5"></div>

              {guidesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 overflow-hidden">
                    {travelGuides.map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="block px-4 py-3 hover:bg-teal-50 transition group"
                      >
                        <div className="font-medium text-gray-800 group-hover:text-teal-600">
                          {guide.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {guide.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/"
              className="bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-600 transition"
            >
              Plan Trip
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-teal-600 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-teal-600 font-medium transition px-2 py-2"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Travel Guides Section */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-2">
                  Travel Guides
                </div>
                {travelGuides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-2 text-gray-700 hover:text-teal-600 font-medium transition"
                  >
                    {guide.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition text-center"
              >
                Plan Trip
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
