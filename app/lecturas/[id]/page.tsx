import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { articles } from "@/lib/data"
import { ArrowLeft, BookOpen, Calendar, User } from "lucide-react"

interface ArticleDetailPageProps {
  params: {
    id: string
  }
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const article = articles.find((a) => a.id === params.id)

  if (!article) {
    notFound()
  }

  // Format content to handle markdown-like formatting
  const formatContent = (content: string) => {
    return content.split("\n").map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
            {paragraph.replace("## ", "")}
          </h2>
        )
      }
      if (paragraph.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
            {paragraph.replace("### ", "")}
          </h3>
        )
      }
      if (paragraph.startsWith("- **")) {
        return (
          <li key={index} className="mb-2">
            <span
              dangerouslySetInnerHTML={{
                __html: paragraph.replace("- **", "<strong>").replace("**:", ":</strong>"),
              }}
            />
          </li>
        )
      }
      if (paragraph.startsWith("- ")) {
        return (
          <li key={index} className="mb-1">
            {paragraph.replace("- ", "")}
          </li>
        )
      }
      if (paragraph.trim() === "") {
        return <br key={index} />
      }

      // Handle bold text
      const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

      return <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: formattedParagraph }} />
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button asChild variant="outline" className="mb-6 bg-transparent">
          <Link href="/articulos">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Artículos
          </Link>
        </Button>

        <div className="flex items-start gap-4 mb-6">
          <BookOpen className="h-8 w-8 text-primary mt-1" />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-3">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(article.publishedAt).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardContent className="pt-6">
          <div className="prose prose-gray max-w-none">{formatContent(article.content)}</div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground mb-4">¿Te gustó este artículo? Descubre más contenido educativo.</p>
        <Button asChild>
          <Link href="/articulos">Ver Más Artículos</Link>
        </Button>
      </div>
    </div>
  )
}