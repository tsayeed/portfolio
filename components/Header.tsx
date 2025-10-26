'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all shadow-md">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl opacity-30 blur group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent hidden sm:block">
              Tahsin Al Sayeed
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium"
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-in slide-in-from-top">
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/#about" 
                  className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/#experience" 
                  className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  href="/#skills" 
                  className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="block py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

