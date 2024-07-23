-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Skins" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "profitPerHour" INTEGER DEFAULT 0,
    "image" TEXT NOT NULL DEFAULT '/assets/images/space-bg.avif',
    "cost" INTEGER NOT NULL,
    "league" TEXT NOT NULL DEFAULT 'pilot'
);
INSERT INTO "new_Skins" ("cost", "id", "image", "league", "name", "profitPerHour") SELECT "cost", "id", "image", "league", "name", "profitPerHour" FROM "Skins";
DROP TABLE "Skins";
ALTER TABLE "new_Skins" RENAME TO "Skins";
CREATE UNIQUE INDEX "Skins_id_key" ON "Skins"("id");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "chatId" TEXT NOT NULL,
    "taps" INTEGER NOT NULL DEFAULT 0,
    "points" INTEGER NOT NULL DEFAULT 0,
    "rechargeLimit" INTEGER NOT NULL DEFAULT 500,
    "pointPerTap" INTEGER NOT NULL DEFAULT 1,
    "refillRate" INTEGER NOT NULL DEFAULT 1,
    "bonus" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "skin" TEXT NOT NULL DEFAULT '/assets/images/space-bg.avif',
    "lastLogin" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "referredBy" TEXT DEFAULT 'admin',
    "referralLink" TEXT,
    "league" TEXT DEFAULT 'beginner',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("active", "bonus", "chatId", "createdAt", "id", "lastLogin", "league", "name", "points", "referralLink", "referredBy", "skin", "taps", "updatedAt") SELECT "active", "bonus", "chatId", "createdAt", "id", "lastLogin", "league", "name", "points", "referralLink", "referredBy", "skin", "taps", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_chatId_key" ON "User"("chatId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
