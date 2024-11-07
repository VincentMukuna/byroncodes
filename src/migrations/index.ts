import * as migration_20241107_145010_projects from './20241107_145010_projects';

export const migrations = [
  {
    up: migration_20241107_145010_projects.up,
    down: migration_20241107_145010_projects.down,
    name: '20241107_145010_projects'
  },
];
