import { SongCard } from "@/components/song-card"
import { songs } from "@/lib/data"
import { Music } from "lucide-react"

export default function CancionesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Music className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Acordes de Canciones</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Descubre nuestra colección de canciones con acordes bien formateados. Haz clic en cualquier canción para ver
          la letra completa con acordes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((song) => (
          <SongCard key={song.id} id={song.id} title={song.title} artist={song.artist} />
        ))}
      </div>
    </div>
  )
}
