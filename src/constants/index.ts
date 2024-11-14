import { LuLinkedin, LuInstagram, LuFacebook } from 'react-icons/lu';
import { PiFilePdfBold } from "react-icons/pi";
import { Sosials } from '@/types';

export const socials: Sosials[] = [
  {
    name: 'LinkedIn',
    Icon: LuLinkedin,
    url: 'https://www.linkedin.com/',
  },
  {
    name: 'Instagram',
    Icon: LuInstagram,
    url: 'https://www.instagram.com/',
  },
  {
    name: 'Facebook',
    Icon: LuFacebook,
    url: 'https://www.facebook.com/',
  },
  {
    name: 'Resume',
    Icon: PiFilePdfBold,
    url: '#'
  }
];
