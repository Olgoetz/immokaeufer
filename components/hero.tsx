import React from "react";
import { Separator } from "./ui/separator";
import { PurchaseObject } from "@/types";
import { Button } from "./ui/button";
import { ArrowRightCircle } from "lucide-react";

const purchaseObjects: PurchaseObject[] = [
  { name: "Mehrfamilienhäusern" },
  { name: "Appartementhäusern" },
  { name: "Wohn- und Geschäftshäusern" },
  { name: "Dachstühlen" },
  { name: "Selektiven Apartments und Eigentumswohnungen" },
  {
    name: "Gewerbeobjekten, wie z.B. Lager-, Gewerbehallen mit und ohne Büroanteilen Hotels",
  },
  { name: "Garagen" },
  { name: "Abbruchreife Immobilien" },
  { name: "Baugrundstücken" },
];

function Hero() {
  return (
    <main className="md:mt-[-96px] container space-y-8 w-full min-h-screen mx-auto text-center flex flex-col justify-center mb-6">
      <h1 className="text-4xl">
        Willkommen bei
        <span className="text-green-400"> die-immobilien-ankäufer.de</span>!
      </h1>
      <Separator className="my-4" />
      <div>
        <p className="text-lg leading-relaxed">
          Als erfahrene Immobilieninvestoren mit Fokus auf Nachhaltigkeit und
          energetischer Sanierung von Bestandsgebäuden bieten wir Ihnen eine
          unkomplizierte, diskrete und schnelle Möglichkeit, Ihre Immobilie zu
          verkaufen. Unser Ziel ist der Ankauf und die Entwicklung von
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        {purchaseObjects.map((p) => (
          <div key={p.name} className="text-center mt-3">
            <div className="flex w-full h-[80px] rounded-lg justify-center items-center   bg-green-400">
              <p className=" text-white">{p.name}</p>
            </div>
            {/* <p className="text-sm opacity-50">
              Wir sind ständig auf der Suche nach neuen Objekten und freuen uns
              über Ihre Kontaktaufnahme.
            </p> */}
          </div>
        ))}
      </div>

      <div>
        <Button size={"lg"} className="text-lg">
          <ArrowRightCircle className="size-5 mr-2" />
          Zu unserem Ankaufsprofil
        </Button>
      </div>
    </main>
  );
}

export default Hero;
