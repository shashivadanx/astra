import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | Astra Math Circle",
  description:
    "Learn about Astra Math Circle - our story, vision, and the inspiration behind our modern Math Circle approach. Discover how we combine global Math Circle traditions with modern teaching methods.",
  openGraph: {
    title: "About Astra Math Circle",
    description: "A modern Math Circle shaped by global traditions and Indian ambition.",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">About Astra Math Circle</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A modern Math Circle shaped by global traditions and Indian ambition.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="text-xl font-semibold text-foreground">
                Children deserve to experience mathematics the way mathematicians do - with curiosity, wonder, and
                disciplined thinking.
              </p>

              <p>Today, most math learning programs are either:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground flex-shrink-0 mt-2" />
                  <span>superficial and formula-driven</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground flex-shrink-0 mt-2" />
                  <span>or excessively competitive and exam-focused</span>
                </li>
              </ul>

              <p className="font-semibold text-foreground">
                This is not how original thinkers and problem solvers are nurtured.
              </p>

              <p className="text-xl font-semibold text-foreground mt-8">Astra offers a third path:</p>
              <p className="text-lg text-foreground leading-relaxed">
                a circle of intellectual curiosity, discovery, and disciplined problem-solving. We focus on depth,
                reasoning, and intellectual confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-8 text-center">Our Vision</h2>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <p className="text-xl leading-relaxed text-center">
                  To build a global platform for nurturing a generation of mathematical thinkers with clarity,
                  confidence, rigour and imagination to solve complex problems - in universities, research, startups,
                  and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">Who we are</h2>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-32 w-32 rounded-full overflow-hidden bg-primary/10">
                      <Image
                        src="/images/vishnu.jpg"
                        alt="Vishnu - Co-founder and Academic Lead"
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Vishnu</h3>
                    <p className="text-accent font-semibold mb-4">Co-founder and Academic Lead</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Vishnu is the academic force behind Astra Math Circle; a self-taught mathematician, former Super
                      30 scholar, and a mentor shaped entirely by curiosity rather than marks. Growing up in a crowded
                      local school and scoring among the lowest in early grades, he discovered learning through peer
                      exploration, finishing Class 10 math by Class 8 through self-study. Over the last decade, he has
                      taught hundreds of students across India, designing learning experiences that build confidence,
                      intuition, and problem-solving depth. At Astra, he leads curriculum, pedagogy, and mentor
                      training.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
