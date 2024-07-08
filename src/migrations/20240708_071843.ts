import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DO $$ BEGIN
 CREATE TYPE "enum_appearance_palettes_dark_type" AS ENUM('preset', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_appearance_palettes_dark_preset" AS ENUM('defaultDark', 'defaultLight', 'brownTown');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_appearance_palettes_light_type" AS ENUM('preset', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_appearance_palettes_light_preset" AS ENUM('defaultDark', 'defaultLight', 'brownTown');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "appearance" (
	"id" serial PRIMARY KEY NOT NULL,
	"general_border_radius" varchar,
	"general_enable_backdrop_animation" boolean,
	"palettes_dark_type" "enum_appearance_palettes_dark_type",
	"palettes_dark_preset" "enum_appearance_palettes_dark_preset",
	"palettes_dark_custom_background" varchar,
	"palettes_dark_custom_foreground" varchar,
	"palettes_dark_custom_muted" varchar,
	"palettes_dark_custom_muted_foreground" varchar,
	"palettes_dark_custom_border" varchar,
	"palettes_dark_custom_input_border" varchar,
	"palettes_dark_custom_primary" varchar,
	"palettes_dark_custom_primary_foreground" varchar,
	"palettes_dark_custom_secondary" varchar,
	"palettes_dark_custom_secondary_foreground" varchar,
	"palettes_dark_custom_accent" varchar,
	"palettes_dark_custom_accent_foreground" varchar,
	"palettes_dark_custom_destructive" varchar,
	"palettes_dark_custom_destructive_foreground" varchar,
	"palettes_dark_custom_ring" varchar,
	"palettes_dark_custom_box" varchar,
	"palettes_dark_custom_popover" varchar,
	"palettes_dark_custom_popover_foreground" varchar,
	"palettes_dark_custom_card" varchar,
	"palettes_dark_custom_card_foreground" varchar,
	"palettes_light_type" "enum_appearance_palettes_light_type",
	"palettes_light_preset" "enum_appearance_palettes_light_preset",
	"palettes_light_custom_background" varchar,
	"palettes_light_custom_foreground" varchar,
	"palettes_light_custom_muted" varchar,
	"palettes_light_custom_muted_foreground" varchar,
	"palettes_light_custom_border" varchar,
	"palettes_light_custom_input_border" varchar,
	"palettes_light_custom_primary" varchar,
	"palettes_light_custom_primary_foreground" varchar,
	"palettes_light_custom_secondary" varchar,
	"palettes_light_custom_secondary_foreground" varchar,
	"palettes_light_custom_accent" varchar,
	"palettes_light_custom_accent_foreground" varchar,
	"palettes_light_custom_destructive" varchar,
	"palettes_light_custom_destructive_foreground" varchar,
	"palettes_light_custom_ring" varchar,
	"palettes_light_custom_box" varchar,
	"palettes_light_custom_popover" varchar,
	"palettes_light_custom_popover_foreground" varchar,
	"palettes_light_custom_card" varchar,
	"palettes_light_custom_card_foreground" varchar,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);
`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "appearance";`)
};
