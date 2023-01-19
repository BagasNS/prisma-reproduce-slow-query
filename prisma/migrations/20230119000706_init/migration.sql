-- CreateEnum
CREATE TYPE "LevelDukungan" AS ENUM ('A', 'B', 'C', 'D');

-- CreateTable
CREATE TABLE "accounts" (
    "id_account" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id_account")
);

-- CreateTable
CREATE TABLE "calon" (
    "id_calon" TEXT NOT NULL,
    "id_account" TEXT NOT NULL,

    CONSTRAINT "calon_pkey" PRIMARY KEY ("id_calon")
);

-- CreateTable
CREATE TABLE "pemilih" (
    "id_pemilih" TEXT NOT NULL,
    "id_account" TEXT NOT NULL,

    CONSTRAINT "pemilih_pkey" PRIMARY KEY ("id_pemilih")
);

-- CreateTable
CREATE TABLE "surveyor" (
    "id_surveyor" TEXT NOT NULL,
    "id_account" TEXT NOT NULL,

    CONSTRAINT "surveyor_pkey" PRIMARY KEY ("id_surveyor")
);

-- CreateTable
CREATE TABLE "dukungan" (
    "id_dukungan" TEXT NOT NULL,
    "id_pemilih" TEXT NOT NULL,
    "id_surveyor" TEXT NOT NULL,
    "level_dukungan" "LevelDukungan" NOT NULL,
    "id_calon" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dukungan_pkey" PRIMARY KEY ("id_dukungan")
);

-- CreateIndex
CREATE UNIQUE INDEX "calon_id_account_key" ON "calon"("id_account");

-- CreateIndex
CREATE UNIQUE INDEX "pemilih_id_account_key" ON "pemilih"("id_account");

-- CreateIndex
CREATE UNIQUE INDEX "surveyor_id_account_key" ON "surveyor"("id_account");

-- CreateIndex
CREATE UNIQUE INDEX "dukungan_id_pemilih_level_dukungan_id_calon_key" ON "dukungan"("id_pemilih", "level_dukungan", "id_calon");

-- AddForeignKey
ALTER TABLE "calon" ADD CONSTRAINT "calon_id_account_fkey" FOREIGN KEY ("id_account") REFERENCES "accounts"("id_account") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pemilih" ADD CONSTRAINT "pemilih_id_account_fkey" FOREIGN KEY ("id_account") REFERENCES "accounts"("id_account") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "surveyor" ADD CONSTRAINT "surveyor_id_account_fkey" FOREIGN KEY ("id_account") REFERENCES "accounts"("id_account") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dukungan" ADD CONSTRAINT "dukungan_id_pemilih_fkey" FOREIGN KEY ("id_pemilih") REFERENCES "pemilih"("id_pemilih") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dukungan" ADD CONSTRAINT "dukungan_id_surveyor_fkey" FOREIGN KEY ("id_surveyor") REFERENCES "surveyor"("id_surveyor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dukungan" ADD CONSTRAINT "dukungan_id_calon_fkey" FOREIGN KEY ("id_calon") REFERENCES "calon"("id_calon") ON DELETE RESTRICT ON UPDATE CASCADE;
