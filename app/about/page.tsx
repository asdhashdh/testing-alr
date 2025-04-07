export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#ffffff] flex flex-col">
      <JazzHero activeLink="about" />
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">About Jag</h2>
        <p className="text-[#828282] max-w-2xl mx-auto">
          An idiot that has no life.
        </p>
      </div>
    </main>
  )
}

