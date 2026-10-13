export default function WeddingDetails({ events, wedding }) {
  return (
    <section className="section" id="ngay-cuoi">
      <div className="inner" data-reveal>
        <div className="eyebrow">The wedding day</div>
        <h2>Hẹn gặp bạn tại ngày vui</h2>
        <div className="events">
          {events.map((event, index) => (
            <article className="event" data-reveal key={event.day} style={{ "--reveal-delay": `${index * 120}ms` }}>
              <div className="eventNumber">{event.day}</div>
              <h3>{event.title}</h3>
              <p className="time">Vào lúc {event.time}</p>
              <p>{event.date}</p>
              {event.lunar && <p className="lunar">({event.lunar})</p>}
              <p><strong>Tư gia nhà trai</strong><br />{wedding.address}<br />({wedding.alternateAddress})</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
