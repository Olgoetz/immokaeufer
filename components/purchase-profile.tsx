import {
  ArrowDown,
  ArrowDownCircleIcon,
  DownloadIcon,
  LocateIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const purchaseLocations = [
  "Bonn",
  "Köln",
  "Leverkusen",
  "Düsseldorf",
  "Duisburg",
  "Essen",
];
function PurchasProfile() {
  return (
    <main className="max-w-[1000px] container mx-auto pb-12">
      <p className="pb-4 text-center">
        Wir konzentrieren uns dabei auf die Bestandsentwicklung und Vermietung
        von Wohn- und Gewerbeimmobilien in Nordrhein-Westfalen mit Fokus auf
        folgende ausgewählte Städte.
      </p>

      <div className="grid md:grid-cols-3 my-4">
        <div className="md:col-span-1">
          <ul className="space-y-4">
            {purchaseLocations.map((location) => (
              <div
                key={location}
                className="md:pl-28 flex items-center justify-center"
              >
                <LocateIcon className="size-5 mr-2" />
                <li className="text-xl">{location}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <Image
            src="/ankaufsstandorte.png"
            alt="Ankaufsstandorte"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <p className="pt-4">
        Und im Umkreis von bis zu max. 20 km dieser genannten Städte. Neben
        laufend instand gehaltenen suchen wir auch sanierungsbedürftige Objekte
        mit einem max. Investitionsvolumen von max. 3 Mio. EUR pro Einzelobjekt.
      </p>
      <p>Unser detailliertes Ankaufsprofil zum Download.</p>
      <Button size={"lg"} className="text-lg my-8 ">
        <DownloadIcon className="size-5 mr-2" />
        Ankaufsprofil herunterladen
      </Button>

      <section>
        <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-start first-letter:me-3">
          Als Bestandshalter von bereits mehreren Objekten mit knapp 100
          Einheiten in Köln, Bonn und Leverkusen verstehen wir uns insbesondere
          als energieeffiziente Sanierer und &quot;Werte-Entwickler&quot; und
          bringen bereits langjährige Erfahrung in der Bau- und
          Immobilienbranche mit. Wir sind bestrebt, unseren Bestand weiter
          auszubauen und unseren Beitrag zur Nachhaltigkeit durch Reduzierung
          der CO2-Emissionen, Verringerung der Energiekosten, Verbesserung der
          Werterhaltung und Erhöhung der Wohn- bzw. Raumqualität für unsere
          Mieter zu leisten.{" "}
        </p>
        <p className="pt-8 first-letter:text-5xl first-letter:font-bold first-letter:float-start first-letter:me-3">
          Neben der Strategie <strong>&quot;Kaufen & Halten&quot;</strong>,
          welche wir für uns bereits erfolgreich zur Strategie{" "}
          <strong>
            &quot;Kaufen, Energieeffizientes Sanieren & Halten&quot;
          </strong>{" "}
          modifiziert haben, verfolgen wir in Einzelfällen auch die{" "}
          <strong>&quot;Fix & Flip&quot;</strong>
          Strategie. Dabei kaufen wir Objekte an, führen nachhaltige Sanierungen
          durch und bringen sie anschließend wieder in den Immobilienmarkt.
        </p>
        <blockquote className="relative my-8">
          <svg
            className="absolute -top-6 -start-8 size-16 text-gray-100 dark:text-neutral-700"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
              fill="currentColor"
            ></path>
          </svg>

          <div className="relative z-10">
            <p className="text-gray-800 sm:text-xl dark:text-white">
              <em>
                Sind Sie Privateigentümer oder gewerblicher Verkäufer wie z.B.
                Immobilienfond, Makler, Family Office, Hausverwalter und möchten
                Ihre Immobilie in sehr gute Hände verkaufen, dann sind Sie bei
                uns genau richtig!
              </em>
            </p>
          </div>
        </blockquote>

        <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-start first-letter:me-3">
          Auch können Sie gerne als Tippgeber fungieren - sollten Sie auf der
          letzten Geburtstagsparty erfahren haben, dass ein(e) Freund(in),
          Bekannte(r) ein Mehrfamilienhaus o.ä. verkaufen möchte bzw. kennen
          jemanden, der seine Immobilie verkaufen möchte, dann zögern Sie nicht
          und sichern Sie sich unsere Tippgeber-Provision bzw. lassen diese dem
          nächst gelegenen gemeinnützigen Verein zugutekommen, dem wir gemeinsam
          diese übergeben werden. Mehr hierzu finden Sie auf
          &quot;Tippgeber&quot;.
        </p>
        <p className="pt-8 first-letter:text-5xl first-letter:font-bold first-letter:float-start first-letter:me-3">
          Nutzen Sie die Gelegenheit und kontaktieren Sie uns noch heute gerne
          über E-Mail, unser Kontaktformular unten oder aber auch gerne
          telefonisch, um mehr über unseren Ankaufs- bzw. Direktankaufservice zu
          erfahren. Wir freuen uns darauf, Ihre Immobilie zu bewerten und Ihnen
          ein unverbindliches Angebot zu unterbreiten. Verlassen Sie sich auf
          unsere langjährige Erfahrung und Expertise im Immobilienmarkt.
        </p>
      </section>

      <Button size={"lg"} className="text-lg my-8 ">
        <ArrowDownCircleIcon className="size-5 mr-2" />
        Kontaktaufnahme
      </Button>
    </main>
  );
}

export default PurchasProfile;
