import { Wordmark } from "@/components/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-heading text-lg font-semibold tracking-tight">
              <Wordmark />
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Watertown, SD 57201
              <br />
              <a href="tel:+16052370372" className="hover:text-ink">
                (605) 237-0372
              </a>
            </p>
            <a
              href="https://www.yelp.com/biz/jack-of-all-blades-watertown"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
            >
              Find us on Yelp
            </a>
          </div>

          <nav aria-label="Legal" className="flex flex-col gap-2 text-sm">
            <a href="/privacy" className="text-muted transition-colors hover:text-ink">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted transition-colors hover:text-ink">
              Terms of Service
            </a>
            <a
              href="/accessibility"
              className="text-muted transition-colors hover:text-ink"
            >
              Accessibility
            </a>
          </nav>
        </div>

        <p className="mt-10 text-xs text-muted">
          © {new Date().getFullYear()} Jack of all Blades. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
