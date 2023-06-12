import './globals.css'
import { Inter } from 'next/font/google'
import StyledJsxRegistry from './registry'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'F1 FanTrack',
  description: 'Experience and track the F1!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} >
        <StyledJsxRegistry>
          <Navbar />
          {children}
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
