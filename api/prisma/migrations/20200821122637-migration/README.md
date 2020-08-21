# Migration `20200821122637-migration`

This migration has been generated at 8/21/2020, 12:26:37 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "new_Tag" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"name" TEXT NOT NULL)

INSERT INTO "new_Tag" ("id") SELECT "id" FROM "Tag"

PRAGMA foreign_keys=off;
DROP TABLE "Tag";;
PRAGMA foreign_keys=on

ALTER TABLE "new_Tag" RENAME TO "Tag";

CREATE TABLE "new_Profile" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"name" TEXT NOT NULL,
"username" TEXT NOT NULL,
"userId" INTEGER NOT NULL,
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

INSERT INTO "new_Profile" ("id", "userId", "name", "username") SELECT "id", "userId", "name", "username" FROM "Profile"

PRAGMA foreign_keys=off;
DROP TABLE "Profile";;
PRAGMA foreign_keys=on

ALTER TABLE "new_Profile" RENAME TO "Profile";

CREATE UNIQUE INDEX "Profile.username" ON "Profile"("username")

CREATE UNIQUE INDEX "Profile_userId" ON "Profile"("userId")

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200821112931-migration..20200821122637-migration
--- datamodel.dml
+++ datamodel.dml
@@ -4,9 +4,9 @@
 }
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 model User {
   id      Int      @default(autoincrement()) @id
@@ -15,26 +15,27 @@
 }
 model Profile {
   id       Int    @default(autoincrement()) @id
-  userId   Int    @unique
   name     String
   username String @unique
   user     User   @relation(fields: [userId], references: [id])
+  userId   Int
 }
 model Post {
-  id          Int      @default(autoincrement()) @id
-  userId      Int
+  id          Int      @id @default(autoincrement())
   title       String
   description String?
   createdAt   DateTime @default(now())
   user        User     @relation(fields: [userId], references: [id])
+  userId      Int
   tag         Tag[]    @relation(references: [id])
 }
 model Tag {
-  id   Int    @default(autoincrement()) @id
+  id   Int    @id @default(autoincrement())
+  name String
   Post Post[] @relation(references: [id])
 }
 model RW_DataMigration {
```


