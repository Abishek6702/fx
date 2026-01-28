export default function ContactPage() {
  return (
    <main className="py-20 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <input
        type="email"
        placeholder="Your email"
        className="w-full p-3 border mb-4"
      />
      <textarea
        placeholder="Your message"
        className="w-full p-3 border"
      />
      <button className="mt-4 px-6 py-2 bg-black text-white">
        Send Message
      </button>
    </main>
  )
}
