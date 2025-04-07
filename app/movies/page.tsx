import { JazzHero } from "@/components/jazz-hero"

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#ffffff] flex flex-col">
      <JazzHero activeLink="videos" />
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Videos</h2>
        <p className="text-[#828282] max-w-2xl mx-auto">Watch trailers, behind-the-scenes footage, and interviews.</p>
      </div>
    </main>
  )
}

