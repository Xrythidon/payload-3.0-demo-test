import * as migration_20240824_055247_initial from './20240824_055247_initial';
import * as migration_20240824_060550_movies from './20240824_060550_movies';

export const migrations = [
  {
    up: migration_20240824_055247_initial.up,
    down: migration_20240824_055247_initial.down,
    name: '20240824_055247_initial',
  },
  {
    up: migration_20240824_060550_movies.up,
    down: migration_20240824_060550_movies.down,
    name: '20240824_060550_movies'
  },
];
