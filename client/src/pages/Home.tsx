import Hero from "@/sections/Hero";
import Story from "@/sections/Story";
import Nikkah from "@/sections/Nikkah";
import Celebration from "@/sections/Celebration";
import QuranVerse from "@/sections/QuranVerse";
import Footer from "@/sections/Footer";

/**
 * Home Page - One-Page Wedding Website
 * Design: Ethereal, dreamlike wedding experience with BLUE color scheme
 * Sections: Hero (with Bismillah) → Story → Nikkah → Celebration → Quran Verse → Footer
 */

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-blue-50/20">
      {/* Floating geometric decorations - ethereal */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-32 right-20 w-28 h-28 opacity-[0.06] animate-rotate-slow">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 0L61.8 38.2L100 50L61.8 61.8L50 100L38.2 61.8L0 50L38.2 38.2L50 0Z"
              fill="#2563EB"
            />
          </svg>
        </div>
        <div className="absolute bottom-60 left-16 w-20 h-20 opacity-[0.05] animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '90s' }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 0L61.8 38.2L100 50L61.8 61.8L50 100L38.2 61.8L0 50L38.2 38.2L50 0Z"
              fill="#60A5FA"
            />
          </svg>
        </div>
        <div className="absolute top-1/2 right-10 w-16 h-16 opacity-[0.04] animate-float-slow">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#2563EB" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <Story />
        <Nikkah />
        <Celebration />
        <QuranVerse />
        <Footer />
      </main>
    </div>
  );
}
