import * as migration_20241107_145010_projects from './20241107_145010_projects';
import * as migration_20241123_122517_add_caption_to_media from './20241123_122517_add_caption_to_media';

export const migrations = [
  {
    up: migration_20241107_145010_projects.up,
    down: migration_20241107_145010_projects.down,
    name: '20241107_145010_projects',
  },
  {
    up: migration_20241123_122517_add_caption_to_media.up,
    down: migration_20241123_122517_add_caption_to_media.down,
    name: '20241123_122517_add_caption_to_media'
  },
];
