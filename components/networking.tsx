import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Euro, Handshake } from "lucide-react";

const topics: Array<any> = [
  {
    label: "Asset Deals",
    content: ["tbd"],
  },
  {
    label: "Co-Investments",
    content: ["tbd"],
  },
  {
    label: "Informationsaustausch",
    content: [
      "Nachhaltigkeit in der Immobilienbranche und deren Auswirkung",
      "Energieeffizientes Sanieren",
      "Barrierefreies Sanieren",
      "Brand- & Wasserschadenssanierung",
      "Dachausbauten",
      "Restnutzungsdauer-Gutachten",
      "Unterstützung beim Ankauf von Immobilienobjekten",
      "Potentialhebungen durch z.B. Nutzungsänderung, Aufteilungen",
    ],
  },
  {
    label: "weiteres Vernetzen",
    content: [
      "Immobilieneigentümern",
      "Architekten",
      "Sachverständigen",
      "Energieberatern",
      "Ingenieurbüros für z.B. Statik, Brandschutz",
      "Maklern",
      "Handwerksbetrieben",
      "Property Unternehmen bzw. Startups für gemeinsame Projekte in der Immobilien- bzw. Baubranche",
    ],
  },
];

function Networking() {
  return (
    <main id="netzwerken" className="pb-20">
      <div className="container max-w-[1000px] mx-auto">
        <h2 className="text-5xl text-green-400 font-bold uppercase py-10 text-center ">
          Netzwerken
        </h2>
        <p className="pb-10">
          Mit unserer langjährigen Erfahrung und Expertise im Bereich der
          Immobilien- und Baubranche sind wir offen für eine Zusammenarbeit und
          stetigen Austausch mit anderen privaten und gewerblichen
          Immobilieninvestoren wie u.a. Bauträgern, Projektentwicklern,
          Energieberatern, Sachverständigen, Maklern o.ä. Lassen Sie uns auch
          sprechen, wenn Sie nicht aus der Immobilien- oder Baubranche kommen,
          jedoch als eigenkapitalstarke Partner an einer Zusammenarbeit
          Interesse haben. Dabei bieten wir Ihnen insbesondere die vollständige
          kaufmännische und technische Abwicklung, Marktzugang, Netzwerk an
          Architekten, Handwerkern, Energieberatern, Baustoffhändlern u.a.
        </p>
        {/* <div className="grid md:grid-cols-4 gap-4">
          {topics.map((t) => (
            <div
              key={t.label}
              className="flex items-center justify-center h-12 rounded-lg  bg-green-400 hover:opacity-80"
            >
              <h5 className="text-white">{t.label}</h5>
            </div>
          ))}
        </div> */}

        <div className=" mx-auto">
          <Accordion type="single" className="rounded-lg  " collapsible>
            {topics.map((t, i) => (
              <AccordionItem key={i} className="px-4 " value={`item-${i}`}>
                <AccordionTrigger>{t.label}</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {t.content.map((c: string) => (
                      <li key={c}>- {c}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="pt-10">
          Ein nachhaltiges Netzwerk ist das A und O für gemeinsamen Erfolg.
          Zögern Sie nicht und lassen Sie uns bei einem Kaffee, Tee bzw. einem
          leckeren Kölsch - gerne auch Pils o-ä. - kennenlernen und die
          Möglichkeiten einer <strong>Zusammenarbeit</strong> bzw. eines{" "}
          <strong>Win win-Informationsaustausches</strong> ausloten.
        </p>
      </div>
    </main>
  );
}

export default Networking;
