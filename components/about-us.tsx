import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const vita = [
  {
    name: "Thomas",
    email: "thomas@die-immobilien-ankaeufer.de",
    phone: "+49 123 456 789",
    img: "https://i.pravatar.cc/150?img=69",
    experience: [
      "Geschäftsführer der NovoTec GmbH & Co. KG, Aus- & Sanierungsmanagement und NovoTherm GmbH, Sanitär-, Heizung-, Solar- und Klimatechnik",
      "Über 20 Jahre Berufserfahrung im Ausbau und Sanierungen von Immobilienobjekten",
      "Sehr gutes Netzwerk in der Bau-, Immobilien- und Versicherungsbranche",
      "Eigene Immobilienobjekte seit 2004, insbesondere in Köln, Leverkusen und innerhalb der EU",
    ],
  },
  {
    name: "Caesar",
    email: "caesar@die-immobilien-ankaeufer.de",
    phone: "+49 123 456 789",
    img: "https://i.pravatar.cc/150?img=60",
    experience: [
      "Projektmanager mit knapp 20 Jahre Berufserfahrung in einer großen internationalen Unternehmensberatung in den Bereichen Digitalisierung, Nachhaltigkeit und Versicherungen",
      "Sehr gutes Netzwerk im Bereich der Immobilien- und Versicherungsbranche",
      "Eigene Immobilienobjekte seit 2006 in Köln, Bonn und innerhalb der EU",
    ],
  },
];

function AboutUs() {
  return (
    <main id="ueber-uns" className="bg-black py-10">
      <div className="container">
        <h2 className="text-5xl text-green-400 font-bold uppercase py-10 text-center">
          Über uns
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 text-white">
          {vita.map((v) => (
            <div key={v.name} className="overflow-hidden">
              <div className="flex flex-col space-y-4 items-center max-w-[500px] mx-auto">
                <Image
                  src={v.img}
                  alt={v.name}
                  width={200}
                  height={200}
                  className="rounded-full shadow-lg"
                />
                <h4 className="py-4 text-lg">{v.name}</h4>
                <ul>
                  {v.experience.map((exp) => (
                    <li key={exp} className="text-sm py-2">
                      - {exp}
                    </li>
                  ))}
                </ul>
                <div className="space-y-4 w-full text-green-400">
                  <Link href={`mailto:${v.email}`} className="flex">
                    <Mail className="mr-5" />
                    {v.email}
                  </Link>
                  <p className="flex">
                    <Phone className="mr-5" />
                    {v.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
