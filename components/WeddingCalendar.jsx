const days = Array.from({ length: 31 }, (_, index) => index + 1);
const weekdays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const blankDays = Array.from({ length: 3 }, (_, index) => `blank-${index}`);

export default function WeddingCalendar({ events }) {
  const highlightedDays = new Set([20, 21]);

  return (
    <section className="weddingCalendarSection" aria-label="Lịch cưới tháng 10 năm 2026">
      <div className="weddingCalendarWrap" data-reveal>
        <div className="weddingCalendarHeading">
          <div className="eyebrow">Save the date</div>
          <h2>Tháng mình nên duyên</h2>
          <p>Hai ngày vui, mong có bạn cùng chung vui.</p>
        </div>

        <div className="weddingCalendarCard">
          <div className="calendarMonth">
            <span>THÁNG MƯỜI</span>
            <strong>2026</strong>
            <span className="calendarHeart" aria-hidden="true">♥</span>
          </div>
          <div className="calendarGrid" role="grid" aria-label="Tháng 10 năm 2026">
            {weekdays.map((day) => (
              <span className="calendarWeekday" role="columnheader" key={day}>{day}</span>
            ))}
            {blankDays.map((key) => (
              <span className="calendarDay calendarDayBlank" role="gridcell" key={key} />
            ))}
            {days.map((day) => (
              <span
                className={`calendarDay${highlightedDays.has(day) ? ` calendarDayEvent calendarDayEvent${day}` : ""}`}
                role="gridcell"
                aria-label={highlightedDays.has(day) ? `Ngày ${day}, có lịch cưới` : `Ngày ${day}`}
                key={day}
              >
                {day}
                {highlightedDays.has(day) && <i aria-hidden="true">♥</i>}
              </span>
            ))}
          </div>
          <p className="calendarLunar">Tức ngày 11–12 tháng 09 năm Bính Ngọ</p>
        </div>

        <div className="calendarEvents">
          {events.map((event, index) => (
            <article className="calendarEvent" key={event.day} style={{ "--calendar-index": index }}>
              <span className={`calendarEventDate calendarEventDate${index + 1}`}>
                <small>{index === 0 ? "THỨ BA" : "THỨ TƯ"}</small>
                <strong>{event.day.split(".")[0]}</strong>
                <small>THÁNG 10</small>
              </span>
              <span className="calendarEventInfo">
                <strong>{event.title}</strong>
                <small>{event.time}</small>
              </span>
              <span className="calendarEventHeart" aria-hidden="true">♡</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
