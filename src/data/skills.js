import React from 'react';
import { FaSass } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { GrCss3, GrHtml5, GrJs, GrMysql, GrReactjs, GrTechnology, GrTerminal } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';

export default [
  {
    title: 'React',
    icon: (
      <IconContext.Provider value={{ className: 'skills__skill-icon', size: '6.5rem' }}>
        <GrReactjs />
      </IconContext.Provider>
    ),
  },
  {
    title: 'Javascript ES6 syntax',
    icon: (
      <IconContext.Provider value={{ className: 'skills__skill-icon', size: '6.5rem' }}>
        <GrJs />
      </IconContext.Provider>
    ),
  },
  {
    title: 'CSS3 (Bootstrap, Material Web)',
    icon: (
      <IconContext.Provider value={{ className: 'skills__skill-icon', size: '5.5rem' }}>
        <GrCss3 />
      </IconContext.Provider>
    ),
  },
  {
    title: 'SASS',
    icon: (
      <IconContext.Provider value={{ className: 'skills__skill-icon', size: '5.5rem' }}>
        <FaSass />
      </IconContext.Provider>
    ),
  },
  {
    title: 'HTML5',
    icon: (
      <IconContext.Provider value={{ className: 'skills__skill-icon', size: '5.5rem' }}>
        <GrHtml5 />
      </IconContext.Provider>
    ),
  },
  {
    title: 'WEBPACK',
    icon: (
      <IconContext.Provider value={{ className: 'skills__skill-icon', size: '4.5rem' }}>
        <GrTechnology />
      </IconContext.Provider>
    ),
  },
  {
    title: 'Git',
    icon: (
      <IconContext.Provider value={{ className: 'skills__skill-icon', size: '4.5rem' }}>
        <FiGithub />
      </IconContext.Provider>
    ),
  },
  {
    title: 'Bash',
    icon: (
      <IconContext.Provider value={{ className: 'skills__skill-icon', size: '4.5rem' }}>
        <GrTerminal />
      </IconContext.Provider>
    ),
  },
  {
    title: 'Mysql',
    icon: (
      <IconContext.Provider value={{ className: 'skills__skill-icon', size: '5.5rem' }}>
        <GrMysql />
      </IconContext.Provider>
    ),
  },
];
