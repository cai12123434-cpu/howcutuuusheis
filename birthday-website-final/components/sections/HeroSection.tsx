"use client";

import React from "react";

/*
 * Hero — editorial chocolate-brown + cream design.
 * Photos used (all already in /public/ref): girl.jpg, girl3.jpg, girl5.jpg
 */
export const HeroSection = () => {
  return (
    <section className="hb relative flex min-h-screen w-full flex-col overflow-hidden">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700..900;1,700..900&family=Cormorant+Garamond:ital,wght@0,500..700;1,500..700&family=JetBrains+Mono:wght@400;500&display=swap");

        .hb {
          min-height: 100vh;
          min-height: 100svh;
          color: #f3e6d0;
          background: radial-gradient(ellipse at 72% 42%, #603829 0%, #3d2217 46%, #22110a 100%);
        }
        .hb::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.09;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 .9 0 0 0 0 .8 0 0 0 .6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
        }
        .hb-frame {
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(201, 161, 92, 0.38);
          pointer-events: none;
          z-index: 3;
        }
        .hb-frame::after {
          content: "";
          position: absolute;
          inset: 5px;
          border: 1px solid rgba(201, 161, 92, 0.16);
        }
        .hb-mono {
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c9a15c;
        }
        .hb-top, .hb-bottom {
          position: relative;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 30px 34px 0;
        }
        .hb-bottom { margin-top: auto; padding: 0 34px 30px; gap: 14px; }
        .hb-bottom i { flex: 1; height: 1px; background: rgba(201, 161, 92, 0.3); }

        .hb-main {
          position: relative;
          z-index: 4;
          flex: 1;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          justify-items: center;
          gap: 14px;
          padding: 8px 18px;
          text-align: center;
        }
        .hb-text { display: flex; flex-direction: column; align-items: center; max-width: 100%; }

        .hb-h1 {
          font-family: "Playfair Display", Georgia, serif;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 0.98;
          letter-spacing: -0.01em;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #f6ead6;
          text-shadow: 0 2px 0 rgba(20, 8, 4, 0.5), 0 10px 30px rgba(0, 0, 0, 0.45), 0 0 34px rgba(224, 178, 104, 0.22);
        }
        .hb-w {
          display: block;
          white-space: nowrap;
          font-size: 9vw;
          opacity: 0;
          animation: hbWord 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .hb-w:nth-child(2) { animation-delay: 0.3s; }
        .hb-sub {
          margin-top: 14px;
          max-width: 92%;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-style: italic;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          line-height: 1.25;
          font-size: clamp(1.02rem, 4.3vw, 1.7rem);
          text-wrap: balance;
          background: linear-gradient(100deg, #b98a45 0%, #f0cf8e 28%, #fff1cf 50%, #f0cf8e 72%, #b98a45 100%);
          background-size: 220% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          opacity: 0;
          animation: hbWord 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.75s forwards, hbShine 7s ease-in-out 2s infinite;
        }
        .hb-orn {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 16px 0 12px;
          color: #c9a15c;
          font-size: 12px;
          opacity: 0;
          animation: hbWord 1s ease-out 1.1s forwards;
        }
        .hb-orn i { display: block; width: 54px; height: 1px; background: linear-gradient(90deg, transparent, #c9a15c); }
        .hb-orn i:last-child { background: linear-gradient(270deg, transparent, #c9a15c); }
        .hb-note {
          max-width: 24rem;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-style: italic;
          font-weight: 500;
          font-size: 1.12rem;
          line-height: 1.45;
          color: rgba(243, 230, 208, 0.78);
          opacity: 0;
          animation: hbWord 1s ease-out 1.3s forwards;
        }

        /* collage */
        .hb-collage {
          position: relative;
          width: min(82vw, 40vh, 560px);
          width: min(82vw, 40svh, 560px);
          aspect-ratio: 1 / 1;
        }
        .hb-glow {
          position: absolute;
          inset: -8%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(236, 196, 128, 0.28) 0%, rgba(236, 196, 128, 0) 66%);
        }
        .hb-ring {
          position: absolute;
          inset: 2% 4% 6% 0;
          border-radius: 50%;
          border: 1px solid rgba(201, 161, 92, 0.35);
        }
        .hb-pos { position: absolute; opacity: 0; animation: hbPop 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .hb-float { width: 100%; transform: rotate(var(--r)); animation: hbFloat 6.5s ease-in-out infinite; }
        .hb-tablet { left: 0; top: 7%; width: 67%; animation-delay: 0.5s; }
        .hb-polaroid { right: 7%; top: 0; width: 27%; animation-delay: 0.9s; }
        .hb-phone { right: 1%; bottom: 0; width: 37%; animation-delay: 1.15s; }
        .hb-polaroid .hb-float { animation-delay: -2s; }
        .hb-phone .hb-float { animation-delay: -4s; }

        .hb-dev {
          position: relative;
          overflow: hidden;
          background: #160b07;
          box-shadow: 0 22px 44px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(201, 161, 92, 0.35);
        }
        .hb-dev img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .hb-tablet .hb-dev { aspect-ratio: 4 / 5; border: 9px solid #1a0e09; border-radius: 24px; }
        .hb-phone .hb-dev { aspect-ratio: 9 / 18.5; border: 6px solid #120a07; border-radius: 22px; }
        .hb-phone .hb-dev::after {
          content: "";
          position: absolute;
          top: 6px; left: 50%;
          width: 30%; height: 6px;
          transform: translateX(-50%);
          border-radius: 6px;
          background: #120a07;
        }
        .hb-tablet .hb-dev::after {
          content: "";
          position: absolute;
          top: 6px; left: 50%;
          width: 5px; height: 5px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: #3a2a22;
        }
        .hb-card {
          background: #f3e6d0;
          padding: 5% 5% 15%;
          border-radius: 3px;
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.5);
          position: relative;
        }
        .hb-card img { display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; object-position: 50% 22%; }
        .hb-card::after { content: "♥"; position: absolute; bottom: 3%; left: 50%; transform: translateX(-50%); font-size: 11px; color: #a8554a; }

        /* floating sparkles */
        .hb-fx { position: absolute; inset: 0; z-index: 2; pointer-events: none; overflow: hidden; }
        .hb-p { position: absolute; bottom: -20px; opacity: 0; animation-name: hbRise; animation-timing-function: ease-in; animation-iteration-count: infinite; }
        .hb-p.s { color: #f0cf8e; text-shadow: 0 0 8px rgba(240, 207, 142, 0.9); }
        .hb-p.h { color: #e7a99b; text-shadow: 0 0 8px rgba(231, 169, 155, 0.6); }

        @keyframes hbWord { from { opacity: 0; transform: translateY(26px); filter: blur(10px); } to { opacity: 1; transform: none; filter: blur(0); } }
        @keyframes hbPop { from { opacity: 0; transform: translateY(30px) scale(0.94); } to { opacity: 1; transform: none; } }
        @keyframes hbFloat { 0%, 100% { transform: translateY(0) rotate(var(--r)); } 50% { transform: translateY(-9px) rotate(var(--r)); } }
        @keyframes hbShine { 0%, 100% { background-position: 100% 0; } 50% { background-position: 0% 0; } }
        @keyframes hbRise { 0% { opacity: 0; transform: translateY(0) scale(0.7); } 15% { opacity: 0.85; } 100% { opacity: 0; transform: translateY(-75vh) translateX(16px) scale(1.1); } }

        @media (min-width: 1024px) {
          .hb-main { grid-template-columns: 1.1fr 0.9fr; gap: 3vw; padding: 0 7vw; text-align: left; justify-items: start; }
          .hb-text { align-items: flex-start; }
          .hb-h1 { align-items: flex-start; }
          .hb-w { font-size: min(4.6vw, 5.8rem); }
          .hb-sub { font-size: clamp(1.2rem, 1.75vw, 1.9rem); max-width: 96%; }
          .hb-note { font-size: 1.3rem; }
          .hb-collage { justify-self: center; width: min(42vw, 74vh, 600px); width: min(42vw, 74svh, 600px); }
        }
        @media (max-width: 380px) { .hb-top, .hb-bottom { padding-left: 24px; padding-right: 24px; } .hb-note { font-size: 1rem; } }
        @media (prefers-reduced-motion: reduce) {
          .hb-w, .hb-sub, .hb-orn, .hb-note, .hb-pos { animation: none; opacity: 1; filter: none; }
          .hb-float { animation: none; }
          .hb-p { display: none; }
        }
      `}</style>

      <div className="hb-frame" aria-hidden="true" />

      <div className="hb-fx" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className={`hb-p ${i % 3 === 0 ? "h" : "s"}`}
            style={{
              left: `${5 + ((i * 47) % 90)}%`,
              animationDelay: `${(i * 0.9) % 6}s`,
              animationDuration: `${7 + (i % 5)}s`,
              fontSize: `${10 + (i % 4) * 3}px`,
            }}
          >
            {i % 3 === 0 ? "♥" : "✦"}
          </span>
        ))}
      </div>

      <div className="hb-top hb-mono">
        <span>Oct 24</span>
        <span>✦</span>
      </div>

      <div className="hb-main">
        <div className="hb-text">
          <h1 className="hb-h1" aria-label="HAPPIEEEE BIRTHDAYYYYY">
            <span className="hb-w">HAPPIEEEE</span>
            <span className="hb-w">BIRTHDAYYYYY</span>
          </h1>
          <div className="hb-orn" aria-hidden="true">
            <i />
            <span>♥</span>
            <i />
          </div>
          <p className="hb-sub">MYYY CUTUUUU NENUUUUUUUUU</p>
          <p className="hb-note" style={{ marginTop: 14 }}>
            May this year bring you closer to everything you&apos;re chasing.
          </p>
        </div>

        <div className="hb-collage">
          <div className="hb-glow" aria-hidden="true" />
          <div className="hb-ring" aria-hidden="true" />

          <div className="hb-pos hb-tablet">
            <div className="hb-float" style={{ ["--r" as string]: "-5deg" }}>
              <div className="hb-dev">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ref/girl.jpg" alt="Nenu" draggable={false} style={{ objectPosition: "50% 30%" }} />
              </div>
            </div>
          </div>

          <div className="hb-pos hb-polaroid">
            <div className="hb-float" style={{ ["--r" as string]: "8deg" }}>
              <div className="hb-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ref/girl5.jpg" alt="Nenu" draggable={false} />
              </div>
            </div>
          </div>

          <div className="hb-pos hb-phone">
            <div className="hb-float" style={{ ["--r" as string]: "6deg" }}>
              <div className="hb-dev">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ref/girl3.jpg" alt="Nenu" draggable={false} style={{ objectPosition: "50% 22%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hb-bottom hb-mono">
        <i />
        <span>Made for you</span>
      </div>
    </section>
  );
};
