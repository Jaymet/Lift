import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/collections/1" className="text-gray-600 hover:text-gray-800">Kollektion 1</Link></li>
              <li><Link href="/collections/2" className="text-gray-600 hover:text-gray-800">Kollektion 2</Link></li>
              <li><Link href="/designer" className="text-gray-600 hover:text-gray-800">Designer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link href="/agb" className="text-gray-600 hover:text-gray-800">AGB</Link></li>
              <li><Link href="/datenschutz" className="text-gray-600 hover:text-gray-800">Datenschutz</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Kontakt & Service</h3>
            <ul className="space-y-2">
              <li><Link href="/kontakt" className="text-gray-600 hover:text-gray-800">Kontakt</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-gray-800">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <Input type="email" placeholder="Deine E-Mail" className="rounded-r-none" />
              <Button type="submit" className="rounded-l-none">Anmelden</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          © 2023 Lift. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}

