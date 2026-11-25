import './AboutProject.css';

export function AboutProject() {
  return (
    <section className="about-project" id="about">
      <div className="about-project-container mx-auto w-full px-4 lg:px-10">
        <div className="about-project-image">
          <img
            src="/images/HomePage/about/about-image.webp"
            alt="Medieval fighters taking part in an armored battle"
            loading="lazy"
          />
        </div>

        <div className="about-project-content">
          <h2 className="about-project-title">
            <span>
              Your <span className="about-project-outline">Knight Story</span>
            </span>
            <span>Starts Here</span>
          </h2>

          <p className="about-project-description">
            If you've ever pictured yourself as a knight in armour, sword in hand, this is where you
            make it real. HMB Academies is a network of medieval battles academies. Experienced
            coaches teach you from scratch, and when you're ready, you'll step into tournaments
            against fighters from all over the world.
          </p>

          <a href="#academies" className="about-project-button">
            <span>Find An Academy Near You</span>

            <img src="/images/HomePage/about/arrow-right.svg" alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
