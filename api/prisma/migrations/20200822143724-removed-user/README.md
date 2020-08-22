# Migration `20200822143724-removed-user`

This migration has been generated at 8/22/2020, 2:37:24 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "new_Post" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"title" TEXT NOT NULL,
"description" TEXT ,
"imageURL" TEXT NOT NULL,
"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" DATE NOT NULL,
"effort" TEXT ,
"result" TEXT )

INSERT INTO "new_Post" ("id", "title", "description", "imageURL", "createdAt", "updatedAt", "effort", "result") SELECT "id", "title", "description", "imageURL", "createdAt", "updatedAt", "effort", "result" FROM "Post"

PRAGMA foreign_keys=off;
DROP TABLE "Post";;
PRAGMA foreign_keys=on

ALTER TABLE "new_Post" RENAME TO "Post";

PRAGMA foreign_keys=off;
DROP TABLE "User";;
PRAGMA foreign_keys=on

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200822142816-migration..20200822143724-removed-user
--- datamodel.dml
+++ datamodel.dml
@@ -4,19 +4,11 @@
 }
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
-model User {
-  id              Int      @default(autoincrement()) @id
-  email           String   @unique
-  username        String   @unique
-  password        String?
-  post            Post[]
-}
-
 model Post {
   id          Int      @id @default(autoincrement())
   title       String
   description String?
```


