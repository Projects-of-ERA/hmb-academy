import { Hero } from '../../sections/HomePageSections/Hero/Hero';
import { AboutProject } from '../../sections/HomePageSections/AboutProject/AboutProject';
import { WhatIsHMB } from '../../sections/HomePageSections/WhatIsHMB/WhatIsHMB';
import { WhyJoin } from '../../sections/HomePageSections/WhyJoin/WhyJoin';
import { FindAcademy } from '../../sections/HomePageSections/FindAcademy/FindAcademy';
import { NextBattle } from '../../sections/HomePageSections/NextBattle/NextBattle';

export function HomePage() {
  return (
    <main className="home-page">
      <Hero />
      <AboutProject />
      <WhatIsHMB />
      <WhyJoin />
      <FindAcademy />
      <NextBattle />
    </main>
  );
}
