import type { Metadata } from 'next'
import '@/style/globals.css'
import '@/style/font.css'

export const metadata: Metadata = {
  title: 'Suna Portfolio',
  description: "Welcome to Suna's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
