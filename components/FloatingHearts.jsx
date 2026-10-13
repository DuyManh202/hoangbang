const hearts = [
  { left: 7, delay: -12, duration: 23, size: 17 },
  { left: 17, delay: -4, duration: 28, size: 13 },
  { left: 29, delay: -19, duration: 25, size: 19 },
  { left: 42, delay: -8, duration: 31, size: 14 },
  { left: 54, delay: -23, duration: 27, size: 16 },
  { left: 66, delay: -2, duration: 24, size: 12 },
  { left: 77, delay: -16, duration: 30, size: 18 },
  { left: 91, delay: -10, duration: 26, size: 14 },
];

export default function FloatingHearts() {
  return (
    <div className="floatingHearts" aria-hidden="true">
      {hearts.map((heart, index) => (
        <span
          className="floatingHeart"
          key={heart.left}
          style={{
            "--heart-left": `${heart.left}%`,
            "--heart-delay": `${heart.delay}s`,
            "--heart-duration": `${heart.duration}s`,
            "--heart-size": `${heart.size}px`,
            "--heart-sway": `${index % 2 === 0 ? 30 : -30}px`,
          }}
        >
          {index % 3 === 0 ? "♡" : "♥"}
        </span>
      ))}
    </div>
  );
}
