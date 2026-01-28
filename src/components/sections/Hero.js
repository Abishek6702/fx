
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
        src="/hero-bg.webp"
        alt="Hero background"
        fill
        priority
        className="object-fit"
      />

      <Slider/>

      
    </section>
  );
}
