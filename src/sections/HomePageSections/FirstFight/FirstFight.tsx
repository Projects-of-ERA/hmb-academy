import './FirstFight.css';

const steps = [
  {
    number: '01',
    title: 'Choose Your Academy',
    description: 'Find the one nearest to you.',
  },
  {
    number: '02',
    title: 'Get In Touch',
    description: 'Text or call the academy,\nwhichever suits you best.',
  },
  {
    number: '03',
    title: 'Come To Your\nFree First Training',
    description: "Bring sportswear and water.\nWe'll take care of the rest.",
  },
];

export function FirstFight() {
  return (
    <section className="first-fight" id="first-fight">
      <div className="first-fight-container mx-auto w-full px-4 lg:px-10">
        <div className="first-fight-intro">
          <h2 className="first-fight-title">
            <span>From First Message</span> To First Fight
          </h2>

          <p className="first-fight-description">
            Putting on armour and stepping into the battle is easier than you think. You don’t need
            your own armour, any fighting experience or special fitness to get started. Take three
            simple steps today, and soon you’ll remember the day you first walked through the
            academy doors as one of the best decisions you’ve ever made.
          </p>
        </div>

        <div className="first-fight-steps">
          {steps.map((step) => (
            <div className="first-fight-step" key={step.number}>
              <span className="first-fight-step-number">{step.number}</span>

              <div className="first-fight-step-content">
                <h3 className="first-fight-step-title">{step.title}</h3>

                <p className="first-fight-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#academies" className="first-fight-button">
          <span>Make Your Choice</span>

          <img src="/images/HomePage/first-fight/arrow-right.svg" alt="" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
