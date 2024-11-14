import { SocialMediaSection } from '@/components/social-media-section';
import { IntroducionSection } from '@/components/introducion-section';

const HomePage = () => {
  return (
    <div className="container">
      <div className="paper">
        <h3>Esto Triramdani Nurlustiwan</h3>
        <p style={{ fontStyle: 'italic' }}>a full stack web developer, based in Indonesia 🇮🇩.</p>

        <hr />

        <IntroducionSection />

        <SocialMediaSection />
        <hr style={{ marginTop: '1.5rem', display: 'block' }} />
        <br />
        <div className="alert alert-secondary">More sections are coming!</div>
      </div>
    </div>
  );
};

export default HomePage;
