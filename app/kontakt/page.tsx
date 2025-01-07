'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function KontaktPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ name, email, subject, message })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Kontakt</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Kontaktformular</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="subject">Betreff</Label>
              <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="message">Nachricht</Label>
              <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <Button type="submit">Nachricht senden</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Kontaktinformationen</h2>
          <p className="mb-4">
            Lift GmbH<br />
            Musterstraße 123<br />
            12345 Musterstadt<br />
            Deutschland
          </p>
          <p className="mb-4">
            E-Mail: support@lift.de<br />
            Telefon: +49 123 456789
          </p>
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Wie lange dauert die Lieferung?</AccordionTrigger>
              <AccordionContent>
                Die Lieferung dauert in der Regel 3-5 Werktage innerhalb Deutschlands.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Kann ich meine Bestellung stornieren?</AccordionTrigger>
              <AccordionContent>
                Ja, Sie können Ihre Bestellung innerhalb von 24 Stunden nach der Bestellung stornieren. Kontaktieren Sie dazu bitte unseren Kundenservice.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Gibt es eine Mindestbestellmenge?</AccordionTrigger>
              <AccordionContent>
                Nein, es gibt keine Mindestbestellmenge. Sie können auch einzelne Artikel bestellen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

