import { JazzHero } from "@/components/jazz-hero"

export default function TourPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#ffffff] flex flex-col">
      <JazzHero activeLink="tour" />
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Tour Dates</h2>
        <p className="text-[#828282] max-w-2xl mx-auto">Join us for special screenings and events around the world.</p>
      </div>
    </main>
  )
}

