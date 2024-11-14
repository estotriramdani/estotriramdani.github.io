import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoAngular,
} from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';
import moment from 'moment';
import { START_WORKING_YEAR } from '@/constants';

export const IntroducionSection = () => {
  const workingYears = Math.abs(moment(START_WORKING_YEAR, 'YYYY').diff(new Date(), 'year'));

  return (
    <div>
      <p style={{ lineHeight: 1.8 }}>
        Over the last <strong>{workingYears} years</strong>, I've worked extensively with{' '}
        <BiLogoJavascript /> JavaScript, <BiLogoTypescript /> TypeScript, <BiLogoReact />
        React.js (sometimes I am using <BiLogoAngular /> Angular framework to code),{' '}
        <BiLogoNodejs /> Node.js, <GrMysql /> MySQL and other web development tools. However, for
        styling and serious project, I prefer <BiLogoTailwindCss /> Tailwind CSS. Beside that, I
        love to explore new things and learn new technologies.
      </p>
    </div>
  );
};
