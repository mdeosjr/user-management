/*
  Warnings:

  - You are about to drop the column `neighbourhood` on the `address` table. All the data in the column will be lost.
  - Added the required column `neighborhood` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "address" DROP COLUMN "neighbourhood",
ADD COLUMN     "neighborhood" TEXT NOT NULL;
