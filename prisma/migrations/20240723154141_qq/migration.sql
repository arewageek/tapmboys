-- CreateTable
CREATE TABLE "TasksCompletion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "taskId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "reward" INTEGER NOT NULL,
    CONSTRAINT "TasksCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "TasksCompletion_id_key" ON "TasksCompletion"("id");
