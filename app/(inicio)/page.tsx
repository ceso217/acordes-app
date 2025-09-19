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
      {/*<div className="m-4 p-4 bg-lime-300 border-2 border-teal-700 rounded-3xl h-40">hola amigos de yt</div>*/}
      {/*<div className=" text-white py-20  bg-[#EDDEE0]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Guitar className="h-20 w-20 text-[#36445D] float-animation" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg text-sky-900">Canciones con Acordes</h1>
          <input   placeholder="Buscar canción" 
          className="bg-white w-xl border border-black rounded-4xl mb-6 px-3 py-2 focus:outline-none text-black"/>

          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Tu sitio web definitivo para encontrar acordes de canciones y aprender teoría musical. Descubre una amplia
            colección de canciones con acordes bien formateados y artículos educativos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/acordes">
                <Music className="mr-2 h-5 w-5" />
                Explorar Acordes
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary shadow-lg transform hover:scale-105 transition-all duration-200 bg-transparent"
            >
              <Link href="/articulos">
                <BookOpen className="mr-2 h-5 w-5" />
                Lecturas recomendadas
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="gradient-card border-0 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Acordes de Canciones</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Encuentra acordes de tus canciones favoritas con formato claro y fácil de leer. Perfectos para
                guitarristas de todos los niveles.
              </p>
              <Button asChild className="bg-secondary hover:bg-secondary/90 shadow-md">
                <Link href="/acordes">Ver Canciones</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="gradient-card border-0 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Artículos Musicales</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Aprende teoría musical, técnicas de guitarra y consejos prácticos con nuestros artículos escritos por
                expertos.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 shadow-md">
                <Link href="/articulos">Lecturas recomendadas</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>*/}
    </div>
  )
}
