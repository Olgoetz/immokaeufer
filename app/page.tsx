import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Networking from "@/components/networking";
import PurchasProfile from "@/components/purchase-profile";
import References from "@/components/references";
import SustainableRev from "@/components/sustainable-rev";
import Tipgiver from "@/components/tipgiver";
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
      <Tipgiver />
      <Contact />
    </main>
  );
}
