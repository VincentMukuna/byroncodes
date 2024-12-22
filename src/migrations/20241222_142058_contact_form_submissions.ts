import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "contact_form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"message" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "contact_form_submissions_id" integer;
  CREATE INDEX IF NOT EXISTS "contact_form_submissions_updated_at_idx" ON "contact_form_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "contact_form_submissions_created_at_idx" ON "contact_form_submissions" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_form_submissions_fk" FOREIGN KEY ("contact_form_submissions_id") REFERENCES "public"."contact_form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_contact_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("contact_form_submissions_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_form_submissions" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "contact_form_submissions" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_contact_form_submissions_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_contact_form_submissions_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "contact_form_submissions_id";`)
}
