import Link from "next/link";
import { Music, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-teal-700 backdrop-blur shadow-sm">
      <div className="container mx-auto px-4 h-18 flex justify-between items-center ">
        <div className="flex">
          <Link
            href="/"
            className="justify-self-start flex items-center gap-3 group"
          >
            <div className="p-2 bg-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <Music className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl from-primary to-accent bg-clip-text text-white">
              Nuestras canciones
            </span>
          </Link>
          <input
            placeholder="Buscar por canción o artista"
            className="bg-white w-xl  rounded-4xl mx-2 px-3 py-2 focus:outline-none text-black"
          />
          <Search />
        </div>

        {/* Menú */}
        <div className="flex items-center gap-8 text-white">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors relative group py-2"
          >
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
          </Link>

          <Link
            href="/canciones"
            className="text-sm font-medium hover:text-primary transition-colors relative group py-2"
          >
            Canciones
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
          </Link>

          <Link
            href="/lecturas"
            className="text-sm font-medium hover:text-primary transition-colors relative group py-2"
          >
            Lecturas
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
          </Link>

          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-md"
          >
            <Link href="/login">
              <User className="h-4 w-4 mr-2" />
              Iniciar Sesión
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
