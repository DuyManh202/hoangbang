export default function Families({ families }) {
  return (
    <section className="section families">
      <div className="inner">
        <div className="eyebrow">Together with our families</div>
        <h2>Trân trọng kính mời</h2>
        <div className="parents">
          {[families.groom, families.bride].map((family) => (
            <div key={family.title}>
              <h3>{family.title}</h3>
              <p>Ông: {family.father}<br />Bà: {family.mother}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
