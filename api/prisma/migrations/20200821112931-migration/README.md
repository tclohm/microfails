# Migration `20200821112931-migration`

This migration has been generated at 8/21/2020, 11:29:32 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "User" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT)

CREATE TABLE "Profile" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"userId" INTEGER NOT NULL,
"name" TEXT NOT NULL,
"username" TEXT NOT NULL,
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE "Post" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"userId" INTEGER NOT NULL,
"title" TEXT NOT NULL,
"description" TEXT ,
"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE "Tag" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT)

CREATE TABLE "RW_DataMigration" (
"version" TEXT NOT NULL,
"name" TEXT NOT NULL,
"startedAt" DATE NOT NULL,
"finishedAt" DATE NOT NULL,
PRIMARY KEY ("version"))

CREATE TABLE "_PostToTag" (
"A" INTEGER NOT NULL,
"B" INTEGER NOT NULL,
FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE,

FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE UNIQUE INDEX "Profile.userId" ON "Profile"("userId")

CREATE UNIQUE INDEX "Profile.username" ON "Profile"("username")

CREATE UNIQUE INDEX "_PostToTag_AB_unique" ON "_PostToTag"("A","B")

CREATE  INDEX "_PostToTag_B_index" ON "_PostToTag"("B")

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200821112931-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,45 @@
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = ["native"]
+}
+
+datasource DS {
+  provider = "sqlite"
+  url = "***"
+}
+
+model User {
+  id      Int      @default(autoincrement()) @id
+  profile Profile?
+  post    Post[]
+}
+
+model Profile {
+  id       Int    @default(autoincrement()) @id
+  userId   Int    @unique
+  name     String
+  username String @unique
+  user     User   @relation(fields: [userId], references: [id])
+}
+
+model Post {
+  id          Int      @default(autoincrement()) @id
+  userId      Int
+  title       String
+  description String?
+  createdAt   DateTime @default(now())
+  user        User     @relation(fields: [userId], references: [id])
+  tag         Tag[]    @relation(references: [id])
+}
+
+model Tag {
+  id   Int    @default(autoincrement()) @id
+  Post Post[] @relation(references: [id])
+}
+
+model RW_DataMigration {
+  version    String   @id
+  name       String
+  startedAt  DateTime
+  finishedAt DateTime
+}
```


