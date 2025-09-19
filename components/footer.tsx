import { Music, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Music className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Canciones con Acordes
            </span>
          </div>
          <p className="text-muted-foreground mb-4 text-lg">
            Tu sitio web para acordes de canciones y artículos musicales
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
            <span>&copy; 2024 Canciones con Acordes. Hecho con</span>
            <Heart className="h-4 w-4 text-secondary fill-current" />
            <span>para la comunidad musical</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
