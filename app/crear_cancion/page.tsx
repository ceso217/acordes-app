export default function CrearCancionesPage() {
    return(
    <div className="h-screen flex items-center bg-[#D7F5DC] ">
        <div className="flex flex-col items-center m-auto my-20 p-9 bg-amber-200 rounded-3xl w-1/2 h-1/2 text-lg">
            <div className="my-2 w-full ">
                <label className="flex">
                    Título:
                    <input className="bg-white mx-4 w-full rounded-xl px-3" type="text"/>
                </label>
            </div>
            <div className="my-2 w-full">
                <label className="flex">
                Autor:
                <input className="bg-white mx-4 w-full rounded-xl" type="text"/>
            </label>
            </div>
            <div className="my-2 w-full">
                <label className="flex ">
                Canción:
                <textarea className="bg-white mx-4 w-full rounded-xl resize-none" rows={4}/>
            </label>
            </div>
            <div className="my-2 w-full">
                <label className="flex">
                Referencia:
                <input className="bg-white mx-4 w-full rounded-xl" type="text"/>
                </label>
            </div>
            <button type="submit" className="p-2 bg-green-500 rounded-4xl">Agregar canción</button>
        </div>
    </div>
        
    )
}