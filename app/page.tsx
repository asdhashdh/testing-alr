import { JazzHero } from "@/components/jazz-hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#ffffff] flex flex-col">
      <JazzHero activeLink="home" />
    </main>
  )
}

