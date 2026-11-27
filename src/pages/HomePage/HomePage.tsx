import { Hero } from '../../sections/HomePageSections/Hero/Hero';
import { AboutProject } from '../../sections/HomePageSections/AboutProject/AboutProject';
import { WhatIsHMB } from '../../sections/HomePageSections/WhatIsHMB/WhatIsHMB';
import { WhyJoin } from '../../sections/HomePageSections/WhyJoin/WhyJoin';
import { FindAcademy } from '../../sections/HomePageSections/FindAcademy/FindAcademy';
import { NextBattle } from '../../sections/HomePageSections/NextBattle/NextBattle';
import { FirstFight } from '../../sections/HomePageSections/FirstFight/FirstFight';
import { BringAcademy } from '../../sections/HomePageSections/BringAcademy/BringAcademy';

export function HomePage() {
  return (
    <main className="home-page">
      <Hero />
      <AboutProject />
      <WhatIsHMB />
      <WhyJoin />
      <FindAcademy />
      <NextBattle />
      <FirstFight />
      <BringAcademy />
    </main>
  );
}
