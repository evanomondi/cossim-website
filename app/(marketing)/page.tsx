import { infos } from "@/config/landing";
import LogisticsBentoGrid from "@/components/sections/logistics-bentogrid";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import InfoLanding from "@/components/sections/info-landing";
import Testimonials from "@/components/sections/testimonials";

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      <LogisticsBentoGrid />
      <InfoLanding data={infos[0]} reverse={true} />
      <Features />
      <Testimonials />
    </>
  );
}
