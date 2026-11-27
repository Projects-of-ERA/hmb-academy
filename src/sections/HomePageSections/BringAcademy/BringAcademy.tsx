import './BringAcademy.css';

const paragraphs = [
  'Do you have serious experience in medieval battles and want to open your own academy? You can. \nStart a new gym from scratch, or bring your existing one into the HMB Academies network.',
  "We'll share everything we've built: our experience, training programmes, branding and know-how. \nWe'll give your gym visibility and make it part of a growing international system.",
  "If you're ready to work hard to make your gym the strongest around and take your students to a whole new level, write to us and we'll tell you everything.",
];

export function BringAcademy() {
  return (
    <section className="bring-academy" id="bring-academy">
      <div className="bring-academy-container mx-auto w-full px-4 lg:px-0 lg:pr-10">
        <div className="bring-academy-image">
          <img
            src="/images/HomePage/bring-academy/academy-image.webp"
            alt="Armoured medieval fighter on horseback"
            loading="lazy"
          />
        </div>

        <h2 className="bring-academy-title">
          <span className="bring-academy-outline">Bring</span>
          <span>HMB</span>
          <span>Academies</span>
          <span>To Your</span>
          <span>City</span>
        </h2>

        <div className="bring-academy-content">
          <div className="bring-academy-text">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <a href="mailto:info@example.com" className="bring-academy-button">
            <span>Write To Us</span>
            <img src="/images/HomePage/bring-academy/arrow-right.svg" alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
