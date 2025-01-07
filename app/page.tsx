'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { image: '/placeholder.svg', title: 'Neue Sommer Kollektion', description: 'Entdecke unsere neuesten Designs für den Sommer' },
    { image: '/placeholder.svg', title: 'Limited Edition Shirts', description: 'Exklusive Designs in limitierter Auflage' },
    { image: '/placeholder.svg', title: 'Nachhaltige Mode', description: 'Umweltfreundliche T-Shirts aus Bio-Baumwolle' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden rounded-xl my-8">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Jetzt entdecken
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Collection 1 Section */}
      <motion.section 
        className="py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-8">Kollektion 1</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg"
                    alt={`T-Shirt ${item}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">T-Shirt Name</h3>
                  <p className="text-gray-600">€29.99</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">
            Mehr anzeigen
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.section>

      {/* Collection 2 Section */}
      <motion.section 
        className="py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-8">Kollektion 2</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg"
                    alt={`T-Shirt ${item}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">T-Shirt Name</h3>
                  <p className="text-gray-600">€34.99</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">
            Mehr anzeigen
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.section>

      {/* Designer Section */}
      <motion.section 
        className="py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-8">Erstelle dein eigenes Design</h2>
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="T-Shirt Designer Tool"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Jetzt gestalten
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

