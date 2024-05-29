import AboutUs from "@/components/about-us";
import Hero from "@/components/hero";
import Networking from "@/components/networking";
import PurchasProfile from "@/components/purchase-profile";
import References from "@/components/references";
import SustainableRev from "@/components/sustainable-rev";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />

      <PurchasProfile />
      <AboutUs />
      <SustainableRev />
      <References />
      <Networking />
    </main>
  );
}
