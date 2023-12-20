/*
  Warnings:

  - A unique constraint covering the columns `[cartId]` on the table `item` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cartId` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "item" ADD COLUMN     "cartId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "item_cartId_key" ON "item"("cartId");

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
