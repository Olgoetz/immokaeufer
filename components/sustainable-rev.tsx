import React from "react";
import Image from "next/image";
function SustainableRev() {
  return (
    <main id="nachhaltige-revitalisierung" className="pb-20">
      <div className="container">
        <h2 className="text-5xl font-bold uppercase py-10 text-center">
          Nachhaltige Revitalisierung
        </h2>

        <div className="grid gird-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <p className="pt-8 first-letter:text-5xl first-letter:font-bold first-letter:float-start first-letter:me-3">
              In Deutschland haben wir einen Wohn- Gebäudebestand von 19 Mio.,
              von denen 13 Mio. bereits vor 1979 errichtet wurden und sehr
              schlechte Energieeffizienzwerte vorweisen.
            </p>
            <p>
              30% der CO2-Emissionen in Deutschland stammen aus der
              Gebäudeenergie. In sieben Jahren müssen WIR die CO2-Emissionen
              mehr als halbiert haben – eine Riesenherausforderung für die
              Immobilien- und Baubranche. Und hier kommt die große Bedeutung der
              Bestandstransformation und uns ins Spiel. Die Revitalisierung bzw.
              energieeffiziente Sanierung sollten bei der hohen Anzahl der alten
              Gebäudebestands stets vorgezogen werden. Der CO2-Fußabdruck von
              Neubauten liegt bei 800 bis 1.000 kg CO2 pro Quadratmeter.{" "}
            </p>

            <p className="pt-8 first-letter:text-5xl first-letter:font-bold first-letter:float-start first-letter:me-3">
              Bei einer Revitalisierung bzw. energieeffizienten Sanierung fallen
              nur 130 bis 200 kg Klimagas an. Das ist ein großer Unterschied!
              Damit die Klimaziele erreicht werden muss die Sanierungsquote von
              der derzeit 1% auf 4% steigen. Das ist eine enorme Herausforderung
              – insbesondere für die Bauwirtschaft - und erfordert ein
              verantwortliches Handeln von uns allen. Wir als
              Immobilieninvestoren mit eigenen Bauunternehmen in den Bereichen
              Innenausbau, Sanitär- und Heizungsbau und einem sehr starken
              Netzwerk mit Architekten, Energieberatern u.a. setzen und klar von
              anderen Immobilieninvestoren bzw. kurzfristigen Renditejägern ab
              und möchten unseren Beitrag zur unserer alle Nachhaltigkeit
              beitragen.
            </p>
          </div>

          <div className="md:col-span-1">
            <Image
              src="/revitalisierung.png"
              alt="Nachhaltige Revitalisierung"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default SustainableRev;
