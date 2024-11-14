import { SocialMediaSection } from '@/components/social-media-section';

const HomePage = () => {
  return (
    <div className="container">
      <div className="paper">
        <h3>Hello, I am Esto</h3>
        <h5>Esto Triramdani Nurlustiwan</h5>
        <p style={{ fontStyle: 'italic' }}>a full stack web developer, based in Indonesia 🇮🇩.</p>

        <SocialMediaSection />
      </div>
    </div>
  );
};

export default HomePage;
