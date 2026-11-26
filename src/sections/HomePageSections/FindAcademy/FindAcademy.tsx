import { useState } from 'react';

import './FindAcademy.css';

type Country = 'italy' | 'france';

type Academy = {
  id: string;
  name: string;
  location: string;
  subtitle: string;
  description: string;
  logo: string;
  href: string;
};

const academies: Record<Country, Academy[]> = {
  italy: [
    {
      id: 'florence',
      name: 'Florence',
      location: '01',
      subtitle: 'Home of Bande Nere',
      description:
        'The home gym of Italy’s strongest team, in the heart of Tuscany. The perfect place to learn medieval battles, and above all to master the poleaxe.',
      logo: '/images/HomePage/academy/logos/florence.svg',
      href: '#florence',
    },
    {
      id: 'genoa',
      name: 'Genoa',
      location: '02',
      subtitle: 'The legacy of San Giorgio',
      description:
        'The renaissance of one of Italy’s oldest teams. Seasoned veterans stand shoulder to shoulder with young talent, back on the winning path and forging new victories.',
      logo: '/images/HomePage/academy/logos/genoa.svg',
      href: '#genoa',
    },
  ],
  france: [
    {
      id: 'burgundy',
      name: 'Burgundy',
      location: '01',
      subtitle: 'The old school of buhurt',
      description:
        'A place to develop your skills, learn medieval combat and train alongside experienced fighters.',
      logo: '/images/HomePage/academy/logos/burgundy.svg',
      href: '#burgundy',
    },
    {
      id: 'dordogne',
      name: 'Dordogne',
      location: '02',
      subtitle: 'Buhurt in the land of castles',
      description:
        'Founded on the base of Sanctis Draconis Petrocorija, an academy always on the road, fighting in the lists of France and beyond in search of priceless battle experience.',
      logo: '/images/HomePage/academy/logos/dordogne.svg',
      href: '#dordogne',
    },
  ],
};

const countries: { id: Country; label: string }[] = [
  { id: 'italy', label: 'Italy' },
  { id: 'france', label: 'France' },
];

export function FindAcademy() {
  const [activeCountry, setActiveCountry] = useState<Country>('italy');
  const [activeAcademy, setActiveAcademy] = useState(0);

  const currentAcademies = academies[activeCountry];

  return (
    <section className="find-academy" id="academies">
      <div className="find-academy-container mx-auto w-full px-4 lg:px-10">
        <h2 className="find-academy-title">
          <span>Find</span> Your Academy
        </h2>

        <div className="find-academy-tabs" aria-label="Select country">
          {countries.map((country) => (
            <button
              key={country.id}
              type="button"
              className={`find-academy-tab ${activeCountry === country.id ? 'is-active' : ''}`}
              onClick={() => {
                setActiveCountry(country.id);
                setActiveAcademy(0);
              }}
              aria-pressed={activeCountry === country.id}>
              {country.label}
            </button>
          ))}
        </div>

        <div className="find-academy-cards" key={activeCountry}>
          {currentAcademies.map((academy, index) => (
            <article
              key={academy.id}
              className={`find-academy-card ${activeAcademy === index ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveAcademy(index)}
              onFocus={() => setActiveAcademy(index)}>
              <div className="find-academy-image">
                <img
                  className="find-academy-photo"
                  src="/images/HomePage/academy/academy-image.webp"
                  alt="Medieval fighters in armour"
                  loading="lazy"
                />

                <img
                  className="find-academy-logo"
                  src={academy.logo}
                  alt={`HMB Academy ${academy.name}`}
                  loading="lazy"
                />
              </div>

              <div className="find-academy-content">
                <span className="find-academy-counter">
                  {academy.location} <span>/ 02</span>
                </span>

                <div className="find-academy-info">
                  <h3 className="find-academy-name">
                    HMB Academy <span>{academy.name}</span>
                  </h3>

                  <p className="find-academy-subtitle">{academy.subtitle}</p>

                  <p className="find-academy-description">{academy.description}</p>
                </div>

                <a href={academy.href} className="find-academy-link">
                  <span>Explore {academy.name}</span>

                  <img src="/images/HomePage/academy/arrow-right.svg" alt="" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
