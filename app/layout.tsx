import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MenuScan — QR Code Menu Analytics for Restaurants',
  description: 'Track QR code menu scans, peak times, and most viewed items. Built for restaurant owners and food service managers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7881cc2f-9343-4b08-9bf2-95439fcaf870"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
