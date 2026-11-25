import { AboutProject } from '../../sections/HomePageSections/AboutProject/AboutProject';
import { Hero } from '../../sections/HomePageSections/Hero/Hero';
import { WhatIsHMB } from '../../sections/HomePageSections/WhatIsHMB/WhatIsHMB';

export function HomePage() {
  return (
    <main className="home-page">
      <Hero />
      <AboutProject />
      <WhatIsHMB />
    </main>
  );
}
