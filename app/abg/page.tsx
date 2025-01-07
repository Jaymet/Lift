import { Button } from "@/components/ui/button"

export default function AGBPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
      <Button className="mb-4">Druckversion</Button>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Geltungsbereich

          <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen uns, der Lift GmbH, und unseren Kunden über den Kauf von Produkten in unserem Online-Shop.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Vertragsschluss</h2>
          <p>Die Darstellung der Produkte in unserem Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar. Durch Anklicken des Buttons "Kaufen" geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Waren ab.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Preise und Zahlung</h2>
          <p>Alle Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt per Kreditkarte, PayPal oder Überweisung.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Lieferung</h2>
          <p>Die Lieferung erfolgt innerhalb von 3-5 Werktagen nach Zahlungseingang. Bei Lieferverzögerungen werden wir Sie umgehend informieren.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Widerrufsrecht</h2>
          <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.</p>
        </section>
      </div>
    </div>
  )
}

