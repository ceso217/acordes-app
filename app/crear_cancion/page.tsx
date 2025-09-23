"use client";

import { use } from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

type Form = { nombre: string, autor: string, letra: string, referencia: string };

export default function CrearCancionesPage() {
    const {register, handleSubmit, setError, formState: {errors, isSubmitting} } = useForm<Form>();
    
    const onSubmit = async (data:Form) => {
        try{
            const res = await axios.post("/api/canciones", data);

            console.log("Respuesta del servidor:", res.data);
        } catch(error: any) {
            if(error.response){
                setError()
            }

        }
    }
    
    return(
    <div className="h-screen flex items-center bg-[#385b3e] ">
        <div className="flex flex-col items-center mx-10 p-9 pb-0 bg-emerald-400 rounded-3xl w-full h-auto text-lg">
            <div className="my-2 w-full ">
                <label className="flex">
                    Nombre:
                    <input className="bg-white mx-4 w-full rounded-xl px-3" type="text"/>
                </label>
            </div>
            <div className="my-2 w-full">
                <label className="flex">
                    Autor:
                    <input className="bg-white mx-4 w-full rounded-xl" type="text"/>
                <button className="bg-white rounded-4xl px-3">+</button>
            </label>
            </div>
            <div className="my-2 w-full">
                <label className="flex ">
                    Letra:
                    <textarea className="bg-white mx-4 w-full rounded-xl resize-none" rows={8}/>
            </label>
            </div>
            <div className="mt-2 w-full">
                <label className="flex">
                    Referencia:
                    <input className="bg-white mx-4 w-full rounded-xl" type="text"/>
                </label>
            </div>
            <button type="submit" className="p-2 bg-green-500 rounded-4xl m-6">Agregar canción</button>
        </div>
    </div>
    )
}