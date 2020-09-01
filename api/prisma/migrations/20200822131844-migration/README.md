# Migration `20200822131844-migration`

This migration has been generated at 8/22/2020, 1:18:44 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "User" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"email" TEXT NOT NULL,
"username" TEXT NOT NULL,
"password" TEXT )

CREATE TABLE "Post" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"title" TEXT NOT NULL,
"description" TEXT ,
"imageURL" TEXT NOT NULL,
"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
"userId" INTEGER ,
"effort" TEXT ,
"result" TEXT ,
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
)

CREATE UNIQUE INDEX "User.email" ON "User"("email")

CREATE UNIQUE INDEX "User.username" ON "User"("username")

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200822131844-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,30 @@
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
+  id              Int      @default(autoincrement()) @id
+  email           String   @unique
+  username        String   @unique
+  password        String?
+  post            Post[]
+}
+
+model Post {
+  id          Int      @id @default(autoincrement())
+  title       String
+  description String?
+  imageURL    String
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @default(now())
+  user        User?     @relation(fields: [userId], references: [id])
+  userId      Int?
+  effort      String?
+  result      String?
+}
```


