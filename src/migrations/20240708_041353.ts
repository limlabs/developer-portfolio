import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "appearance" (
	"id" serial PRIMARY KEY NOT NULL,
	"border_radius" numeric,
	"palette_dark_background" varchar,
	"palette_dark_foreground" varchar,
	"palette_dark_muted" varchar,
	"palette_dark_muted_foreground" varchar,
	"palette_dark_border" varchar,
	"palette_dark_input_border" varchar,
	"palette_dark_popover" varchar,
	"palette_dark_popover_foreground" varchar,
	"palette_dark_card" varchar,
	"palette_dark_card_foreground" varchar,
	"palette_dark_primary" varchar,
	"palette_dark_primary_foreground" varchar,
	"palette_dark_secondary" varchar,
	"palette_dark_secondary_foreground" varchar,
	"palette_dark_accent" varchar,
	"palette_dark_accent_foreground" varchar,
	"palette_dark_destructive" varchar,
	"palette_dark_destructive_foreground" varchar,
	"palette_dark_ring" varchar,
	"palette_dark_box" varchar,
	"palette_light_background" varchar,
	"palette_light_foreground" varchar,
	"palette_light_muted" varchar,
	"palette_light_muted_foreground" varchar,
	"palette_light_border" varchar,
	"palette_light_input_border" varchar,
	"palette_light_popover" varchar,
	"palette_light_popover_foreground" varchar,
	"palette_light_card" varchar,
	"palette_light_card_foreground" varchar,
	"palette_light_primary" varchar,
	"palette_light_primary_foreground" varchar,
	"palette_light_secondary" varchar,
	"palette_light_secondary_foreground" varchar,
	"palette_light_accent" varchar,
	"palette_light_accent_foreground" varchar,
	"palette_light_destructive" varchar,
	"palette_light_destructive_foreground" varchar,
	"palette_light_ring" varchar,
	"palette_light_box" varchar,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);
`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "appearance";`)
};
