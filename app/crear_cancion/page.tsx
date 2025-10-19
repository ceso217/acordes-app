"use client";

import { use } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { limpiarTexto, NuevoAutorModal } from "@/components/nuevo-autor-modal";
import React from "react";
import Select from "react-select";
import type { GroupBase } from "react-select";
import { toast } from "react-hot-toast";
import { Option } from "react-day-picker";

type Cancion = {
  titulo: string;
  autorId: number;
  letra: string;
  referencia: string;
};

type Autor = { id: number; nombre: string };
type Option = { value: number; label: string };

export default function CrearCancionesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm<Cancion>({
    mode: "onSubmit",
  });

  const handleAutorCreado = (autor: Autor) => {
    setOptions((prev) =>
      [...prev, { value: autor.id, label: autor.nombre }].sort((a, b) =>
        a.label.localeCompare(b.label)
      )
    );
  };

  async function traerCancionesAutor(autorId: number) {
    try {
      const res = await axios.get<Cancion[]>("/api/canciones");
      const cancionesFiltrados = (res.data ?? []).filter(
        (c) => c.autorId === autorId
      );
      return cancionesFiltrados;
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
  }

  const onSubmit = async (data: Cancion) => {
    console.log("Datos del formulario:", data);
    const canciones = (await traerCancionesAutor(data.autorId)) ?? [];
    if (
      canciones.some(
        (c) => limpiarTexto(c.titulo) === limpiarTexto(data.titulo)
      )
    ) {
      toast.error("Ya existe una canción de este autor/a con ese nombre.");
      return;
    }
    try {
      const res = await axios.post("/api/canciones", data);
      toast.success("Canción creada exitosamente!");
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
      toast.error("Ocurrió un error");
    }
  };

  useEffect(() => {
    let mounted = true;
    async function traerAutores() {
      try {
        const res = await axios.get<Autor[]>("/api/autores");
        if (!mounted) return;
        const autores = (res.data ?? []).map((a) => ({
          value: a.id,
          label: a.nombre,
        }));
        setOptions(autores.sort((a, b) => a.label.localeCompare(b.label)));
      } catch (err) {
        console.error("Error recuperando autores:", err);
      }
    }
    traerAutores();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="h-screen flex items-center bg-[#D7F5DC] ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center mx-10 p-9 pb-0 rounded-3xl w-full h-auto"
      >
        <div className="w-full text-xl">
          <label className="flex items-center">
            Título:
            <div className="flex-1 px-4">
              <input
                {...register("titulo", {
                  required: "El nombre de la canción es obligatorio",
                })}
                placeholder="Nombre de la canción"
                className="bg-white w-full h-10 rounded-3xl border border-gray-300 px-3"
                type="text"
              />
              {errors.titulo && (
                <p className="inline-block bg-red-500 rounded-4xl px-3 text-lg text-black translate-x-2 -translate-y-2 hover:text-xl transition-all">
                  {errors.titulo.message}
                </p>
              )}
            </div>
          </label>
        </div>
        <div className="my-3 w-full text-xl">
          <label className="flex items-center">
            Autor:
            <div className="w-full">
              <div className="flex">
                <Controller
                  name="autorId"
                  control={control}
                  rules={{ required: "El autor es obligatorio" }}
                  render={({ field }) => (
                    <Select<Option, false, GroupBase<Option>>
                      {...field}
                      options={options}
                      value={
                        options.find((o) => o.value === field.value) ?? null
                      }
                      onChange={(opt) => field.onChange(opt ? opt.value : null)}
                      placeholder="Selecciona un autor"
                      className="w-full mx-3 flex-1"
                      styles={{
                        control: (base) => ({
                          ...base,
                          borderRadius: "1.75rem",
                        }),
                        option: (base, state) => ({
                          ...base,
                          backgroundColor: state.isSelected
                            ? "#3b82f6"
                            : state.isFocused
                            ? "#e5e7eb"
                            : "white",
                          color: state.isSelected ? "white" : "black",
                        }),
                      }}
                    />
                  )}
                />
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-white rounded-4xl mr-4 px-3 border border-gray-300 hover:scale-110 hover:bg-green-400 hover:shadow-2xl transition-all duration-300"
                  type="button"
                >
                  Agregar un nuevo autor
                </button>
                <NuevoAutorModal
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                  onCreated={handleAutorCreado}
                />
              </div>
              {errors.autorId && (
                <p className="inline-block bg-red-500 rounded-4xl px-3 text-lg text-black translate-x-5 -translate-y-3 hover:text-xl transition-all">
                  {errors.autorId.message}
                </p>
              )}
            </div>
          </label>
        </div>
        <div className="my-2 w-full text-xl">
          <label className="flex">
            Letra:
            <div className="w-full px-4">
              <textarea
                {...register("letra", {
                  required: "La letra de la canción es obligatoria",
                })}
                placeholder="Letra y acordes"
                className="bg-white w-full rounded-3xl border border-gray-300 resize-none px-3 py-2"
                rows={8}
              />
              {errors.letra && (
                <p className="inline-block bg-red-500 rounded-4xl px-3 text-lg text-black translate-x-1 -translate-y-5 hover:text-xl transition-all">
                  {errors.letra.message}
                </p>
              )}
            </div>
          </label>
        </div>
        <div className="mt-2 w-full text-xl">
          <label className="flex items-center">
            Referencia:
            <input
              {...register("referencia")}
              placeholder="Referencia (opcional)"
              className="bg-white mx-4 w-full h-10 rounded-3xl border border-gray-300 px-3"
              type="text"
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="p-2 bg-sky-500 rounded-4xl m-6 hover:scale-105 hover:bg-sky-400 hover:shadow-2xl transition-all duration-300 text-xl"
        >
          Agregar canción
        </button>
      </form>
    </div>
  );
}
