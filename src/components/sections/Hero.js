
import Image from "next/image";
import Slider from "../Slider";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative  flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/heropattern1.svg"
        alt="Hero background"
        fill
        priority
        className="object-cover opacity-20 dark:block hidden"
      />

      <Image
        src="/heropattern2.svg"
        alt="Hero background"
        fill
        priority
        className="object-cover opacity-25 dark:hidden block"
      />

      <Slider/>

      
    </section>
  );
}
