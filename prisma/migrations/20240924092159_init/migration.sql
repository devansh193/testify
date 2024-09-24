/*
  Warnings:

  - You are about to drop the column `nmame` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "nmame",
ADD COLUMN     "name" TEXT;
