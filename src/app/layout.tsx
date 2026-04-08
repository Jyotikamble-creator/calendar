import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calendar App',
  description: 'A personal calendar application',
}

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