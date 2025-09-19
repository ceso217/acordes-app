-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Autor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Cancion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "letra" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,
    "autorId" INTEGER NOT NULL,

    CONSTRAINT "Cancion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lectura" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "texto" TEXT NOT NULL,

    CONSTRAINT "Lectura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_CancionToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CancionToUsuario_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CancionToUsuario_B_index" ON "public"."_CancionToUsuario"("B");

-- AddForeignKey
ALTER TABLE "public"."Cancion" ADD CONSTRAINT "Cancion_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "public"."Autor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_CancionToUsuario" ADD CONSTRAINT "_CancionToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Cancion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_CancionToUsuario" ADD CONSTRAINT "_CancionToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
