import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import type { Metadata } from 'next'
import '@/style/globals.css'

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
