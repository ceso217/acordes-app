"use client";

import { use } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { NuevoAutorModal } from "@/components/nuevo-autor-modal";

type Cancion = {
  nombre: string;
  autor: string;
  letra: string;
  referencia: string;
};

export default function CrearCancionesPage() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Cancion>({
    mode: "onSubmit",
  });

  const onSubmit = async (data: Cancion) => {
    try {
      const res = await axios.post("/api/canciones", data);
      reset();
      console.log("Canción guardada:", res.data);
    } catch (error: any) {
      if (error.response) {
        setError("root", {
          type: "server",
          message: error.response.data.message || "Error del servidor",
        });
      } else {
        setError("root", {
          type: "server",
          message: "Error de red",
        });
      }
    }
  };

  useEffect(() => {});

  return (
    <div className="h-screen flex items-center bg-[#D7F5DC] ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center mx-10 p-9 pb-0 rounded-3xl w-full h-auto text-lg"
      >
        <div className="w-full">
          <label className="flex">
            Nombre:
            <div className="flex-1 px-4">
              <input
                {...register("nombre", {
                  required: "El nombre de la canción es obligatorio",
                })}
                placeholder="Nombre de la canción"
                className="bg-white w-full rounded-xl px-3"
                type="text"
              />
              {errors.nombre && (
                <p className="inline-block bg-red-500 rounded-4xl px-3 text-sm text-black translate-x-2 -translate-y-2 hover:text-lg transition-all">
                  {errors.nombre.message}
                </p>
              )}
            </div>
          </label>
        </div>
        <div className="my-3 w-full">
          <label className="flex">
            Autor:
            <div className="w-full">
              <div className="flex">
                <input
                  {...register("autor", {
                    required: "El autor es obligatorio",
                  })}
                  placeholder="Autor"
                  className="bg-white flex-1 mx-4 rounded-xl px-3"
                  type="text"
                />
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-white rounded-4xl mr-4 px-3 hover:scale-110 hover:bg-green-400 hover:shadow-2xl transition-all duration-300"
                  type="button"
                >
                  +
                </button>
                <NuevoAutorModal
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                />
              </div>
              {errors.autor && (
                <p className="inline-block bg-red-500 rounded-4xl px-3 text-sm text-black translate-x-6 -translate-y-2 hover:text-lg transition-all">
                  {errors.autor.message}
                </p>
              )}
            </div>
          </label>
        </div>
        <div className="my-2 w-full">
          <label className="flex">
            Letra:
            <div className="w-full px-4">
              <textarea
                {...register("letra", {
                  required: "La letra de la canción es obligatoria",
                })}
                placeholder="Letra y acordes"
                className="bg-white w-full rounded-xl resize-none px-3"
                rows={8}
              />
              {errors.letra && (
                <p className="inline-block bg-red-500 rounded-4xl px-3 text-sm text-black translate-x-1 -translate-y-5 hover:text-lg transition-all">
                  {errors.letra.message}
                </p>
              )}
            </div>
          </label>
        </div>
        <div className="mt-2 w-full">
          <label className="flex">
            Referencia:
            <input
              {...register("referencia")}
              placeholder="Referencia (opcional)"
              className="bg-white mx-4 w-full rounded-xl px-3"
              type="text"
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="p-2 bg-sky-500 rounded-4xl m-6 hover:scale-105 hover:bg-sky-400 hover:shadow-2xl transition-all duration-300"
        >
          Agregar canción
        </button>
      </form>
    </div>
  );
}
