import { ArticleCard } from "@/components/article-card"
import { articles } from "@/lib/data"
import { BookOpen } from "lucide-react"

export default function LecturasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <BookOpen className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Artículos Musicales</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Aprende teoría musical, técnicas de guitarra y consejos prácticos con nuestros artículos escritos por expertos
          músicos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            author={article.author}
            excerpt={article.excerpt}
          />
        ))}
      </div>
    </div>
  )
}
