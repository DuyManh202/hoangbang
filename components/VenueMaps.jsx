export default function VenueMaps({ venues }) {
  const availableVenues = venues.filter((venue) => venue.mapUrl);

  if (!availableVenues.length) return null;

  return (
    <section className="section mapSection" id="ban-do">
      <div className="inner" data-reveal>
        <div className="eyebrow">Find your way</div>
        <h2>Đường đến ngày vui</h2>
        <p className="mapIntro">Chạm để mở Google Maps và xem đường đi.</p>
        <div className="venueCards">
          {availableVenues.map((venue) => {
            return (
              <article className="venueCard" key={venue.id}>
                <span className="mapPin" aria-hidden="true">♥</span>
                <h3>{venue.title}</h3>
                <p>{venue.address || "Mở vị trí nhà gái trên bản đồ"}</p>
                <a href={venue.mapUrl} target="_blank" rel="noreferrer">
                  Chỉ đường với Google Maps <span aria-hidden="true">↗</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
