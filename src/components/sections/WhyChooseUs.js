import { Zap, ShieldCheck, TrendingUp } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#070d17]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            We provide a secure, fast, and professional trading experience
            designed to help you grow with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="group bg-white dark:bg-[#0e1625] rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-500/20 mb-6">
              <Zap className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Fast Execution
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Lightning-fast order execution ensures you never miss market
              opportunities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white dark:bg-[#0e1625] rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 dark:bg-green-500/20 mb-6">
              <ShieldCheck className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Secure Platform
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Advanced security and encryption protect your funds and data at
              all times.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white dark:bg-[#0e1625] rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-500/20 mb-6">
              <TrendingUp className="text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Expert Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn and grow with guidance from experienced traders and market
              analysts.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
