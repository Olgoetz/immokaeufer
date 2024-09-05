import type { Metadata } from "next";
import { Inter, Chivo } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import NavbarMobile from "@/components/navbar-mobile";
import ScrollToTopButton from "@/components/scroll-to-top-button";

const inter = Inter({ subsets: ["latin"] });
const chivo = Chivo({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "die-immobilienankäufer",
  description: "Wir suchen und kaufen Immobilien an",
  keywords: [
    "Immobilien",
    "Ankäufer",
    "Nachhaltigkeit",
    "Häuser",
    "Dachstühle",
    "Gewerbeobjekte",
    "Garagen",
    "Appartments",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(chivo.className, "")}>
        {/* <Navbar />
        <NavbarMobile /> */}
        {children}
        {/* <Footer />
        <ScrollToTopButton /> */}
      </body>
    </html>
  );
}
