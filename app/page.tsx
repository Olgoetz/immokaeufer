import AboutUs from "@/components/about-us";
import Hero from "@/components/hero";
import PurchasProfile from "@/components/purchase-profile";
import SustainableRev from "@/components/sustainable-rev";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />

      <PurchasProfile />
      <SustainableRev />
      <AboutUs />
    </main>
  );
}
