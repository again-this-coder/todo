import React from 'react';
import Grocery from '../assets/images/grocery.svg';
import Work from '../assets/images/work.svg';
import Sport from '../assets/images/sport.svg';
import Design from '../assets/images/design.svg';
import Uni from '../assets/images/uni.svg';
import Social from '../assets/images/social.svg';
import Music from '../assets/images/music.svg';
import Health from '../assets/images/health.svg';
import Movie from '../assets/images/movie.svg';
import Home from '../assets/images/home.svg';

export const priorityNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const labelsData = [
  {
    icon: <Grocery />,
    color: '#CCFF80',
    text: 'Grocery',
    id: 1,
  },
  {
    icon: <Work />,
    color: '#FF9680',
    text: 'Work',
    id: 2,
  },
  {
    icon: <Sport />,
    color: '#80FFFF',
    text: 'Sport',
    id: 3,
  },
  {
    icon: <Design />,
    color: '#80FFD9',
    text: 'Design',
    id: 4,
  },
  {
    icon: <Uni />,
    color: '#809CFF',
    text: 'University',
    id: 5,
  },
  {
    icon: <Social />,
    color: '#FF80EB',
    text: 'Social',
    id: 6,
  },
  {
    icon: <Music />,
    color: '#FC80FF',
    text: 'Music',
    id: 7,
  },
  {
    icon: <Health />,
    color: '#80FFA3',
    text: 'Health',
    id: 8,
  },
  {
    icon: <Movie />,
    color: '#80D1FF',
    text: 'Movie',
    id: 9,
  },
  {
    icon: <Home />,
    color: '#FF8080',
    text: 'Home',
    id: 10,
  },
];

export const labelIcons = {
  Grocery: <Grocery width={18} height={18} />,

  Health: <Health width={18} height={18} />,

  Sport: <Sport width={18} height={18} />,

  Movie: <Movie width={18} height={18} />,

  Home: <Home width={18} height={18} />,

  Work: <Work width={18} height={18} />,

  Music: <Music width={18} height={18} />,

  University: <Uni width={18} height={18} />,

  Social: <Social width={18} height={18} />,

  Design: <Design width={18} height={18} />,
};
