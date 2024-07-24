/*
  Warnings:

  - You are about to alter the column `points` on the `Tasks` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "icon" TEXT NOT NULL
);
INSERT INTO "new_Tasks" ("category", "icon", "id", "name", "points") SELECT "category", "icon", "id", "name", "points" FROM "Tasks";
DROP TABLE "Tasks";
ALTER TABLE "new_Tasks" RENAME TO "Tasks";
CREATE UNIQUE INDEX "Tasks_id_key" ON "Tasks"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
