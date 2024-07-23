-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "chatId" TEXT NOT NULL,
    "taps" INTEGER NOT NULL DEFAULT 0,
    "points" INTEGER NOT NULL DEFAULT 0,
    "bonus" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "skin" TEXT NOT NULL DEFAULT '/assets/image/space-bg.avif',
    "lastLogin" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "referredBy" TEXT DEFAULT 'admin',
    "referralLink" TEXT,
    "league" TEXT DEFAULT 'beginner',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("active", "bonus", "chatId", "createdAt", "id", "lastLogin", "league", "name", "points", "referralLink", "referredBy", "taps", "updatedAt") SELECT "active", "bonus", "chatId", "createdAt", "id", "lastLogin", "league", "name", "points", "referralLink", "referredBy", "taps", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_chatId_key" ON "User"("chatId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
