import './NextBattle.css';

const event = {
  title: 'HMB Academies Cup',
  date: '7 November 2026',
  location: 'HMB Academy Florence, Impruneta',
  description:
    'A tournament for beginner fighters from across the Academy network. Armoured and soft categories:',
  italicText: '3v3, sword and shield, sword and buckler, longsword.',
  descriptionEnd: 'Your first chance to test yourself against opponents at your level.',
  image: '/images/HomePage/next-battle/event-poster.webp',
  href: '#event-details',
};

export function NextBattle() {
  return (
    <section className="next-battle" id="next-battle">
      <div className="next-battle-container mx-auto w-full px-4 lg:px-10">
        <div className="next-battle-intro">
          <h2 className="next-battle-title">
            <span>Next</span>
            <span>Battle</span>
          </h2>

          <p className="next-battle-description">
            Experience is one of the most important things in a fighter's growth, and no training
            can replace a real fight. That's why HMB Academies give their athletes the chance to
            compete at every level: from HMB Academies Cup tournaments for beginners all the way to
            top-level Magna Carta events.
          </p>
        </div>

        <div className="next-battle-event">
          <div className="next-battle-event-image">
            <img src={event.image} alt="HMB Academies Cup tournament poster" loading="lazy" />
          </div>

          <div className="next-battle-event-content">
            <h3 className="next-battle-event-title">{event.title}</h3>

            <div className="next-battle-event-info">
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>

            <p className="next-battle-event-description">
              {event.description} <em>{event.italicText}</em> {event.descriptionEnd}
            </p>

            <a href={event.href} className="next-battle-event-link">
              <span>Event Details</span>

              <img src="/images/HomePage/next-battle/arrow-right.svg" alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
