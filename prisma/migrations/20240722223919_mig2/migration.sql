/*
  Warnings:

  - You are about to alter the column `count` on the `DailyBoosters` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DailyBoosters" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "icon" TEXT NOT NULL
);
INSERT INTO "new_DailyBoosters" ("count", "icon", "id", "name") SELECT "count", "icon", "id", "name" FROM "DailyBoosters";
DROP TABLE "DailyBoosters";
ALTER TABLE "new_DailyBoosters" RENAME TO "DailyBoosters";
CREATE UNIQUE INDEX "DailyBoosters_id_key" ON "DailyBoosters"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
