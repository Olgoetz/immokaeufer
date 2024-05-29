import Image from "next/image";
import React from "react";

function References() {
  return (
    <main id="references" className="bg-black pb-10 text-white">
      <div className="container">
        <h2 className="text-5xl text-green-400 font-bold uppercase py-10 text-center">
          Referenzen
        </h2>

        <p className="py-10">
          Erhalten Sie einen Überblick über eine Auswahl unserer Bestandsobjekte
          Wir haben momentan einen Immobilienbestand, der derzeit knapp 100
          Einheiten mit attraktiven Wohn- und Gewerbeflächen an den Standorten
          Köln, Bonn und Leverkusen umfasst. Im Zuge unseres Vorhabens weiter
          wachsen zu wollen werden wir unseren Bestand weiter vergrößern und
          unseren Fokus auch an weiteren Standorten wie Düsseldorf, Duisburg,
          Essen und bis zu 20 km im Umkreis der obigen Städte ausweiten.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="">
              <div className="relative w-full md:w-[400px] h-[400px]">
                <Image
                  src={`https://picsum.photos/seed/${i}/300/300`}
                  alt="Referenz"
                  fill
                  className="rounded-lg object-cover object-center"
                />
              </div>
              <h5 className="py-2 text-lg">Titel</h5>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default References;
