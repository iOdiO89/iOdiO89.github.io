import type { Metadata } from 'next'
import '@/style/globals.css'
import '@/style/font.css'

export const metadata: Metadata = {
  title: '서나의 블로그',
  description: "Welcome to Suna's Blog",
  icons: {
    icon: '/favicon.png',
  },
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
