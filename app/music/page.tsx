import { JazzHero } from "@/components/jazz-hero"

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#ffffff] flex flex-col">
      <JazzHero activeLink="music" />
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Music</h2>
        <p className="text-[#828282] max-w-2xl mx-auto">
          Explore the soundtrack and musical pieces featured in our film.
        </p>
      </div>
    </main>
  )
}

