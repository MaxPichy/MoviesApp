export type Movies = {
  id: string;
  name: string;
  image: string;
  genres: string[];
  duration: string;
  year: number;
  rate: number;
  favorite: boolean;
  general_review: string;
};

export const movies: Movies[] = [
  {
    id: '1',
    name: 'Frieren',
    image: '',
    genres: ['Anime', 'Magic', 'Shonen'],
    duration: '15:12:00',
    year: 2023,
    rate: 10.0,
    favorite: true,
    general_review:
      'Amazing anime, worth of all minutes you spend on it. Brings all kinds of reflections about life and time.',
  },
  {
    id: '2',
    name: 'Fullmetal Alchemist Brotherhood',
    image: '',
    genres: ['Anime', 'Seinen', 'Action'],
    duration: '25:36:00',
    year: 2009,
    rate: 10.0,
    favorite: true,
    general_review: 'Absolute cinema. Best of all times they say. A must if you have good taste.',
  },
  {
    id: '3',
    name: 'Death Note',
    image: '',
    genres: ['Anime', 'Seinen', 'Investigation'],
    duration: '',
    year: 2026,
    rate: 8.2,
    favorite: true,
    general_review:
      'A classic. May be full of script fails, but still an icon if you talking about y2k fashion and culture.',
  },
  {
    id: '4',
    name: 'Hunger Games',
    image: '',
    genres: ['Distopia', 'Drama', 'Action'],
    duration: '12:30:00',
    year: 2012,
    rate: 8.8,
    favorite: true,
    general_review: 'A great distopia. So brutal as actual. Very iconic if i must say.',
  },
  {
    id: '5',
    name: 'Shingeki no Kyojin',
    image: '',
    genres: ['Anime', 'Seinen', 'Distopia'],
    duration: '34:50:00',
    year: 2013,
    rate: 9.2,
    favorite: true,
    general_review:
      'The trama is complex and well written. No matter how many times you watch, you always notice something new.',
  },
  {
    id: '6',
    name: 'Dungeon Meshi',
    image: '',
    genres: ['Anime', 'Shonen', 'Medieval'],
    duration: '10:32:00',
    year: 2014,
    rate: 9.6,
    favorite: true,
    general_review:
      'We can tell this anime is done with lots of love. A real cozy medieval fantasy, great to just relax. I recommend you to grab a snack.',
  },
];
