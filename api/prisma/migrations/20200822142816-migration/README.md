# Migration `20200822142816-migration`

This migration has been generated at 8/22/2020, 2:28:16 PM.
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
"result" TEXT ,
"userId" INTEGER ,
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
)

INSERT INTO "new_Post" ("id", "title", "description", "imageURL", "createdAt", "updatedAt", "userId", "effort", "result") SELECT "id", "title", "description", "imageURL", "createdAt", "updatedAt", "userId", "effort", "result" FROM "Post"

PRAGMA foreign_keys=off;
DROP TABLE "Post";;
PRAGMA foreign_keys=on

ALTER TABLE "new_Post" RENAME TO "Post";

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200822131844-migration..20200822142816-migration
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
   id              Int      @default(autoincrement()) @id
@@ -21,10 +21,8 @@
   title       String
   description String?
   imageURL    String
   createdAt   DateTime @default(now())
-  updatedAt   DateTime @default(now())
-  user        User?     @relation(fields: [userId], references: [id])
-  userId      Int?
+  updatedAt   DateTime @updatedAt
   effort      String?
   result      String?
 }
```


