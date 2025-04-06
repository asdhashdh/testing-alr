import { JazzHero } from "@/components/jazz-hero"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#ffffff] flex flex-col">
      <JazzHero activeLink="contact" />
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-[#828282] max-w-2xl mx-auto mb-8">Have questions or inquiries? Reach out to our team.</p>
        <div className="max-w-md mx-auto">
          <form className="space-y-4 text-left">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-[#1e1e1e] border border-[#333] rounded-lg text-white"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-[#1e1e1e] border border-[#333] rounded-lg text-white"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-[#1e1e1e] border border-[#333] rounded-lg text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-transparent border border-[#454545] text-[#ffffff] px-6 py-3 rounded-full text-sm hover:bg-[#1e1e1e] transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

