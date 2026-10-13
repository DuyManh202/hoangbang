import { wedding } from "../data/wedding";

export default function Story() {
  return (
    <>
      <section className="section" id="chung-minh">
        <div className="inner">
          <div className="eyebrow">Một hành trình, một lời hẹn</div>
          <h2>Chúng mình sắp nên duyên</h2>
          <p className="intro">Từ những ngày bình thường, chúng mình tìm thấy điều thật đặc biệt. Và giờ đây, chúng mình mong được cùng gia đình, bạn bè lưu giữ khoảnh khắc đáng nhớ này.</p>
          <div className="coupleNames">{wedding.groom}<small>&amp;</small>{wedding.bride}</div>
        </div>
      </section>
      <section className="dateBand">
        <div className="eyebrow">Save the date</div>
        <strong>{wedding.date}</strong>
        <p>THỨ BA · {wedding.lunarDate.toUpperCase()}</p>
      </section>
    </>
  );
}
