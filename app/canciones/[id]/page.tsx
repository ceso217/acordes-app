"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { songs } from "@/lib/data"
import { ArrowLeft, Music } from "lucide-react"
import { use } from 'react'

type SongDetailPageProps = {
  params: Promise<{id: string}>;
};

export default function SongDetailPage({ params }: SongDetailPageProps) {
  const resolvedParams = use(params);
  const song = songs.find((s) => s.id === resolvedParams.id)

  if (!song) {
    notFound()
  }

  // Format lyrics to highlight chords
  const formatLyrics = (lyrics: string) => {
    return lyrics.split("\n").map((line, index) => {
      // Replace chord patterns [Chord] with styled spans
      const formattedLine = line.replace(/\[([^\]]+)\]/g, '<span class="chord">$1</span>')

      return (
        <div key={index} className="mb-2">
          <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
        </div>
      )
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button asChild variant="outline" className="mb-6 bg-transparent">
          <Link href="/acordes">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Acordes
          </Link>
        </Button>

        <div className="flex items-center gap-3 mb-4">
          <Music className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">{song.title}</h1>
            <p className="text-xl text-muted-foreground">por {song.artist}</p>
          </div>
        </div>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Letra con Acordes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-mono text-sm leading-relaxed whitespace-pre-line">
            <style jsx>{`
              .chord {
                color: #2563eb;
                font-weight: bold;
                font-size: 0.9em;
              }
            `}</style>
            {formatLyrics(song.lyrics)}
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          ¿Te gustó esta canción? Explora más acordes en nuestra colección.
        </p>
        <Button asChild>
          <Link href="/acordes">Ver Más Canciones</Link>
        </Button>
      </div>
    </div>
  )
}
