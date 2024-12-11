import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "posts" ADD COLUMN "notifications_sent_at" timestamp(3) with time zone;
  ALTER TABLE "_posts_v" ADD COLUMN "version_notifications_sent_at" timestamp(3) with time zone;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "posts" DROP COLUMN IF EXISTS "notifications_sent_at";
  ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_notifications_sent_at";`)
}
