import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'English Ballers',
  description: 'football english youths',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
