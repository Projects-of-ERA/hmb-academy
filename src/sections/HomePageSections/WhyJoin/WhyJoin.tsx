import './WhyJoin.css';

const benefits = [
  {
    number: '01',
    title: 'A Proven Training System',
    description:
      "Every session follows a plan built by experienced coaches and tested over years of real fights. \nYou don't have to guess what to train: you follow a method that works.",
  },
  {
    number: '02',
    title: 'Trained by Europe’s Top Fighters',
    description:
      "Our coaches aren't theorists. They are active tournament fighters who have tested every method on themselves and proven it in the lists.",
  },
  {
    number: '03',
    title: 'Help with Armour',
    description:
      "You don't need an expensive kit to start. Academies provide soft training gear for your first steps, and when you're ready for steel, we help you order armour with the best value for money.",
  },
  {
    number: '04',
    title: 'Competition with Equals',
    description:
      "Gain experience against opponents at your level at the HMB Academies Cup tournaments.\nAnd when you're ready, represent your academy at major Magna Carta events.",
  },
];

export function WhyJoin() {
  return (
    <section className="why-join" id="why-join">
      <div className="why-join-container mx-auto w-full px-4 lg:px-10">
        <h2 className="why-join-title">
          <span>Why</span> Join an HMB Academy
        </h2>

        <div className="why-join-list">
          {benefits.map((benefit) => (
            <div className="why-join-item" key={benefit.number}>
              <span className="why-join-number" aria-hidden="true">
                {benefit.number}
              </span>

              <div className="why-join-content">
                <h3 className="why-join-item-title">{benefit.title}</h3>

                <p className="why-join-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
