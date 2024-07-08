import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
 DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_content_content_fields_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_content_content_fields_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_content_content_fields_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_media_block_media_fields_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_media_block_media_fields_media_fit" AS ENUM('cover', 'contain');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_media_content_fields_alignment" AS ENUM('contentMedia', 'mediaContent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_media_content_fields_media_size" AS ENUM('oneThird', 'half', 'twoThirds');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_media_content_fields_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_media_content_fields_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_media_content_fields_media_fit" AS ENUM('cover', 'contain');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_content_content_fields_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_content_content_fields_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_content_content_fields_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_media_block_media_fields_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_media_block_media_fields_media_fit" AS ENUM('cover', 'contain');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_media_content_fields_alignment" AS ENUM('contentMedia', 'mediaContent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_media_content_fields_media_size" AS ENUM('oneThird', 'half', 'twoThirds');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_media_content_fields_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_media_content_fields_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_media_content_fields_media_fit" AS ENUM('cover', 'contain');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_content_content_fields_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_content_content_fields_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_content_content_fields_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_media_block_media_fields_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_media_block_media_fields_media_fit" AS ENUM('cover', 'contain');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_media_content_fields_alignment" AS ENUM('contentMedia', 'mediaContent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_media_content_fields_media_size" AS ENUM('oneThird', 'half', 'twoThirds');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_media_content_fields_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_media_content_fields_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_media_content_fields_media_fit" AS ENUM('cover', 'contain');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_role" AS ENUM('uiUxDesigner', 'frontEndDeveloper', 'backEndDeveloper');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_content_content_fields_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_content_content_fields_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_content_content_fields_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_media_block_media_fields_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_media_block_media_fields_media_fit" AS ENUM('cover', 'contain');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_media_content_fields_alignment" AS ENUM('contentMedia', 'mediaContent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_media_content_fields_media_size" AS ENUM('oneThird', 'half', 'twoThirds');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_media_content_fields_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_media_content_fields_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_media_content_fields_media_fit" AS ENUM('cover', 'contain');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_version_role" AS ENUM('uiUxDesigner', 'frontEndDeveloper', 'backEndDeveloper');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_forms_confirmation_type" AS ENUM('message', 'redirect');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"alt" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "pages_blocks_content_content_fields" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"size" "enum_pages_blocks_content_content_fields_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum_pages_blocks_content_content_fields_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_pages_blocks_content_content_fields_link_appearance"
);

CREATE TABLE IF NOT EXISTS "pages_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_form" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"rich_text" jsonb,
	"form_id" integer,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_media_block_media_fields" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"size" "enum_pages_blocks_media_block_media_fields_size",
	"media_id" integer,
	"mediaFit" "enum_pages_blocks_media_block_media_fields_media_fit"
);

CREATE TABLE IF NOT EXISTS "pages_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_media_content_fields" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"alignment" "enum_pages_blocks_media_content_fields_alignment",
	"mediaSize" "enum_pages_blocks_media_content_fields_media_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum_pages_blocks_media_content_fields_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_pages_blocks_media_content_fields_link_appearance",
	"media_id" integer,
	"mediaFit" "enum_pages_blocks_media_content_fields_media_fit"
);

CREATE TABLE IF NOT EXISTS "pages_blocks_media_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_profile_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_project_grid" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"slug" varchar,
	"meta_title" varchar,
	"meta_description" varchar,
	"meta_image_id" integer,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_pages_status"
);

CREATE TABLE IF NOT EXISTS "pages_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer,
	"projects_id" integer
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_content_fields" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"size" "enum__pages_v_blocks_content_content_fields_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum__pages_v_blocks_content_content_fields_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__pages_v_blocks_content_content_fields_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"rich_text" jsonb,
	"form_id" integer,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media_block_media_fields" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"size" "enum__pages_v_blocks_media_block_media_fields_size",
	"media_id" integer,
	"mediaFit" "enum__pages_v_blocks_media_block_media_fields_media_fit",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media_content_fields" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"alignment" "enum__pages_v_blocks_media_content_fields_alignment",
	"mediaSize" "enum__pages_v_blocks_media_content_fields_media_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum__pages_v_blocks_media_content_fields_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__pages_v_blocks_media_content_fields_link_appearance",
	"media_id" integer,
	"mediaFit" "enum__pages_v_blocks_media_content_fields_media_fit",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_profile_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_project_grid" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"parent_id" integer,
	"version_title" varchar,
	"version_slug" varchar,
	"version_meta_title" varchar,
	"version_meta_description" varchar,
	"version_meta_image_id" integer,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__pages_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer,
	"projects_id" integer
);

CREATE TABLE IF NOT EXISTS "projects_blocks_content_content_fields" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"size" "enum_projects_blocks_content_content_fields_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum_projects_blocks_content_content_fields_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_projects_blocks_content_content_fields_link_appearance"
);

CREATE TABLE IF NOT EXISTS "projects_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "projects_blocks_form" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"rich_text" jsonb,
	"form_id" integer,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "projects_blocks_media_block_media_fields" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"size" "enum_projects_blocks_media_block_media_fields_size",
	"media_id" integer,
	"mediaFit" "enum_projects_blocks_media_block_media_fields_media_fit"
);

CREATE TABLE IF NOT EXISTS "projects_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "projects_blocks_media_content_fields" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"alignment" "enum_projects_blocks_media_content_fields_alignment",
	"mediaSize" "enum_projects_blocks_media_content_fields_media_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum_projects_blocks_media_content_fields_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_projects_blocks_media_content_fields_link_appearance",
	"media_id" integer,
	"mediaFit" "enum_projects_blocks_media_content_fields_media_fit"
);

CREATE TABLE IF NOT EXISTS "projects_blocks_media_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "projects_role" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_projects_role",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" jsonb,
	"featured_image_id" integer,
	"slug" varchar,
	"start_date" timestamp(3) with time zone,
	"end_date" timestamp(3) with time zone,
	"meta_title" varchar,
	"meta_description" varchar,
	"meta_image_id" integer,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_projects_status"
);

CREATE TABLE IF NOT EXISTS "projects_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"technologies_id" integer,
	"pages_id" integer,
	"projects_id" integer
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_content_content_fields" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"size" "enum__projects_v_blocks_content_content_fields_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum__projects_v_blocks_content_content_fields_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__projects_v_blocks_content_content_fields_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_form" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"rich_text" jsonb,
	"form_id" integer,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_media_block_media_fields" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"size" "enum__projects_v_blocks_media_block_media_fields_size",
	"media_id" integer,
	"mediaFit" "enum__projects_v_blocks_media_block_media_fields_media_fit",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_media_content_fields" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"alignment" "enum__projects_v_blocks_media_content_fields_alignment",
	"mediaSize" "enum__projects_v_blocks_media_content_fields_media_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum__projects_v_blocks_media_content_fields_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__projects_v_blocks_media_content_fields_link_appearance",
	"media_id" integer,
	"mediaFit" "enum__projects_v_blocks_media_content_fields_media_fit",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_media_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_version_role" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__projects_v_version_role",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_projects_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"parent_id" integer,
	"version_title" varchar,
	"version_description" jsonb,
	"version_featured_image_id" integer,
	"version_slug" varchar,
	"version_start_date" timestamp(3) with time zone,
	"version_end_date" timestamp(3) with time zone,
	"version_meta_title" varchar,
	"version_meta_description" varchar,
	"version_meta_image_id" integer,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__projects_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_projects_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"technologies_id" integer,
	"pages_id" integer,
	"projects_id" integer
);

CREATE TABLE IF NOT EXISTS "technologies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"email" varchar NOT NULL,
	"reset_password_token" varchar,
	"reset_password_expiration" timestamp(3) with time zone,
	"salt" varchar,
	"hash" varchar,
	"login_attempts" numeric,
	"lock_until" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "forms_blocks_email" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"label" varchar,
	"width" numeric,
	"required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_message" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"message" jsonb,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_text" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"label" varchar,
	"width" numeric,
	"default_value" varchar,
	"required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_textarea" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"label" varchar,
	"width" numeric,
	"default_value" varchar,
	"required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_emails" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"email_to" varchar,
	"cc" varchar,
	"bcc" varchar,
	"reply_to" varchar,
	"email_from" varchar,
	"subject" varchar NOT NULL,
	"message" jsonb
);

CREATE TABLE IF NOT EXISTS "forms" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"submit_button_label" varchar,
	"confirmationType" "enum_forms_confirmation_type",
	"confirmation_message" jsonb,
	"redirect_url" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"field" varchar NOT NULL,
	"value" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "form_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"form_id" integer NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar,
	"value" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer
);

CREATE TABLE IF NOT EXISTS "payload_migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"batch" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "header_nav_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_header_nav_items_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "header" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "header_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer,
	"projects_id" integer
);

CREATE TABLE IF NOT EXISTS "profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"location" varchar,
	"title" varchar,
	"about_me" jsonb,
	"profile_image_id" integer,
	"social_links_github" varchar,
	"social_links_linkedin" varchar,
	"social_links_email" varchar,
	"social_links_twitter" varchar,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" ("filename");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_content_fields_order_idx" ON "pages_blocks_content_content_fields" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_content_fields_parent_id_idx" ON "pages_blocks_content_content_fields" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_order_idx" ON "pages_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_path_idx" ON "pages_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_form_order_idx" ON "pages_blocks_form" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_form_parent_id_idx" ON "pages_blocks_form" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_form_path_idx" ON "pages_blocks_form" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_media_fields_order_idx" ON "pages_blocks_media_block_media_fields" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_media_fields_parent_id_idx" ON "pages_blocks_media_block_media_fields" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_content_fields_order_idx" ON "pages_blocks_media_content_fields" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_content_fields_parent_id_idx" ON "pages_blocks_media_content_fields" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_content_order_idx" ON "pages_blocks_media_content" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_content_parent_id_idx" ON "pages_blocks_media_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_content_path_idx" ON "pages_blocks_media_content" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_profile_cta_order_idx" ON "pages_blocks_profile_cta" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_profile_cta_parent_id_idx" ON "pages_blocks_profile_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_profile_cta_path_idx" ON "pages_blocks_profile_cta" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_project_grid_order_idx" ON "pages_blocks_project_grid" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_project_grid_parent_id_idx" ON "pages_blocks_project_grid" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_project_grid_path_idx" ON "pages_blocks_project_grid" ("_path");
CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" ("created_at");
CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" ("order");
CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" ("path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_content_fields_order_idx" ON "_pages_v_blocks_content_content_fields" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_content_fields_parent_id_idx" ON "_pages_v_blocks_content_content_fields" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_order_idx" ON "_pages_v_blocks_form" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_parent_id_idx" ON "_pages_v_blocks_form" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_path_idx" ON "_pages_v_blocks_form" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_media_fields_order_idx" ON "_pages_v_blocks_media_block_media_fields" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_media_fields_parent_id_idx" ON "_pages_v_blocks_media_block_media_fields" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_content_fields_order_idx" ON "_pages_v_blocks_media_content_fields" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_content_fields_parent_id_idx" ON "_pages_v_blocks_media_content_fields" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_content_order_idx" ON "_pages_v_blocks_media_content" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_content_parent_id_idx" ON "_pages_v_blocks_media_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_content_path_idx" ON "_pages_v_blocks_media_content" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_profile_cta_order_idx" ON "_pages_v_blocks_profile_cta" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_profile_cta_parent_id_idx" ON "_pages_v_blocks_profile_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_profile_cta_path_idx" ON "_pages_v_blocks_profile_cta" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_project_grid_order_idx" ON "_pages_v_blocks_project_grid" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_project_grid_parent_id_idx" ON "_pages_v_blocks_project_grid" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_project_grid_path_idx" ON "_pages_v_blocks_project_grid" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" ("latest");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "projects_blocks_content_content_fields_order_idx" ON "projects_blocks_content_content_fields" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_content_content_fields_parent_id_idx" ON "projects_blocks_content_content_fields" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_content_order_idx" ON "projects_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_content_parent_id_idx" ON "projects_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_content_path_idx" ON "projects_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "projects_blocks_form_order_idx" ON "projects_blocks_form" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_form_parent_id_idx" ON "projects_blocks_form" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_form_path_idx" ON "projects_blocks_form" ("_path");
CREATE INDEX IF NOT EXISTS "projects_blocks_media_block_media_fields_order_idx" ON "projects_blocks_media_block_media_fields" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_media_block_media_fields_parent_id_idx" ON "projects_blocks_media_block_media_fields" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_media_block_order_idx" ON "projects_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_media_block_parent_id_idx" ON "projects_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_media_block_path_idx" ON "projects_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "projects_blocks_media_content_fields_order_idx" ON "projects_blocks_media_content_fields" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_media_content_fields_parent_id_idx" ON "projects_blocks_media_content_fields" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_media_content_order_idx" ON "projects_blocks_media_content" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_media_content_parent_id_idx" ON "projects_blocks_media_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_media_content_path_idx" ON "projects_blocks_media_content" ("_path");
CREATE INDEX IF NOT EXISTS "projects_role_order_idx" ON "projects_role" ("order");
CREATE INDEX IF NOT EXISTS "projects_role_parent_idx" ON "projects_role" ("parent_id");
CREATE INDEX IF NOT EXISTS "projects_created_at_idx" ON "projects" ("created_at");
CREATE INDEX IF NOT EXISTS "projects_rels_order_idx" ON "projects_rels" ("order");
CREATE INDEX IF NOT EXISTS "projects_rels_parent_idx" ON "projects_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "projects_rels_path_idx" ON "projects_rels" ("path");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_content_content_fields_order_idx" ON "_projects_v_blocks_content_content_fields" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_content_content_fields_parent_id_idx" ON "_projects_v_blocks_content_content_fields" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_content_order_idx" ON "_projects_v_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_content_parent_id_idx" ON "_projects_v_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_content_path_idx" ON "_projects_v_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_form_order_idx" ON "_projects_v_blocks_form" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_form_parent_id_idx" ON "_projects_v_blocks_form" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_form_path_idx" ON "_projects_v_blocks_form" ("_path");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_media_block_media_fields_order_idx" ON "_projects_v_blocks_media_block_media_fields" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_media_block_media_fields_parent_id_idx" ON "_projects_v_blocks_media_block_media_fields" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_media_block_order_idx" ON "_projects_v_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_media_block_parent_id_idx" ON "_projects_v_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_media_block_path_idx" ON "_projects_v_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_media_content_fields_order_idx" ON "_projects_v_blocks_media_content_fields" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_media_content_fields_parent_id_idx" ON "_projects_v_blocks_media_content_fields" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_media_content_order_idx" ON "_projects_v_blocks_media_content" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_media_content_parent_id_idx" ON "_projects_v_blocks_media_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_media_content_path_idx" ON "_projects_v_blocks_media_content" ("_path");
CREATE INDEX IF NOT EXISTS "_projects_v_version_role_order_idx" ON "_projects_v_version_role" ("order");
CREATE INDEX IF NOT EXISTS "_projects_v_version_role_parent_idx" ON "_projects_v_version_role" ("parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_version_version_created_at_idx" ON "_projects_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_projects_v_created_at_idx" ON "_projects_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_projects_v_updated_at_idx" ON "_projects_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_projects_v_latest_idx" ON "_projects_v" ("latest");
CREATE INDEX IF NOT EXISTS "_projects_v_rels_order_idx" ON "_projects_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_projects_v_rels_parent_idx" ON "_projects_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_rels_path_idx" ON "_projects_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "technologies_created_at_idx" ON "technologies" ("created_at");
CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "forms_blocks_email_order_idx" ON "forms_blocks_email" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_email_path_idx" ON "forms_blocks_email" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_message_order_idx" ON "forms_blocks_message" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_message_path_idx" ON "forms_blocks_message" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" ("_path");
CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" ("_order");
CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" ("created_at");
CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" ("_order");
CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" ("_parent_id");
CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" ("key");
CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path");
CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" ("created_at");
CREATE INDEX IF NOT EXISTS "header_nav_items_order_idx" ON "header_nav_items" ("_order");
CREATE INDEX IF NOT EXISTS "header_nav_items_parent_id_idx" ON "header_nav_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "header_rels_order_idx" ON "header_rels" ("order");
CREATE INDEX IF NOT EXISTS "header_rels_parent_idx" ON "header_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "header_rels_path_idx" ON "header_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "pages_blocks_content_content_fields" ADD CONSTRAINT "pages_blocks_content_content_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_form" ADD CONSTRAINT "pages_blocks_form_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_form" ADD CONSTRAINT "pages_blocks_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_media_block_media_fields" ADD CONSTRAINT "pages_blocks_media_block_media_fields_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_media_block_media_fields" ADD CONSTRAINT "pages_blocks_media_block_media_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_media_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_media_content_fields" ADD CONSTRAINT "pages_blocks_media_content_fields_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_media_content_fields" ADD CONSTRAINT "pages_blocks_media_content_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_media_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_media_content" ADD CONSTRAINT "pages_blocks_media_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_profile_cta" ADD CONSTRAINT "pages_blocks_profile_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_project_grid" ADD CONSTRAINT "pages_blocks_project_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_content_content_fields" ADD CONSTRAINT "_pages_v_blocks_content_content_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_form" ADD CONSTRAINT "_pages_v_blocks_form_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_form" ADD CONSTRAINT "_pages_v_blocks_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_media_block_media_fields" ADD CONSTRAINT "_pages_v_blocks_media_block_media_fields_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_media_block_media_fields" ADD CONSTRAINT "_pages_v_blocks_media_block_media_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_media_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_media_content_fields" ADD CONSTRAINT "_pages_v_blocks_media_content_fields_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_media_content_fields" ADD CONSTRAINT "_pages_v_blocks_media_content_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_media_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_media_content" ADD CONSTRAINT "_pages_v_blocks_media_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_profile_cta" ADD CONSTRAINT "_pages_v_blocks_profile_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_project_grid" ADD CONSTRAINT "_pages_v_blocks_project_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_content_content_fields" ADD CONSTRAINT "projects_blocks_content_content_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_content" ADD CONSTRAINT "projects_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_form" ADD CONSTRAINT "projects_blocks_form_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_form" ADD CONSTRAINT "projects_blocks_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_media_block_media_fields" ADD CONSTRAINT "projects_blocks_media_block_media_fields_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_media_block_media_fields" ADD CONSTRAINT "projects_blocks_media_block_media_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects_blocks_media_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_media_block" ADD CONSTRAINT "projects_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_media_content_fields" ADD CONSTRAINT "projects_blocks_media_content_fields_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_media_content_fields" ADD CONSTRAINT "projects_blocks_media_content_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects_blocks_media_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_media_content" ADD CONSTRAINT "projects_blocks_media_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_role" ADD CONSTRAINT "projects_role_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "technologies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_content_content_fields" ADD CONSTRAINT "_projects_v_blocks_content_content_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_content" ADD CONSTRAINT "_projects_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_form" ADD CONSTRAINT "_projects_v_blocks_form_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_form" ADD CONSTRAINT "_projects_v_blocks_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_media_block_media_fields" ADD CONSTRAINT "_projects_v_blocks_media_block_media_fields_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_media_block_media_fields" ADD CONSTRAINT "_projects_v_blocks_media_block_media_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v_blocks_media_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_media_block" ADD CONSTRAINT "_projects_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_media_content_fields" ADD CONSTRAINT "_projects_v_blocks_media_content_fields_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_media_content_fields" ADD CONSTRAINT "_projects_v_blocks_media_content_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v_blocks_media_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_media_content" ADD CONSTRAINT "_projects_v_blocks_media_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_version_role" ADD CONSTRAINT "_projects_v_version_role_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_parent_id_projects_id_fk" FOREIGN KEY ("parent_id") REFERENCES "projects"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "technologies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "form_submissions"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "header"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "header"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "profile" ADD CONSTRAINT "profile_profile_image_id_media_id_fk" FOREIGN KEY ("profile_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
 DROP TABLE "media";
DROP TABLE "pages_blocks_content_content_fields";
DROP TABLE "pages_blocks_content";
DROP TABLE "pages_blocks_form";
DROP TABLE "pages_blocks_media_block_media_fields";
DROP TABLE "pages_blocks_media_block";
DROP TABLE "pages_blocks_media_content_fields";
DROP TABLE "pages_blocks_media_content";
DROP TABLE "pages_blocks_profile_cta";
DROP TABLE "pages_blocks_project_grid";
DROP TABLE "pages";
DROP TABLE "pages_rels";
DROP TABLE "_pages_v_blocks_content_content_fields";
DROP TABLE "_pages_v_blocks_content";
DROP TABLE "_pages_v_blocks_form";
DROP TABLE "_pages_v_blocks_media_block_media_fields";
DROP TABLE "_pages_v_blocks_media_block";
DROP TABLE "_pages_v_blocks_media_content_fields";
DROP TABLE "_pages_v_blocks_media_content";
DROP TABLE "_pages_v_blocks_profile_cta";
DROP TABLE "_pages_v_blocks_project_grid";
DROP TABLE "_pages_v";
DROP TABLE "_pages_v_rels";
DROP TABLE "projects_blocks_content_content_fields";
DROP TABLE "projects_blocks_content";
DROP TABLE "projects_blocks_form";
DROP TABLE "projects_blocks_media_block_media_fields";
DROP TABLE "projects_blocks_media_block";
DROP TABLE "projects_blocks_media_content_fields";
DROP TABLE "projects_blocks_media_content";
DROP TABLE "projects_role";
DROP TABLE "projects";
DROP TABLE "projects_rels";
DROP TABLE "_projects_v_blocks_content_content_fields";
DROP TABLE "_projects_v_blocks_content";
DROP TABLE "_projects_v_blocks_form";
DROP TABLE "_projects_v_blocks_media_block_media_fields";
DROP TABLE "_projects_v_blocks_media_block";
DROP TABLE "_projects_v_blocks_media_content_fields";
DROP TABLE "_projects_v_blocks_media_content";
DROP TABLE "_projects_v_version_role";
DROP TABLE "_projects_v";
DROP TABLE "_projects_v_rels";
DROP TABLE "technologies";
DROP TABLE "users";
DROP TABLE "forms_blocks_email";
DROP TABLE "forms_blocks_message";
DROP TABLE "forms_blocks_text";
DROP TABLE "forms_blocks_textarea";
DROP TABLE "forms_emails";
DROP TABLE "forms";
DROP TABLE "form_submissions_submission_data";
DROP TABLE "form_submissions";
DROP TABLE "payload_preferences";
DROP TABLE "payload_preferences_rels";
DROP TABLE "payload_migrations";
DROP TABLE "header_nav_items";
DROP TABLE "header";
DROP TABLE "header_rels";
DROP TABLE "profile";`)
}
