export default function WeddingDetails({ events, wedding }) {
  return (
    <section className="section" id="ngay-cuoi">
      <div className="inner">
        <div className="eyebrow">The wedding day</div>
        <h2>Hẹn gặp bạn tại ngày vui</h2>
        <div className="events">
          {events.map((event) => (
            <article className="event" key={event.day}>
              <div className="eventNumber">{event.day}</div>
              <h3>{event.title}</h3>
              <p className="time">Vào lúc …… giờ ……</p>
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
