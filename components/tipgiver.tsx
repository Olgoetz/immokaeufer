import { CAESAR_MOBILE, DOMAIN } from "@/lib/constants";
import {
  Check,
  Contact,
  Euro,
  FastForward,
  List,
  Mail,
  PhoneCall,
  Rocket,
  Star,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const requirements = ["1", "2", "3", "4", "5"];
function Tipgiver() {
  return (
    <main id="tippgeber" className="pb-20 bg-black text-white">
      <div className="container">
        <h2 className="text-5xl text-green-400 font-bold uppercase py-10 text-center ">
          Tippgeber
        </h2>
        <p className="first-letter:text-2xl first-letter:font-bold first-letter:me-1">
          Sichern Sie sich mind. 3.000 EUR (ab 300 k EUR Netto-Kaufpreis) und
          sogar darüber hinaus und geben Sie z.B. Ihrem nächsten Urlaub oder
          Ihrem Hobby eine kräftige Finanzspritze. Oder noch besser - lassen Sie
          uns Gutes im Sinne der ESG-Kriterien im sozialen Bereich tun. Es ist
          möglich Ihre Tippgeber-Provision teilweise oder voll an eine
          gemeinnützige Organisation in der Nähe der vermittelten Immobilie zu
          spenden. Auf den hierfür gespendeten Betrag legen wir dann noch einen
          drauf!
        </p>
        <div className="flex items-center ">
          <Euro className="size-12 mr-5" />
          <h3 className="font-bold text-2xl py-14">
            Ohren auf für Ihre Tippgeber-Provision
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="first-letter:text-2xl first-letter:font-bold first-letter:me-1">
            Wenn Sie im letzten Gespräch mit dem Sportpartner beim Tennis oder
            einem Freund auf der letzten Geburtstagsparty erfahren Sie, dass
            diese(r) ein Mehrfamilienhaus o.ä. verkaufen möchte bzw. jemanden
            kennt, der seine Immobilie verkaufen möchte, dann zögern Sie nicht
            und sichern Sie sich Ihre Tippgeber-Provision bzw. lassen diese dem
            nächst gelegenen gemeinnützigen Verein zugutekommen, dem wir
            gemeinsam Ihre Tippgeber-Provision übergeben werden.
          </p>
          <p className="first-letter:text-2xl first-letter:font-bold first-letter:me-1">
            Direkt nachdem ein notarieller Kaufvertrag zwichen Verkäufer und ..
          </p>
        </div>
        <div className="border-green-400 border rounded-lg my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center ">
            <div className="flex flex-col items-center justify-center text-center gap-2 p-8">
              <PhoneCall className="size-10" />
              <p>Rufen Sie uns gerne an!</p>
              <p>Caesar Jaworkski, Mobil: {CAESAR_MOBILE}</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center gap-2 p-8">
              <Mail className="size-10" />
              <p>Schreiben Sie uns gerne eine E-Mail!</p>
              <Link href={`mailto:info@${DOMAIN}`}>info@{DOMAIN}</Link>
            </div>
          </div>
          <div className="p-8 max-w-[800px] space-y-8 mx-auto">
            <p>
              Ihre Angaben behandeln wird selbstverständlich vertraulich und
              schützen alle Daten entsprechend den geltenden
              Datenschutzverordnungen.
            </p>
            <p>
              Folgende Voraussetzungen müssen Sie erfüllgen, damit Sie Tippgeber
              weden können:
            </p>
            <ul>
              {requirements.map((e) => (
                <div key={e} className="flex items-center">
                  <Check className="size-5 mr-5" />
                  <li>{e}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center ">
          <Star className="size-12 mr-5" />
          <h3 className="font-bold text-2xl py-14">
            <h3>In vier Schritten zur Provision - so einfach geht's</h3>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 item-center justify-center text-center mx-auto">
          <div>
            <div className="grid md:relative items-center justify-center py-10">
              <div className="border rounded-full p-10  bg-black z-10">
                <Contact className="size-24 " />
              </div>
              <div className="hidden md:flex absolute -z-0 right-0 w-20 border" />
            </div>

            <h4 className="font-bold py-4">1. Kontakt aufnehmen</h4>
            <p>Lorem ipsum</p>
          </div>

          <div>
            <div className="grid md:relative items-center justify-center py-10">
              <div className="border rounded-full bg-black z-10 p-10">
                <FastForward className="size-24  " />
              </div>
              <div className="hidden md:flex absolute left-0 w-20  -z-0 border"></div>
              <div className="hidden md:flex absolute right-0 w-20  -z-0 border"></div>
            </div>
            <h4 className=" font-bold py-4">2. Gemeinsame Vereinbarung</h4>
            <p>Lorem ipsum</p>
          </div>

          <div>
            <div className="grid md:relative items-center justify-center py-10">
              <div className="border rounded-full p-10 bg-black z-10">
                <List className="size-24" />
              </div>
              <div className="hidden md:flex absolute left-0 w-20  -z-0 border"></div>
              <div className="hidden md:flex absolute right-0 w-20  -z-0 border"></div>
            </div>
            <h4 className=" font-bold py-4">3. Verkaufsverhandlungen</h4>
            <p>Lorem ipsum</p>
          </div>
          <div>
            <div className="grid md:relative items-center justify-center py-10">
              <div className="border rounded-full p-10 bg-black z-10">
                <Rocket className="size-24 " />
              </div>
              <div className="hidden md:flex absolute left-0 w-20  -z-0 border"></div>
            </div>
            <h4 className="font-bold py-4">4. Auszahlung</h4>
            <p>Lorem ipsum</p>
          </div>
        </div>

        {/*  Container */}
      </div>
    </main>
  );
}

export default Tipgiver;
