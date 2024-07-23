/*
  Warnings:

  - You are about to drop the `Legues` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Legues";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Leagues" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "minEntry" INTEGER NOT NULL,
    "pointLimit" INTEGER NOT NULL,
    "trophy" TEXT NOT NULL,
    "entryReward" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Leagues_id_key" ON "Leagues"("id");
