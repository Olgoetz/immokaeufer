"use client";
import React, { useState, useEffect } from "react";
import "./countdown.css"; // We will add the custom CSS here

import SantaClaus from "@/public/santa_claus.png";
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
    <div
      suppressHydrationWarning={true}
      className="flex justify-center items-center h-screen bg-black"
    >
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

      <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
          Wir gehen am 6. Dezember 2024 live!
        </h1>
        <div className="flex justify-center">
          {timeComponents.filter(Boolean).length ? (
            timeComponents
          ) : (
            <span className="text-4xl font-bold text-white">
              Countdown Complete!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
