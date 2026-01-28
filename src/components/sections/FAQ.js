import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-10 bg-gray-50 dark:bg-[#070d17]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl  font-semibold text-center text-gray-900 dark:text-white mb-14">
          Frequently Asked Questions
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT – FAQ */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: "What is CrossCurrencyFX?",
                  a: "CrossCurrencyFX is a platform that helps users learn and trade forex with smart strategies and tools.",
                },
                {
                  q: "Is this suitable for beginners?",
                  a: "Yes, our programs are designed for beginners as well as experienced traders.",
                },
                {
                  q: "Do you provide live support?",
                  a: "Yes, we offer live sessions, mentorship, and community support.",
                },
                {
                  q: "How can I enroll?",
                  a: "You can enroll directly from our website by clicking the Register button.",
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-lg border bg-white dark:bg-[#0b1220] px-6 "
                >
                  <AccordionTrigger className="text-lg font-medium cursor-pointer py-5 hover:no-underline [&>svg]:h-5 [&>svg]:w-5">
                    {item.q}
                  </AccordionTrigger>

                  <AccordionContent className="text-base text-gray-600 dark:text-gray-300 pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* RIGHT – IMAGE */}
          <div className=" flex-col items-center text-center hidden md:flex">
            <Image
              src="/faqdark.png"
              alt="Any Questions"
              width={320}
              height={280}
              className="object-contain dark:hidden "
              priority
            />
            <Image
              src="/faqlite.png"
              alt="Any Questions"
              width={320}
              height={280}
              className="object-contain hidden dark:block"
              priority
            />
            <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Any Questions?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-sm">
              We are here to help you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
