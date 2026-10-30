-- CreateTable
CREATE TABLE "gallery" (
    "id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,
    "caption" TEXT,
    "program_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gallery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "gallery_program_id_idx" ON "gallery"("program_id");

-- CreateIndex
CREATE INDEX "gallery_created_at_idx" ON "gallery"("created_at");

-- AddForeignKey
ALTER TABLE "gallery" ADD CONSTRAINT "gallery_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "programs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
