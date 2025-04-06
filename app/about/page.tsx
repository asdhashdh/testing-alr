import { JazzHero } from "@/components/jazz-hero"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#ffffff] flex flex-col">
      <JazzHero activeLink="about" />
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">About Jazz</h2>
        <p className="text-[#828282] max-w-2xl mx-auto">
          Jazz is a film that takes you back in time, exploring the rich history and evolution of jazz music through the
          decades. Set in the vibrant scenes of New Orleans, Chicago, and New York, the film follows the journey of
          influential musicians who shaped this iconic American art form.
        </p>
      </div>
    </main>
  )
}

