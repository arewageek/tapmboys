-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TasksCompletion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "taskId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "reward" INTEGER NOT NULL
);
INSERT INTO "new_TasksCompletion" ("id", "reward", "taskId", "userId") SELECT "id", "reward", "taskId", "userId" FROM "TasksCompletion";
DROP TABLE "TasksCompletion";
ALTER TABLE "new_TasksCompletion" RENAME TO "TasksCompletion";
CREATE UNIQUE INDEX "TasksCompletion_id_key" ON "TasksCompletion"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
