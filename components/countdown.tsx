"use client";
import React, { useState, useEffect } from "react";
import "./countdown.css"; // We will add the custom CSS here

import Image from "next/image";
import { Card, CardHeader, CardTitle } from "./ui/card";
interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const languageRecord: Record<string, string> = {
  days: "Tage",
  hours: "Stunden",
  minutes: "Minuten",
  seconds: "Sekunden",
};

const facilities: string[] = [
  "Mehrfamilienhäuser",
  "Appartementhäuser",
  "Wohn- und Geschäftshäuser",
  "Dachstühle",
  "Apartments und Eigentumswohnungen",
  "Gewerbeobjekte",
  "Garagen",
  "Abbruchreife Immobilien",
  "Baugrundstücke",
];

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2024-12-06T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeComponents = Object.keys(timeLeft).map((interval) => {
    const value = timeLeft[interval as keyof TimeLeft];
    if (value === undefined || value === 0) return null;

    return (
      <div key={interval} className="flex flex-col items-center mx-2">
        <span className="text-4xl font-bold text-black">{value}</span>
        <span className="uppercase text-xs text-gray-300">
          {languageRecord[interval]}
        </span>
      </div>
    );
  });

  // Santa's random position state
  const [santaPosition, setSantaPosition] = useState({
    top: "10%",
    left: "-20%",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to update Santa's position randomly
  const moveSantaRandomly = () => {
    const randomTop = Math.random() * 80 + "%"; // Random top position between 0% and 80%
    const randomLeft = Math.random() * 80 + "%"; // Random left position between 0% and 80%
    setSantaPosition({ top: randomTop, left: randomLeft });
  };

  // Trigger Santa's movement at random intervals
  useEffect(() => {
    const santaInterval = setInterval(() => {
      moveSantaRandomly();
    }, Math.random() * 5000 + 2000); // Random interval between 2s and 7s

    return () => clearInterval(santaInterval);
  }, []);

  return (
    <>
      <div className="z-[1000] w-full bg-[#00E8A5]">
        <Image src="/logo.jpg" alt="logo" width={300} height={300} />
      </div>

      <div
        suppressHydrationWarning={true}
        className="flex flex-col justify-center items-center min-h-screen bg-[#00A58B]"
      >
        <h1 className="text-4xl text-center font-bold text-white pt-4 pb-10">
          Willkommen bei immoankäufer.de!
        </h1>
        <p className="px-4 text-white text-center mb-8">
          Unsere neue Internetpräsenz kommt pünktlich zum Nikolaus am 6.
          Dezember 2024! Bis dahin arbeiten wir mit Hochdruck daran, Ihnen eine
          informative und attraktive Internetseite zu bieten. Wir sind erfahrene
          Immobilieninvestoren mit einem Fokus auf Nachhaltigkeit und die
          energetische Sanierung von Bestandsgebäuden. Bei uns verkaufen Sie
          Ihre Immobilie unkompliziert, diskret und schnell.
        </p>
        <h2 className="text-2xl font-bold text-white mb-4">
          Wir suchen und ankaufen:
        </h2>

        <div className="grid md:grid-cols-3 gap-2 text-white text-center mb-4">
          {facilities.map((facility, index) => (
            <Card key={index} className="">
              <CardHeader>
                <CardTitle className="text-sm">{facility}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        {/* Snowflakes */}
        {[...Array(50)].map((_, i) => (
          <div key={i} className={`snowflake snowflake-${i}`}>
            ❄
          </div>
        ))}

        {/* Santa Claus */}
        <div
          className="absolute santa"
          style={{
            top: santaPosition.top,
            left: santaPosition.left,
            transition: "top 2s ease, left 2s ease",
          }}
        >
          <img
            src="/santa_claus.png" // Replace with actual SVG path or URL
            alt="Santa Claus"
            className="w-32 h-auto"
          />
        </div>

        <div className="p-4 bg-white rounded-2xl shadow-lg text-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-700 mb-4">
            Wir gehen am 6. Dezember 2024 live!
          </h1>
          <div suppressHydrationWarning={true} className="flex justify-center">
            {timeComponents.filter(Boolean).length ? (
              timeComponents
            ) : (
              <span className="text-4xl font-bold text-white">
                Countdown Complete!
              </span>
            )}
          </div>
        </div>

        <p className="px-4 pb-2 text-white text-center">
          Unser Schwerpunkt liegt auf der Entwicklung und Vermietung von Wohn-
          und Gewerbeimmobilien in Nordrhein-Westfalen – insbesondere in und um
          Bonn, Köln, Leverkusen, Düsseldorf, Duisburg und Essen.
          <span className="font-bold"> Bleiben Sie dran! </span>
          Unsere neue Webseite wird Sie überraschen – genauso wie der Nikolaus!
          Der Countdown läuft...
        </p>
      </div>
    </>
  );
};

export default Countdown;
