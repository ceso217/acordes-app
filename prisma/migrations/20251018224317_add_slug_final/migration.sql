/*
  Warnings:

  - You are about to drop the column `nombre` on the `Cancion` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nombre]` on the table `Autor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Autor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[autorId,slug]` on the table `Cancion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Autor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Cancion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Cancion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Autor" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Cancion" DROP COLUMN "nombre",
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "titulo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Autor_nombre_key" ON "Autor"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Autor_slug_key" ON "Autor"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Cancion_autorId_slug_key" ON "Cancion"("autorId", "slug");
