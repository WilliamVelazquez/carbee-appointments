'use client'

import Button from "./_components/Button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <a href="/" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="h-20" src="https://app.curbee.com/public/images/logo-primary.svg" alt="Carbee logo" />
          </a>
          <h1 className="p-12 text-secondary font-bold text-xl">Something went wrong! Please try again!</h1>
          <Button
            onClick={() => reset()}
          >
            Go to Dashboard / Login
          </Button>
        </div>
      </main>
      </body>
    </html>
  )
}
