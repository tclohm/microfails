# Migration `20200821171749-migration`

This migration has been generated at 8/21/2020, 5:17:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200821150424-migration..20200821171749-migration
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
@@ -36,9 +36,9 @@
 model Tag {
   id   Int    @id @default(autoincrement())
   name String
-  Post Post[] @relation(references: [id])
+  post Post[] @relation(references: [id])
 }
 model RW_DataMigration {
   version    String   @id
```


