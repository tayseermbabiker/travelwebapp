'use client';

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('trip-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80')`,
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          WANDER
        </h1>

        <p className="mb-2 text-xl font-light sm:text-2xl md:text-3xl">
          Discover Your Next Adventure
        </p>

        <p className="mb-12 text-base opacity-90 sm:text-lg md:text-xl">
          AI-Powered Travel Made Personal
        </p>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToForm}
          className="animate-bounce cursor-pointer focus:outline-none"
          aria-label="Scroll to trip form"
        >
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

        <p className="mt-4 text-sm opacity-75">Start Planning Below</p>
      </div>
    </section>
  );
}
