'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function Checkout() {
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Bestellübersicht</h2>
          <div className="bg-white p-4 rounded-md mb-4">
            <p className="font-semibold">Personalisiertes T-Shirt</p>
            <p className="text-gray-600">Größe: M</p>
            <p className="text-gray-600">Farbe: Weiß</p>
            <p className="text-gray-600">Design: Dein Text hier</p>
          </div>
          <p className="text-xl font-bold">Gesamtpreis: €29.99</p>
        </div>

        {/* Customer Information Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Kundendaten</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Vor- und Nachname" required />
            </div>
            <div>
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" type="email" placeholder="deine@email.de" required />
            </div>
            <div>
              <Label htmlFor="address">Lieferadresse</Label>
              <Input id="address" placeholder="Straße, Hausnummer, PLZ, Stadt" required />
            </div>
            <div>
              <Label htmlFor="phone">Telefonnummer</Label>
              <Input id="phone" type="tel" placeholder="+49 123 4567890" required />
            </div>

            <div>
              <Label>Zahlungsoption</Label>
              <RadioGroup defaultValue="credit-card">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card">Kreditkarte</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                  <Label htmlFor="bank-transfer">Überweisung</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreeToTerms}
                onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
              />
              <Label htmlFor="terms">
                Ich stimme den AGB und der Datenschutzerklärung zu
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={!agreeToTerms}
            >
              Jetzt bestellen
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

