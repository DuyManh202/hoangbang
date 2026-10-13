"use client";

import { useEffect, useRef, useState } from "react";

const photos = [
  { src: "/images/anh2.webp", alt: "Ảnh cưới của Hoàng và Bằng" },
  { src: "/images/anh3.webp", alt: "Khoảnh khắc ngày vui" },
  { src: "/images/anh4.webp", alt: "Kỷ niệm của Hoàng và Bằng" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((index) => (index + 1) % photos.length);
      if (event.key === "ArrowLeft") setActiveIndex((index) => (index - 1 + photos.length) % photos.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const movePhoto = (direction) => {
    setActiveIndex((index) => (index + direction + photos.length) % photos.length);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 45) movePhoto(distance < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <section className="section gallerySection">
      <div className="inner" data-reveal>
        <div className="eyebrow">Our memories</div>
        <h2>Một chút thương mến</h2>
        <p className="galleryHint">Chạm vào ảnh để xem trọn khoảnh khắc</p>
        <div className="gallery">
          {photos.map((photo, index) => (
            <button
              className="galleryThumb"
              type="button"
              key={photo.src}
              onClick={() => setActiveIndex(index)}
              aria-label={`Xem ảnh ${index + 1}: ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} />
              <span className="galleryZoom" aria-hidden="true">⌕</span>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="galleryLightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh cưới"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <button className="galleryClose" type="button" onClick={() => setActiveIndex(null)} aria-label="Đóng ảnh">×</button>
          <button className="galleryArrow galleryArrowPrev" type="button" onClick={() => movePhoto(-1)} aria-label="Ảnh trước">‹</button>
          <figure
            className="galleryLightboxFigure"
            onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
            onTouchEnd={handleTouchEnd}
          >
            <img className="galleryLightboxImage" src={photos[activeIndex].src} alt={photos[activeIndex].alt} />
            <figcaption>{photos[activeIndex].alt} <span>· {activeIndex + 1} / {photos.length}</span></figcaption>
          </figure>
          <button className="galleryArrow galleryArrowNext" type="button" onClick={() => movePhoto(1)} aria-label="Ảnh tiếp theo">›</button>
        </div>
      )}
    </section>
  );
}
