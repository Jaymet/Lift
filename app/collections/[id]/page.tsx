'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CollectionPage({ params }: { params: { id: string } }) {
  const [priceRange, setPriceRange] = useState([0, 100])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Kollektion {params.id}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Sidebar */}
        <aside className="w-full md:w-1/4">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Produkttyp</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="t-shirts" />
                  <Label htmlFor="t-shirts" className="ml-2">T-Shirts</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="hoodies" />
                  <Label htmlFor="hoodies" className="ml-2">Hoodies</Label>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Größen</h3>
              <div className="space-y-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <div key={size} className="flex items-center">
                    <Checkbox id={`size-${size}`} />
                    <Label htmlFor={`size-${size}`} className="ml-2">{size}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Farben</h3>
              <div className="space-y-2">
                {['Weiß', 'Schwarz', 'Blau', 'Rot'].map((color) => (
                  <div key={color} className="flex items-center">
                    <Checkbox id={`color-${color}`} />
                    <Label htmlFor={`color-${color}`} className="ml-2">{color}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Preis</h3>
              <Slider
                min={0}
                max={100}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="mt-2">
                €{priceRange[0]} - €{priceRange[1]}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <div>24 Produkte</div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sortieren nach" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">Preis: Aufsteigend</SelectItem>
                <SelectItem value="price-desc">Preis: Absteigend</SelectItem>
                <SelectItem value="newest">Neueste</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg"
                      alt={`Produkt ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Produkt Name</h3>
                    <p className="text-gray-600 mb-2">€29.99</p>
                    <Button className="w-full">In den Warenkorb</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mx-1">1</Button>
            <Button variant="outline" className="mx-1">2</Button>
            <Button variant="outline" className="mx-1">3</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

