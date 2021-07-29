const portfolios = [
  {
    id: 0,
    title: 'Daily Prayer App',
    role: 'Front-end Developer',
    type: 'Web Application / Reference',
    description:
      'Daily Prayer App (DYER) is a Islamic everyday-prayer. You can read hadith, Quran, and check prayers time. This project was built with React JS as the front-end. I also created simple REST API for hadith (I downloaded the .sql file of Bukhari hadith from the internet (IslamDB) with Native PHP.',
    technology: 'React JS, SASS, Progessive Web App',
    image:
      'http://esto.my.id/files/images/portfolios-mockup/original-size/daily-prayer.jpg',
    thumb:
      'http://esto.my.id/files/images/portfolios-mockup/thumbnail/daily-prayer.jpg',
    link: 'https://daily-prayer-app.herokuapp.com/',
  },
  {
    id: 1,
    title: 'ETN News',
    role: 'Full-stack Developer',
    type: 'Web Application / News/Blog',
    description:
      'ETN News is web application that allows users to write their own post which can be read by anyone who visits the application. ',
    technology: 'Mongo DB, Express JS, Next.js, Node JS, SASS',
    image:
      'http://esto.my.id/files/images/portfolios-mockup/original-size/etn-news.png',
    thumb:
      'http://esto.my.id/files/images/portfolios-mockup/thumbnail/etn-news.png',
    link: 'https://etn-news-frontend.vercel.app/',
  },
  {
    id: 2,
    title: 'EJ BOOKS Website',
    role: 'Full-stack Developer',
    type: 'Web Application / Book Catalogue',
    description: `EJ Books Website is website of EJ BOOKS, an indie publisher based on Bandung. This website is currently live. I didn't use any JavaScript modern frameworks. This website was designed as microservice architecture. Both front-end and back-end are separated.`,
    technology: 'Vanilla JavaScript, SASS, Bootstrap v4.6',
    image:
      'http://esto.my.id/files/images/portfolios-mockup/original-size/ejbooks-web.jpg',
    thumb:
      'http://esto.my.id/files/images/portfolios-mockup/thumbnail/ejbooks-web.jpg',
    link: 'https://penerbit-ejbooks.my.id/',
  },
  {
    id: 3,
    title: 'SMAN 1 Dayeuhkolot Landing Page',
    role: 'Front-end Developer and UI Designer',
    type: 'Web Application / Landing Page',
    description: `SMAN 1 Dayeuhkolot Landing page is a static landing page for SMAN 1 Dayeuhkolot website. I designed the UI and translated its design to code. This landing page is not deployed on the school official site, but I have deployed by myself on netlify.`,
    technology: 'Bootstrap 4.5, Pure CSS, jQuery',
    image:
      'http://esto.my.id/files/images/portfolios-mockup/original-size/smanday-landing.jpg',
    thumb:
      'http://esto.my.id/files/images/portfolios-mockup/thumbnail/smanday-landing.jpg',
    link: 'https://smanday-landing.netlify.app/',
  },
  {
    id: 4,
    title: 'Simulasi Pembelajaran Matematika (SIPEMA)',
    role: 'Front-end Developer and UI Designer',
    type: 'Web Application / E-Learning',
    description: `SIPEMA is web based e-learning. This project built for the final project in Software Engineering subject in 5th semester. I was also the Lead Project for when we were building SIPEMA form scratch.`,
    technology: 'Bootstrap 4.5, Pure CSS, jQuery, Vanilla JavaScript',
    image:
      'http://esto.my.id/files/images/portfolios-mockup/original-size/sipema.jpg',
    thumb:
      'http://esto.my.id/files/images/portfolios-mockup/thumbnail/sipema.jpg',
    link: 'https://sipemarpl.000webhostapp.com/',
  },
  {
    id: 5,
    title: 'WalttMe',
    role: 'UI Designer',
    type: 'UI Design / Mobile',
    description: `WalttMe is UI design that will fit on mobile screen. `,
    technology: 'Figma',
    image:
      'http://esto.my.id/files/images/portfolios-mockup/original-size/waltme.jpg',
    thumb:
      'http://esto.my.id/files/images/portfolios-mockup/thumbnail/waltme.jpg',
    link: '#',
  },
  {
    id: 6,
    title: 'Simulasi Pembelajaran Matematika (SIPEMA)',
    role: 'Front-end Developer and UI Designer',
    type: 'Web Application',
    description: `SIPEMA is web based e-learning. This project built for the final project in Software Engineering subject in 5th semester. I was also the Lead Project for when we were building SIPEMA form scratch.`,
    technology: 'Bootstrap 4.5, Pure CSS, jQuery, Vanilla JavaScript',
    image:
      'http://esto.my.id/files/images/portfolios-mockup/original-size/sipema.jpg',
    thumb:
      'http://esto.my.id/files/images/portfolios-mockup/thumbnail/sipema.jpg',
    link: 'https://sipemarpl.000webhostapp.com/',
  },
  {
    id: 7,
    title: 'EJ BOOKS Ruang Penulis',
    role: 'Full-stack Developer',
    type: 'Web Application',
    description: `This project was my personal website before this website (website that you currently access) deployed. It built with SASS as the CSS Preprocessor. This project implmented the Single Page App architecture with JavaScript framework: AngularJS`,
    technology: 'Bootstrap v4.5, Native PHP, Vanilla JavaScript',
    image:
      'http://esto.my.id/files/images/portfolios-mockup/original-size/ruangpenulis.jpg',
    thumb:
      'http://esto.my.id/files/images/portfolios-mockup/thumbnail/ruangpenulis.jpg',
    link: 'http://penerbit-ejbooks.my.id/ruangpenulis',
  },
  {
    id: 8,
    title: 'Login System With Plain JS',
    role: 'Full-stack Developer',
    type: 'Web Application / Authentication',
    description: `This login system was built with plain JavaSript for client-side scripting and Pure CSS to style the whole pages. 
    This website has registration page, form validation (with JS), and, of course, login page. If someone make an account on this website, the informations (username and password) will be stored on its browser localStorage. Then if he/she log in to website, the information will be stored on browser's sessionStorage. I didn't use any frameworks or external packages to built made this login system. I know this website (this auth system) is not the best one because there are so many tools that I can be embedded into this website to make its auth system more powerful. I made this (plain) website just to make sure that my logics are right when building login system with its form validation system.`,
    technology: 'Pure CSS, Vanilla JavaScript',
    image:
      'http://esto.my.id/files/images/portfolios-mockup/original-size/login-system.jpg',
    thumb:
      'http://esto.my.id/files/images/portfolios-mockup/thumbnail/login-system.jpg',
    link: 'http://esto.my.id/system-login-with-plain-javascript/',
  },
  {
    id: 9,
    title: 'My Porfolios v3',
    role: 'All-in-One Developer',
    type: 'Web Application / Personal Website',
    description: `This project was my personal website before this website (website that you currently access) deployed. It built with SASS as the CSS Preprocessor. This project implmented the Single Page App architecture with JavaScript framework: AngularJS`,
    technology: 'SASS, AngularJS',
    image:
      'http://esto.my.id/files/images/portfolios-mockup/original-size/old-portfolios.jpg',
    thumb:
      'http://esto.my.id/files/images/portfolios-mockup/thumbnail/old-portfolios.jpg',
    link: '#',
  },
  {
    id: 10,
    title: 'Shayna Ecommerce',
    role: 'Full-stack Developer',
    type: 'Web Application / E-commerce',
    description: `Shayna Ecommerce is web application that I built when I took online course at BuildWith Angga. In this project, I use Laravel for backend and Vue JS in client side.`,
    technology: 'Bootstrap, Vue JS, Laravel 6',
    image:
      'http://esto.my.id/files/images/portfolios-mockup/original-size/shayna.jpg',
    thumb:
      'http://esto.my.id/files/images/portfolios-mockup/thumbnail/shayna.jpg',
    link: 'https://shayna-esto.netlify.app/',
  },
];

export default portfolios;
