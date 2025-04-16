/*
  Warnings:

  - Added the required column `recipientType` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- Drop existing Message table
DROP TABLE IF EXISTS "Message";

-- Create Message table with all fields
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "recipientType" TEXT,
    "language" TEXT,
    "confidence" DOUBLE PRECISION,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- First add the columns as nullable
ALTER TABLE "Message" ADD COLUMN IF NOT EXISTS "recipientType" TEXT;
ALTER TABLE "Message" ADD COLUMN IF NOT EXISTS "language" TEXT;
ALTER TABLE "Message" ADD COLUMN IF NOT EXISTS "confidence" DOUBLE PRECISION;

-- Update existing records with default values
UPDATE "Message" SET "recipientType" = 'both' WHERE "recipientType" IS NULL;

-- Make recipientType required
ALTER TABLE "Message" ALTER COLUMN "recipientType" SET NOT NULL;
