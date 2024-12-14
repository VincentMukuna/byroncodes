import * as migration_20241107_145010_projects from './20241107_145010_projects';
import * as migration_20241123_122517_add_caption_to_media from './20241123_122517_add_caption_to_media';
import * as migration_20241123_234307_add_blog_posts from './20241123_234307_add_blog_posts';
import * as migration_20241124_115717_add_description_to_categories from './20241124_115717_add_description_to_categories';
import * as migration_20241210_163503_subscriptions from './20241210_163503_subscriptions';
import * as migration_20241211_183514_add_notifications_sent_at_field_to_posts_table from './20241211_183514_add_notifications_sent_at_field_to_posts_table';
import * as migration_20241211_202904_testimonials from './20241211_202904_testimonials';
import * as migration_20241211_205544_testimonials_array from './20241211_205544_testimonials_array';
import * as migration_20241214_123207_solutions from './20241214_123207_solutions';
import * as migration_20241214_133117_add_is_featured_column_to_projects from './20241214_133117_add_is_featured_column_to_projects';
import * as migration_20241214_170300_skills from './20241214_170300_skills';

export const migrations = [
  {
    up: migration_20241107_145010_projects.up,
    down: migration_20241107_145010_projects.down,
    name: '20241107_145010_projects',
  },
  {
    up: migration_20241123_122517_add_caption_to_media.up,
    down: migration_20241123_122517_add_caption_to_media.down,
    name: '20241123_122517_add_caption_to_media',
  },
  {
    up: migration_20241123_234307_add_blog_posts.up,
    down: migration_20241123_234307_add_blog_posts.down,
    name: '20241123_234307_add_blog_posts',
  },
  {
    up: migration_20241124_115717_add_description_to_categories.up,
    down: migration_20241124_115717_add_description_to_categories.down,
    name: '20241124_115717_add_description_to_categories',
  },
  {
    up: migration_20241210_163503_subscriptions.up,
    down: migration_20241210_163503_subscriptions.down,
    name: '20241210_163503_subscriptions',
  },
  {
    up: migration_20241211_183514_add_notifications_sent_at_field_to_posts_table.up,
    down: migration_20241211_183514_add_notifications_sent_at_field_to_posts_table.down,
    name: '20241211_183514_add_notifications_sent_at_field_to_posts_table',
  },
  {
    up: migration_20241211_202904_testimonials.up,
    down: migration_20241211_202904_testimonials.down,
    name: '20241211_202904_testimonials',
  },
  {
    up: migration_20241211_205544_testimonials_array.up,
    down: migration_20241211_205544_testimonials_array.down,
    name: '20241211_205544_testimonials_array',
  },
  {
    up: migration_20241214_123207_solutions.up,
    down: migration_20241214_123207_solutions.down,
    name: '20241214_123207_solutions',
  },
  {
    up: migration_20241214_133117_add_is_featured_column_to_projects.up,
    down: migration_20241214_133117_add_is_featured_column_to_projects.down,
    name: '20241214_133117_add_is_featured_column_to_projects',
  },
  {
    up: migration_20241214_170300_skills.up,
    down: migration_20241214_170300_skills.down,
    name: '20241214_170300_skills'
  },
];
