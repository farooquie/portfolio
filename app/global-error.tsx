'use client';

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#050505] text-[#fafafa] font-sans">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-red-500">Something went wrong!</h2>
          <p className="text-zinc-400 max-w-md text-sm">
            A critical error occurred. Please try again or refresh the page.
          </p>
          <button
            onClick={() => unstable_retry()}
            className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20 rounded-md transition-all text-sm cursor-pointer"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
