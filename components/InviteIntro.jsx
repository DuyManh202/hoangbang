"use client";

import { useEffect, useState } from "react";

export default function InviteIntro() {
  const [opening, setOpening] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [closed]);

  const openInvitation = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(() => setClosed(true), 850);
  };

  if (closed) return null;

  return (
    <section
      className={`inviteIntro${opening ? " inviteIntroOpening" : ""}`}
      aria-label="Lời chào mừng đến thiệp cưới"
    >
      <div className="inviteIntroFrame">
        <span className="inviteIntroEyebrow">Trân trọng kính mời</span>
        <span className="inviteIntroOrnament" aria-hidden="true">♡</span>
        <h1>Hoàng <i>&amp;</i> Bằng</h1>
        <p className="inviteIntroMessage">
          Niềm vui của chúng mình sẽ trọn vẹn hơn khi có bạn cùng chia sẻ.
          <br />
          Thân mời bạn đến chung vui trong ngày trọng đại.
        </p>
        <p className="inviteIntroDate">20 — 21 · 10 · 2026</p>
        <button className="inviteIntroButton" type="button" onClick={openInvitation}>
          Mở thiệp mời <span aria-hidden="true">↓</span>
        </button>
        <span className="inviteIntroFooter">With love, Hoàng &amp; Bằng</span>
      </div>
    </section>
  );
}
