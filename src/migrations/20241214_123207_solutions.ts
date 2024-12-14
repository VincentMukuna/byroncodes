import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_solutions_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__solutions_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "solutions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"cta_label" varchar DEFAULT 'Learn More',
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_solutions_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "solutions_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_solutions_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_content" jsonb,
  	"version_cta_label" varchar DEFAULT 'Learn More',
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__solutions_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_solutions_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"categories_id" integer
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "solutions_id" integer;
  DO $$ BEGIN
   ALTER TABLE "solutions" ADD CONSTRAINT "solutions_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_rels" ADD CONSTRAINT "solutions_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_rels" ADD CONSTRAINT "solutions_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_rels" ADD CONSTRAINT "solutions_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v" ADD CONSTRAINT "_solutions_v_parent_id_solutions_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v" ADD CONSTRAINT "_solutions_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v_rels" ADD CONSTRAINT "_solutions_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v_rels" ADD CONSTRAINT "_solutions_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v_rels" ADD CONSTRAINT "_solutions_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "solutions_meta_meta_image_idx" ON "solutions" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "solutions_slug_idx" ON "solutions" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "solutions_updated_at_idx" ON "solutions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "solutions_created_at_idx" ON "solutions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "solutions__status_idx" ON "solutions" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "solutions_rels_order_idx" ON "solutions_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "solutions_rels_parent_idx" ON "solutions_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_rels_path_idx" ON "solutions_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "solutions_rels_projects_id_idx" ON "solutions_rels" USING btree ("projects_id");
  CREATE INDEX IF NOT EXISTS "solutions_rels_categories_id_idx" ON "solutions_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_parent_idx" ON "_solutions_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_meta_version_meta_image_idx" ON "_solutions_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version_slug_idx" ON "_solutions_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version_updated_at_idx" ON "_solutions_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version_created_at_idx" ON "_solutions_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version__status_idx" ON "_solutions_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_solutions_v_created_at_idx" ON "_solutions_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_solutions_v_updated_at_idx" ON "_solutions_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_solutions_v_latest_idx" ON "_solutions_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_solutions_v_autosave_idx" ON "_solutions_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_order_idx" ON "_solutions_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_parent_idx" ON "_solutions_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_path_idx" ON "_solutions_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_projects_id_idx" ON "_solutions_v_rels" USING btree ("projects_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_categories_id_idx" ON "_solutions_v_rels" USING btree ("categories_id");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_solutions_id_idx" ON "payload_locked_documents_rels" USING btree ("solutions_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "solutions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_solutions_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_solutions_v_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "solutions" CASCADE;
  DROP TABLE "solutions_rels" CASCADE;
  DROP TABLE "_solutions_v" CASCADE;
  DROP TABLE "_solutions_v_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_solutions_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_solutions_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "solutions_id";
  DROP TYPE "public"."enum_solutions_status";
  DROP TYPE "public"."enum__solutions_v_version_status";`)
}
