"use client"

export default function Feedback() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Feedback</h2>
        <textarea
          className="w-full p-4 border rounded"
          placeholder="Your feedback..."
        />
        <button className="mt-4 px-6 py-2 bg-black text-white">
          Submit
        </button>
      </div>
    </section>
  )
}
