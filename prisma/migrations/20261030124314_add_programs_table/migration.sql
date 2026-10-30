-- CreateEnum
CREATE TYPE "Division" AS ENUM ('BPH', 'PSDM', 'LITBANG', 'MULKOMINFO', 'OLSEN', 'UM', 'HUMAS', 'ROHIS', 'ROHKRIS', 'ROHBUD');

-- CreateTable
CREATE TABLE "programs" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "is_as_committee" BOOLEAN NOT NULL DEFAULT false,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "division_in_charge" "Division" NOT NULL,
    "cover" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "programs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "programs_slug_key" ON "programs"("slug");

-- CreateIndex
CREATE INDEX "programs_division_in_charge_idx" ON "programs"("division_in_charge");

-- CreateIndex
CREATE INDEX "programs_is_featured_idx" ON "programs"("is_featured");
