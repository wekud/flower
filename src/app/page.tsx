import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { FadeIn } from "@/components/common/Animate";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn>
        <Features />
      </FadeIn>
      <FadeIn>
        <Stats />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <CTA />
      </FadeIn>
    </>
  );
}
