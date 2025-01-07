import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, User } from 'lucide-react'
import LoginModal from '@/components/LoginModal'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lift',
  description: 'Design and order your personalized t-shirts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">Lift</Link>
            <ul className="hidden md:flex space-x-8">
              <li><Link href="/collections/1" className="text-gray-600 hover:text-gray-800">Kollektion 1</Link></li>
              <li><Link href="/collections/2" className="text-gray-600 hover:text-gray-800">Kollektion 2</Link></li>
              <li><Link href="/designer" className="text-gray-600 hover:text-gray-800">Designer</Link></li>
            </ul>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <LoginModal />
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

