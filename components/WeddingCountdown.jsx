"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-10-20T15:00:00+07:00").getTime();

function getTimeLeft() {
  const milliseconds = Math.max(0, WEDDING_DATE - Date.now());
  return {
    days: Math.floor(milliseconds / 86_400_000),
    hours: Math.floor((milliseconds / 3_600_000) % 24),
    minutes: Math.floor((milliseconds / 60_000) % 60),
    seconds: Math.floor((milliseconds / 1_000) % 60),
  };
}

export default function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const units = [
    ["days", "Ngày"],
    ["hours", "Giờ"],
    ["minutes", "Phút"],
    ["seconds", "Giây"],
  ];

  return (
    <section className="countdownSection" aria-label="Đếm ngược đến ngày cưới">
      <div className="eyebrow">The countdown begins</div>
      <h2>Ngày vui đang đến gần</h2>
      <div className="countdown" aria-live="off">
        {units.map(([key, label]) => (
          <div className="countdownUnit" key={key}>
            <span>{timeLeft ? String(timeLeft[key]).padStart(2, "0") : "--"}</span>
            <small>{label}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
