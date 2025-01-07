'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Designer() {
  const [tshirtColor, setTshirtColor] = useState('white')
  const [tshirtSize, setTshirtSize] = useState('M')
  const [designText, setDesignText] = useState('')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">T-Shirt Designer</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* T-Shirt Preview */}
        <div className="lg:col-span-2 bg-gray-100 p-8 rounded-lg flex items-center justify-center">
          <div 
            className={`w-64 h-80 relative ${
              tshirtColor === 'white' ? 'bg-white' : 
              tshirtColor === 'black' ? 'bg-black' : 'bg-blue-500'
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <p className={`text-xl ${tshirtColor === 'white' ? 'text-black' : 'text-white'}`}>
                {designText || 'Dein Design hier'}
              </p>
            </div>
          </div>
        </div>

        {/* Design Tools */}
        <div className="space-y-6">
          <div>
            <Label htmlFor="designText">Text hinzufügen</Label>
            <Input 
              id="designText" 
              value={designText} 
              onChange={(e) => setDesignText(e.target.value)}
              placeholder="Gib deinen Text ein"
            />
          </div>

          <div>
            <Label>T-Shirt Farbe</Label>
            <RadioGroup defaultValue="white" onValueChange={setTshirtColor}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="white" id="white" />
                <Label htmlFor="white">Weiß</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="black" id="black" />
                <Label htmlFor="black">Schwarz</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="blue" id="blue" />
                <Label htmlFor="blue">Blau</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="size">Größe</Label>
            <Select onValueChange={setTshirtSize}>
              <SelectTrigger>
                <SelectValue placeholder="Wähle eine Größe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="S">S</SelectItem>
                <SelectItem value="M">M</SelectItem>
                <SelectItem value="L">L</SelectItem>
                <SelectItem value="XL">XL</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full">Design speichern</Button>
          <Link href="/checkout">
            <Button className="w-full bg-green-600 hover:bg-green-700">Zur Kasse</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

