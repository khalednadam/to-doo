import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Khaled\s todoo',
  description: 'A project to practice Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-4 mx-auto bg-slate-900 text-slate-100 container`}>{children}</body>
    </html>
  )
}
