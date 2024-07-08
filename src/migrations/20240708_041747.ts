import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TABLE "appearance" ADD COLUMN "general_border_radius" varchar;
ALTER TABLE "appearance" DROP COLUMN IF EXISTS "border_radius";`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TABLE "appearance" ADD COLUMN "border_radius" numeric;
ALTER TABLE "appearance" DROP COLUMN IF EXISTS "general_border_radius";`)
};
