import lunalogo from '../assets/images/logoLuna.svg';
import tiagoprof from '../assets/images/tiago-profile.webp';
import lunapp from '../assets/images/luna-app.webp';
import ucdbapp from '../assets/images/ucdbapp.webp';
import ucdb from '../assets/images/ucdb.webp';

export const projects = [
  {
    title: 'Tiago Profile',
    resume: 'My professional page developed using Vue3, Nuxt3 and Tailwind',
    git: 'https://github.com/tiagofort/tiago-profile',
    site: 'https://www.tiagofortgai.com',
    img: tiagoprof,
  },
  {
    title: 'Luna Crystals API',
    resume: 'Luna Crystals API developed in NodeJs and Express',
    git: 'https://github.com/tiagofort/api-luna',
    site: '',
    img: lunalogo,
  },
  {
    title: 'Luna Crystals ADM',
    resume: 'Luna Crystals Admin developed using Vue/Vuetify',
    git: 'https://github.com/tiagofort/luna-adm-APP-exhibition',
    site: 'https://luna-adm-app-exhibition-54f540dbf795.herokuapp.com/',
    img: lunalogo,
  },
  {
    title: 'Luna Crystals APP',
    resume: 'Luna Crystals APP developed using React, JavaScript and Taildwind',
    git: 'https://github.com/tiagofort/luna-user-APP-exhibition',
    site: 'https://www.luna-crystals.com',
    img: lunapp,
  },
  {
    title: 'KNOWLEDGE AND ATTITUDES REGARDING SUICIDE',
    resume: 'This project is a simple, lightweight survey application built using React, vanilla CSS, and JavaScript',
    git: 'https://github.com/tiagofort/ucdb',
    site: 'https://ucdb.vercel.app/',
    img: ucdbapp,
  },
  {
    title: 'BACKEND KNOWLEDGE AND ATTITUDES REGARDING SUICIDE',
    resume: 'REST API built with Node.js and MongoDB',
    git: 'https://github.com/tiagofort/ucbd_api',
    site: '',
    img: ucdb,
  },
];