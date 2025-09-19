import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Play } from "lucide-react"

interface SongCardProps {
  id: string
  title: string
  artist: string
}

export function SongCard({ id, title, artist }: SongCardProps) {
  return (
    <Link href={`/acordes/${id}`}>
      <Card className="gradient-card border-0 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer overflow-hidden">
        <CardHeader className="pb-3 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">{title}</CardTitle>
            </div>
            <Play className="h-5 w-5 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-200" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-lg">
            por <span className="font-medium">{artist}</span>
          </p>
          <div className="mt-3 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </CardContent>
      </Card>
    </Link>
  )
}
