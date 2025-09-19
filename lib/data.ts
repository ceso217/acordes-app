export interface Song {
  id: string
  title: string
  artist: string
  lyrics: string
}

export interface Article {
  id: string
  title: string
  author: string
  excerpt: string
  content: string
  publishedAt: string
}

export const songs: Song[] = [
  {
    id: "1",
    title: "Canción de Ejemplo",
    artist: "Artista Demo",
    lyrics: `[Am]Esta es una canción de [F]ejemplo
[C]Con acordes bien [G]formateados
[Am]Para mostrar cómo se [F]ve
[C]El formato de [G]acordes

[Am]Verso dos con más [F]acordes
[C]Siguiendo el mismo [G]patrón
[Am]Fácil de [F]leer
[C]Y de [G]tocar`,
  },
  {
    id: "2",
    title: "Melodía Simple",
    artist: "Compositor Ficticio",
    lyrics: `[G]Una melodía muy [D]simple
[Em]Para principiantes en [C]guitarra
[G]Solo cuatro [D]acordes
[Em]Fáciles de [C]tocar

[G]Estribillo con los [D]mismos
[Em]Acordes que el [C]verso
[G]Repetición y [D]práctica
[Em]Es la [C]clave`,
  },
  {
    id: "3",
    title: "Balada Acústica",
    artist: "Músico Ejemplo",
    lyrics: `[Dm]Una balada [Am]suave
[Bb]Con acordes [F]menores
[Dm]Que transmite [Am]emociones
[Bb]Profundas del [F]corazón

[Gm]El puente cambia [Dm]el tono
[A]Añadiendo [Dm]tensión
[Gm]Antes de [A]volver
[Dm]Al tema principal`,
  },
]

export const articles: Article[] = [
  {
    id: "1",
    title: "Introducción a los Acordes Básicos",
    author: "María González",
    excerpt:
      "Aprende los acordes fundamentales que todo guitarrista debe conocer para empezar a tocar sus canciones favoritas.",
    content: `Los acordes básicos son la base de la mayoría de canciones populares. En este artículo aprenderás los acordes más importantes para comenzar tu viaje musical.

## Acordes Mayores Básicos

Los acordes mayores tienen un sonido alegre y brillante. Los más importantes son:

- **Do Mayor (C)**: Uno de los acordes más fáciles de tocar
- **Re Mayor (D)**: Fundamental en muchas progresiones
- **Mi Mayor (E)**: Acorde abierto muy común
- **Fa Mayor (F)**: Requiere cejilla, pero es esencial
- **Sol Mayor (G)**: Acorde abierto muy utilizado
- **La Mayor (A)**: Perfecto para principiantes
- **Si Mayor (B)**: Más avanzado, pero muy útil

## Acordes Menores Básicos

Los acordes menores tienen un sonido más melancólico:

- **La menor (Am)**: El acorde menor más fácil
- **Re menor (Dm)**: Muy expresivo
- **Mi menor (Em)**: Solo requiere dos dedos

## Progresiones Comunes

Una vez que domines estos acordes, puedes tocar miles de canciones usando progresiones como:
- I-V-vi-IV (C-G-Am-F)
- vi-IV-I-V (Am-F-C-G)

¡Practica estos acordes diariamente y pronto estarás tocando tus canciones favoritas!`,
    publishedAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Teoría Musical para Guitarristas",
    author: "Carlos Rodríguez",
    excerpt:
      "Conceptos básicos de teoría musical aplicados específicamente a la guitarra, incluyendo escalas, intervalos y construcción de acordes.",
    content: `La teoría musical puede parecer intimidante, pero es una herramienta poderosa que te ayudará a entender mejor la música y mejorar como guitarrista.

## Las Notas Musicales

El sistema musical occidental usa 12 notas diferentes:
C - C# - D - D# - E - F - F# - G - G# - A - A# - B

## Intervalos

Los intervalos son la distancia entre dos notas:
- **Unísono**: 0 semitonos
- **Segunda menor**: 1 semitono
- **Segunda mayor**: 2 semitonos
- **Tercera menor**: 3 semitonos
- **Tercera mayor**: 4 semitonos
- **Cuarta justa**: 5 semitonos
- **Tritono**: 6 semitonos
- **Quinta justa**: 7 semitonos

## Construcción de Acordes

Los acordes se construyen usando intervalos específicos:
- **Acorde Mayor**: Fundamental + Tercera Mayor + Quinta Justa
- **Acorde Menor**: Fundamental + Tercera Menor + Quinta Justa
- **Acorde Séptima**: Acorde básico + Séptima

## Escalas Básicas

- **Escala Mayor**: Do-Re-Mi-Fa-Sol-La-Si
- **Escala Menor Natural**: La-Si-Do-Re-Mi-Fa-Sol
- **Escala Pentatónica**: Muy útil para improvisación

Entender estos conceptos te dará las herramientas para crear tu propia música y entender mejor las canciones que tocas.`,
    publishedAt: "2024-01-10",
  },
  {
    id: "3",
    title: "Técnicas de Rasgueo Avanzadas",
    author: "Ana Martínez",
    excerpt:
      "Mejora tu técnica de rasgueo con patrones avanzados y consejos para darle más ritmo y expresividad a tu interpretación.",
    content: `El rasgueo es una de las técnicas más importantes en la guitarra. Dominar diferentes patrones te permitirá tocar una gran variedad de estilos musicales.

## Patrones Básicos de Rasgueo

### Patrón 1: Abajo-Arriba
- Tiempo: 4/4
- Patrón: ↓ ↑ ↓ ↑
- Uso: Baladas lentas, folk

### Patrón 2: Clásico Pop
- Tiempo: 4/4  
- Patrón: ↓ ↓ ↑ ↑ ↓ ↑
- Uso: Pop, rock suave

### Patrón 3: Reggae
- Tiempo: 4/4
- Patrón: ↑ ↓ ↑ ↓
- Uso: Reggae, ska

## Técnicas Avanzadas

### Palm Muting
Apoya ligeramente la palma de tu mano derecha sobre las cuerdas cerca del puente para crear un sonido más percusivo.

### Acentos
Enfatiza ciertos golpes para crear más groove:
- Acentúa los tiempos 1 y 3 en compás de 4/4
- Varía la intensidad del rasgueo

### Silencios
Los silencios son tan importantes como las notas:
- Usa la mano izquierda para silenciar las cuerdas
- Crea espacios rítmicos interesantes

## Consejos para Practicar

1. **Usa un metrónomo**: Mantén el tiempo constante
2. **Empieza lento**: Aumenta la velocidad gradualmente
3. **Practica con canciones**: Aplica los patrones a canciones reales
4. **Grábate**: Escucha tu progreso

La clave está en la práctica constante y la paciencia. ¡Cada guitarrista desarrolla su propio estilo de rasgueo único!`,
    publishedAt: "2024-01-05",
  },
]
