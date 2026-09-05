export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span aria-hidden="true" className="inline-flex items-baseline">
        Jack of a
        <svg
          viewBox="0 0 8 22"
          className="mx-px h-[0.82em] w-auto shrink-0 translate-y-[0.06em] text-accent"
        >
          <path
            d="M4 22 C1.3 16 0.8 8.5 3.4 0 C5.7 8 5.4 15.5 4 22 Z"
            fill="currentColor"
          />
        </svg>
        <svg
          viewBox="0 0 8 22"
          className="mr-0.5 h-[0.82em] w-auto shrink-0 translate-y-[0.02em] -rotate-6 text-primary"
        >
          <path
            d="M4 22 C2 15 2.7 7.5 4.8 0 C6.5 7.3 6 15.2 4 22 Z"
            fill="currentColor"
          />
        </svg>
        Blades
      </span>
      <span className="sr-only">Jack of all Blades</span>
    </span>
  );
}
