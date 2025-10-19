"use client";

import { SongCard } from "@/components/song-card";
import { songs } from "@/lib/data";
import { Autor } from "@prisma/client";
import axios from "axios";
import { Music } from "lucide-react";
import { useEffect, useState } from "react";

export default function CancionesPage() {
  const [autores, setAutores] = useState<Autor[]>([]);

  useEffect(() => {
    async function traerAutores() {
      try {
        const res = await axios.get("/api/autores");
        setAutores(res.data);
      } catch (error: any) {
        console.error("Error al traer autores:", error);
      }
    }
    traerAutores();
  }, []);
  return (
    <div className="flex flex-col items-center mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Music className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Canciones de los artistas</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Descubre nuestra colección de canciones con acordes. Haz clic en
          cualquier artista para ver sus canciones.
        </p>
      </div>
      <div className="">
        {autores
          .sort((a, b) => a.nombre.localeCompare(b.nombre))
          .map((autor) => (
            <a href="">{autor.nombre} </a>
          ))}
      </div>
    </div>
  );
}
