"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music/only.mp3");
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    const startOnFirstInteraction = () => {
      audio.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };

    audio.play()
      .then(() => setPlaying(true))
      .catch(() => {
        // Browsers often block audible autoplay until the visitor interacts.
        window.addEventListener("pointerdown", startOnFirstInteraction, { once: true });
        window.addEventListener("keydown", startOnFirstInteraction, { once: true });
      });

    return () => {
      window.removeEventListener("pointerdown", startOnFirstInteraction);
      window.removeEventListener("keydown", startOnFirstInteraction);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused && !playing) {
      setPlaying(true);
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <button
      className="musicPlayer"
      type="button"
      onClick={togglePlayback}
      aria-label={playing ? "Tắt nhạc" : "Bật nhạc"}
      title={playing ? "Tắt nhạc" : "Bật nhạc"}
    >
      <span aria-hidden="true">{playing ? "♫" : "♪"}</span>
    </button>
  );
}
