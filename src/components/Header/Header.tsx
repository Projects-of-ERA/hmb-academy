import { useState, type CSSProperties } from 'react';

import './Header.css';

type Language = 'en' | 'fr' | 'it';

const initialLanguages: Language[] = ['en', 'fr', 'it'];

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Academies Cup', href: '#academies-cup' },
  { label: 'Contacts', href: '#contacts' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [languages, setLanguages] = useState<Language[]>(initialLanguages);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (language: Language) => {
    setLanguages((current) => {
      const index = current.indexOf(language);

      if (index === 0) return current;

      const updated = [...current];

      [updated[0], updated[index]] = [updated[index], updated[0]];

      return updated;
    });
  };

  return (
    <header className="header">
      <div className="header-inner mx-auto w-full px-4 lg:px-10">
        <a href="/" className="header-logo" aria-label="HMB Academy Home">
          <img src="/images/Header/logo.svg" alt="HMB Academy" />
        </a>

        <nav
          id="header-navigation"
          className={`header-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="header-link"
              onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="header-languages" aria-label="Select language">
            {languages.map((language, index) => (
              <button
                key={language}
                type="button"
                className={`header-language ${index === 0 ? 'is-active' : ''}`}
                style={{ '--slot': index } as CSSProperties}
                onClick={() => handleLanguageChange(language)}
                aria-pressed={index === 0}
                aria-label={`Select ${language.toUpperCase()} language`}>
                {language.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={`header-menu-toggle ${isMenuOpen ? 'is-active' : ''}`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="header-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
