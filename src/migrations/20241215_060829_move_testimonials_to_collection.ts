import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "testimonials_items" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "testimonials_items" CASCADE;
  ALTER TABLE "testimonials" ALTER COLUMN "updated_at" SET DEFAULT now();
  ALTER TABLE "testimonials" ALTER COLUMN "updated_at" SET NOT NULL;
  ALTER TABLE "testimonials" ALTER COLUMN "created_at" SET DEFAULT now();
  ALTER TABLE "testimonials" ALTER COLUMN "created_at" SET NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "testimonials_id" integer;
  ALTER TABLE "testimonials" ADD COLUMN "name" varchar NOT NULL;
  ALTER TABLE "testimonials" ADD COLUMN "role" varchar NOT NULL;
  ALTER TABLE "testimonials" ADD COLUMN "quote" varchar NOT NULL;
  ALTER TABLE "testimonials" ADD COLUMN "rating" numeric NOT NULL;
  ALTER TABLE "testimonials" ADD COLUMN "image_id" integer NOT NULL;
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX IF NOT EXISTS "testimonials_image_idx" ON "testimonials" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"quote" varchar NOT NULL,
  	"rating" numeric NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  ALTER TABLE "testimonials" DROP CONSTRAINT "testimonials_image_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_testimonials_fk";
  
  DROP INDEX IF EXISTS "testimonials_image_idx";
  DROP INDEX IF EXISTS "testimonials_updated_at_idx";
  DROP INDEX IF EXISTS "testimonials_created_at_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_testimonials_id_idx";
  ALTER TABLE "testimonials" ALTER COLUMN "updated_at" DROP DEFAULT;
  ALTER TABLE "testimonials" ALTER COLUMN "updated_at" DROP NOT NULL;
  ALTER TABLE "testimonials" ALTER COLUMN "created_at" DROP DEFAULT;
  ALTER TABLE "testimonials" ALTER COLUMN "created_at" DROP NOT NULL;
  DO $$ BEGIN
   ALTER TABLE "testimonials_items" ADD CONSTRAINT "testimonials_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "testimonials_items" ADD CONSTRAINT "testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "testimonials_items_order_idx" ON "testimonials_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "testimonials_items_parent_id_idx" ON "testimonials_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "testimonials_items_image_idx" ON "testimonials_items" USING btree ("image_id");
  ALTER TABLE "testimonials" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "testimonials" DROP COLUMN IF EXISTS "role";
  ALTER TABLE "testimonials" DROP COLUMN IF EXISTS "quote";
  ALTER TABLE "testimonials" DROP COLUMN IF EXISTS "rating";
  ALTER TABLE "testimonials" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "testimonials_id";`)
}
