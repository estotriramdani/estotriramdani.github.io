import { socials } from '@/constants';
import './social-media-section.scss';

export const SocialMediaSection = () => {
  return (
    <div className="" style={{ marginBottom: '1rem' }}>
      <div className="socialButtonContainer">
        {socials.map((social, index) => (
          <a key={index} href={social.url} className="paper-btn">
            <social.Icon style={{ fontSize: '1rem' }} /> <span>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
