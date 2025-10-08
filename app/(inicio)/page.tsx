import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, BookOpen, Guitar, Star, Users, Award } from "lucide-react"
import { corinthia, cormorant, montserrat } from "../../components/ui/fonts";
import { ArticleCard } from "@/components/article-card"
import { articles } from "@/lib/data"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#D7F5DC] text-black">
      <div className="py-28 px-10 text-center bg-[#D7F5DC] " style={montserrat.style}>
        <h1 className="text-5xl mb-10" >Quienes somos?</h1>
        <p className="text-2xl my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi accusamus ullam, error tenetur, iure adipisci maxime perspiciatis expedita consequuntur debitis. Reprehenderit consequuntur aliquam itaque deleniti porro soluta quisquam eum.</p>
      </div>
      <div className="p-10 bg-sky-700 " style={montserrat.style}>
        <h1 className="text-4xl">Últimas lecturas recomendadas</h1>
        <div className="my-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  )
}
