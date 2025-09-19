import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ArrowRight } from "lucide-react"

interface ArticleCardProps {
  id: string
  title: string
  author: string
  excerpt: string
}

export function ArticleCard({ id, title, author, excerpt }: ArticleCardProps) {
  return (
    <Link href={`/articulos/${id}`}>
      <Card className="gradient-card border-0 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer overflow-hidden">
        <CardHeader className="pb-3 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-200">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-xl group-hover:text-accent transition-colors duration-200">{title}</CardTitle>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all duration-200" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm mb-3">
            por <span className="font-medium">{author}</span>
          </p>
          <p className="text-sm line-clamp-2 leading-relaxed mb-3">{excerpt}</p>
          <div className="h-1 bg-gradient-to-r from-accent via-secondary to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </CardContent>
      </Card>
    </Link>
  )
}
