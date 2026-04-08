// import necessary libraries and types
import type { Metadata } from 'next'
import './globals.css'

// define the metadata for the calendar app
export const metadata: Metadata = {
  title: 'Calendar App',
  description: 'A personal calendar application',
}

// define the RootLayout component that wraps the entire application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {children}
      </body>
    </html>
  )
}