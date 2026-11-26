import { useState } from 'react';

import './WhatIsHMB.css';

const cards = [
  {
    id: 'buhurt',
    title: 'Buhurt:',
    subtitle: 'last team standing',
    image: '/images/HomePage/what-is-hmb/buhurt.webp',
    description:
      'Buhurt is a team battle won by elimination. Your goal is to bring every opponent to the ground with strikes or grappling. The team that still has fighters on their feet wins.',
    details: [
      {
        title: '3v3',
        text: 'Where every fighter starts. The entry point to team battles: fewer fighters, more responsibility, more experience.',
      },
      {
        title: '7v7',
        text: 'Maximum intensity. The most popular category. Seven against seven, tight teamwork and non-stop pressure from the first second.',
      },
      {
        title: 'Mass battles',
        text: "The battle from the movies. Dozens of fighters on each side clash at once. The most epic category, and the closest thing to the battle scenes you've seen on screen.",
      },
    ],
    linkText: 'Learn More About Buhurt',
    href: '#buhurt',
  },

  {
    id: 'duels',
    title: 'Duels:',
    subtitle: 'one on one, steel on steel',
    image: '/images/HomePage/what-is-hmb/duels.webp',
    description: 'Duels are fought with different weapons:',
    italicDescription: 'sword and shield, sword and buckler, longsword and poleaxe.',
    additionalDescription:
      'Technique, speed and stamina decide the fight. Only weapon strikes count: every clean hit scores, and when time runs out, the fighter with more points wins.',
    linkText: 'Learn More About Duels',
    href: '#duels',
  },

  {
    id: 'professional-fights',
    title: 'Professional Fights:',
    subtitle: 'MMA in armour',
    image: '/images/HomePage/what-is-hmb/professional-fights.webp',
    description: 'Pro fights stand apart. The full arsenal is allowed:',
    italicDescription: 'weapon strikes, punches, kicks, throws, even ground and pound.',
    descriptionEnd: 'If you want everything a fight can be, this is it.',
    linkText: 'Learn More About Pro Fights',
    href: '#professional-fights',
  },
];

export function WhatIsHMB() {
  const [activeCard, setActiveCard] = useState('buhurt');

  return (
    <section className="what-is-hmb" id="what-is-hmb">
      <div className="what-is-hmb-overlay" aria-hidden="true" />

      <div className="what-is-hmb-container mx-auto w-full px-4 lg:px-10">
        <div className="what-is-hmb-intro">
          <h2 className="what-is-hmb-title">
            What Does <span>HMB</span> Stand For?
          </h2>

          <p className="what-is-hmb-description">
            HMB stands for Historical Medieval Battle: a full-contact combat sport fought in real
            armour with blunted steel weapons. It has both one-on-one duels and team battles - a
            type of combat you won't find in any other martial art.
          </p>
        </div>

        <div className="what-is-hmb-cards">
          {cards.map((card) => {
            const isActive = activeCard === card.id;

            return (
              <article
                key={card.id}
                className={`what-is-hmb-card ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveCard(card.id)}
                onFocus={() => setActiveCard(card.id)}>
                <div className="what-is-hmb-card-inner">
                  <h3 className="what-is-hmb-card-title">{card.title}</h3>

                  <div className="what-is-hmb-card-main">
                    <div
                      className="what-is-hmb-card-background"
                      style={{ backgroundImage: `url(${card.image})` }}
                      aria-hidden="true"
                    />

                    <div className="what-is-hmb-card-overlay" aria-hidden="true" />

                    <div className="what-is-hmb-card-body">
                      <h4 className="what-is-hmb-card-subtitle">{card.subtitle}</h4>

                      <p className="what-is-hmb-card-description">
                        {card.description}

                        {'italicDescription' in card && card.italicDescription && (
                          <>
                            {' '}
                            <em>{card.italicDescription}</em>
                          </>
                        )}

                        {'descriptionEnd' in card && card.descriptionEnd && (
                          <> {card.descriptionEnd}</>
                        )}
                      </p>

                      {'additionalDescription' in card && card.additionalDescription && (
                        <p className="what-is-hmb-card-description">{card.additionalDescription}</p>
                      )}

                      {'details' in card && card.details && (
                        <div className="what-is-hmb-card-details">
                          {card.details.map((detail) => (
                            <div className="what-is-hmb-card-detail" key={detail.title}>
                              <img
                                src="/images/HomePage/what-is-hmb/icon.svg"
                                alt=""
                                aria-hidden="true"
                              />

                              <p>
                                <strong>{detail.title}</strong> — {detail.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <a href={card.href} className="what-is-hmb-card-link">
                      <span>{card.linkText}</span>

                      <img
                        src="/images/HomePage/what-is-hmb/arrow-right.svg"
                        alt=""
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
