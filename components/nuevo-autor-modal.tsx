"use client";

import axios from "axios";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreated?: (autor: Autor) => void;
}

type Autor = {
  id: number;
  nombre: string;
};

export function limpiarTexto(texto: string): string {
  return texto
    .normalize("NFD") // separa letras y acentos
    .replace(/\p{Diacritic}/gu, "") // elimina los acentos
    .toLowerCase() // pasa todo a minúsculas
    .trim(); // quita espacios extras
}

export function NuevoAutorModal({ isOpen, onClose, onCreated }: ModalProps) {
  if (!isOpen) return null;

  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function obtenerAutores(): Promise<Autor[]> {
    try {
      const response = await axios.get<Autor[]>("/api/autores");
      return response.data ?? [];
    } catch (error) {
      console.error("Error al obtener los autores:", error);
      return [];
    }
  }

  async function handleCrearAutor(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);

    const nombreTrim = nombre.trim();
    if (!nombreTrim) {
      setError("El nombre es obligatorio.");
      return;
    }
    setLoading(true);

    try {
      const autores = await obtenerAutores();

      const existe = autores.some(
        (a) => limpiarTexto(a.nombre) === limpiarTexto(nombre)
      );

      if (existe) {
        setError("Este autor ya existe.");
        return;
      }

      const res = await axios.post<Autor>("/api/autores", {
        nombre: nombreTrim,
      });

      const nuevoAutor = res.data;

      if (onCreated) onCreated(nuevoAutor);
      onClose();
    } catch (err: any) {
      console.log("Error creando autor:", err);
      if (err?.response?.data?.message) {
        setError(String(err.response.data.message));
      } else {
        setError("Error de red. Intenta de nuevo.");
      }
    } finally {
      setLoading(false); // siempre deshabilitamos loading al final
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="flex flex-col items-center bg-[#D7F5DC] rounded-xl p-6 w-96 shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Agregar nuevo autor
        </h2>
        <label className="flex">
          Nombre:
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del autor"
            className="bg-white mx-4 w-full rounded-xl px-3"
            type="text"
            autoFocus
          />
          {error && (
            <p className="absolute bg-red-500 rounded-4xl px-3 text-sm translate-y-6 translate-x-24 text-black">
              {error}
            </p>
          )}
        </label>

        <div className="w-full flex justify-evenly">
          <button
            type="button"
            onClick={handleCrearAutor}
            disabled={loading}
            className="bg-green-600 px-3 mt-4 rounded-4xl text-white"
          >
            Agregar
          </button>
          <button
            type="button"
            onClick={() => {
              setError(null);
              setNombre("");
              onClose();
            }}
            className="bg-red-500 px-3 mt-4 text-white rounded-4xl"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
