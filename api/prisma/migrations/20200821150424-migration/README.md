# Migration `20200821150424-migration`

This migration has been generated at 8/21/2020, 3:04:24 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "new_User" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"email" TEXT NOT NULL,
"hashedPassword" TEXT )

INSERT INTO "new_User" ("id", "email", "hashedPassword") SELECT "id", "email", "hashedPassword" FROM "User"

PRAGMA foreign_keys=off;
DROP TABLE "User";;
PRAGMA foreign_keys=on

ALTER TABLE "new_User" RENAME TO "User";

CREATE UNIQUE INDEX "User.email" ON "User"("email")

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200821150351-migration..20200821150424-migration
--- datamodel.dml
+++ datamodel.dml
@@ -4,16 +4,16 @@
 }
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 model User {
   id              Int      @default(autoincrement()) @id
   profile         Profile?
   email           String   @unique
-  hashedPassword  String
+  hashedPassword  String?
   post            Post[]
 }
 model Profile {
```


