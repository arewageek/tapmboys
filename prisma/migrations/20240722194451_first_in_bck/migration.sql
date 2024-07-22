/*
  Warnings:

  - Made the column `points` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "Skins" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "profitPerHour" INTEGER DEFAULT 0,
    "image" TEXT NOT NULL DEFAULT '/assets/image/space-bg.avif',
    "cost" INTEGER NOT NULL,
    "league" TEXT NOT NULL DEFAULT 'pilot'
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "chatId" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "lastLogin" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "referredBy" TEXT DEFAULT 'admin',
    "referralLink" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("active", "chatId", "createdAt", "id", "lastLogin", "name", "points", "referralLink", "referredBy", "updatedAt") SELECT "active", "chatId", "createdAt", "id", "lastLogin", "name", "points", "referralLink", "referredBy", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_chatId_key" ON "User"("chatId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Skins_id_key" ON "Skins"("id");
