import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content mx-auto w-full px-4 lg:px-12">
        <h1 className="hero-title">
          <span>Put on the</span>

          <span>
            <span className="hero-title-outline">Armour</span> and
          </span>

          <span>Test yourself</span>
        </h1>

        <a href="#about" className="hero-button">
          <span>Book Your Free First Training</span>

          <img src="/images/HomePage/hero/arrow-right.svg" alt="" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
