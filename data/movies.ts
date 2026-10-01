export type Movies = {
    id: string,
    name: string,
    genres: string[],
    duration: string,
    year: number,
    review: number,
    description: string
};

export const movies: Movies[] = [
    {
        id: '1',
        name: 'Frieren',
        genres: ['Anime', 'Magic', 'Shonen'],
        duration: '15:12:00',
        year: 2023,
        review: 10.0,
        description: 'Amazing anime, worth of all minutes you spend on it. Brings all kinds of reflections about life and time.'
    },
    {
        id: '2',
        name: 'Fullmetal Alchemist Brotherhood',
        genres: ['Anime', 'Seinen', 'Action'],
        duration: '25:36:00',
        year: 2009,
        review: 10.0,
        description: 'Absolute cinema. Best of all times they say. A must if you have good taste.'
    },
    {
        id: '3',
        name: 'Death Note',
        genres: ['Anime', 'Seinen', 'Investigation'],
        duration: '',
        year: 2026,
        review: 8.2,
        description: 'A classic. May be full of script fails, but still an icon if you talking about y2k fashion and culture.'
    },
        {
        id: '4',
        name: 'Hunger Games',
        genres: ['Distopia', 'Drama', 'Action'],
        duration: '12:30:00',
        year: 2012,
        review: 8.8,
        description: 'A great distopia. So brutal as actual. Very iconic if i must say.'
    },
        {
        id: '5',
        name: 'Shingeki no Kyojin',
        genres: ['Anime', 'Seinen', 'Distopia'],
        duration: '34:50:00',
        year: 2013,
        review: 9.2,
        description: 'The trama is complex and well written. No matter how many times you watch, you always notice something new.'
    }
]; 
