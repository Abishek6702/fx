import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Project Management", subtitle: "30 options available", icon: "📊" },
  {
    title: "Web & Mobile Development",
    subtitle: "40 options available",
    icon: "💻",
  },
  { title: "Customer Support", subtitle: "17 options available", icon: "🎧" },
  { title: "Human Resources", subtitle: "21 options available", icon: "👥" },
  { title: "Design & Creatives", subtitle: "13 options available", icon: "🎨" },
  {
    title: "Marketing & Communication",
    subtitle: "27 options available",
    icon: "📣",
  },
  {
    title: "Business Development",
    subtitle: "22 options available",
    icon: "💼",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-white dark:bg-[#070d17] overflow-hidden"
    >
      {/* Light mode background */}
      <Image
        src="/servicebg1.svg"
        alt="Background lines"
        fill
        className="object-cover pointer-events-none opacity-40 dark:hidden"
      />

      {/* Dark mode background */}
      <Image
        src="/servicebg2.svg"
        alt="Background lines dark"
        fill
        className="object-cover pointer-events-none opacity-40 hidden dark:block"
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest text-gray-500 mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Save Time Managing Your Business <br />
            With Our Best Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-[#0b1220] rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-300 dark:bg-white/10 mb-5">
                <span className="text-lg">{service.icon}</span>
              </div>

              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500">{service.subtitle}</p>
            </div>
          ))}

          {/* + More Card */}
          <Link href="/services" >
            {" "}
            <div className="bg-emerald-700 rounded-2xl p-6 flex flex-col justify-center text-white shadow-lg">
              <h3 className="text-3xl font-bold mb-2">+4</h3>
              <p className="text-lg font-medium">More</p>
              <span className="text-sm opacity-80 mt-2">
                170+ options available
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
