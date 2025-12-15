import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Circle, Star, Users, Target } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Astra Math Circle | Learning Community for ambitious young thinkers",
  description:
    "A modern Math Circle inspired by global Math Circles and Olympiad traditions. Small mentor-led cohorts, guided exploration, and beautiful problems for Grades 5-10.",
  openGraph: {
    title: "Astra Math Circle | Where Curiosity Becomes Mastery",
    description:
      "Premium math learning through mentor-led cohorts, guided exploration, and beautiful problems for Grades 5-10.",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
              A modern Math Circle for ambitious young thinkers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Inspired by global math circles and Olympiad traditions, Astra Math Circle brings together small
              mentor-led cohorts, guided exploration, beautiful problems, and purposeful practice that strengthens
              understanding and problem-solving for highly motivated students in Grades 5-10 who are looking to develop
              deeper understanding and mastery of mathematics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                  Join a Free Workshop
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" disabled>
                Take a Diagnostic
                <span className="ml-2 text-xs">(coming soon)</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 opacity-10">
          <Circle className="h-32 w-32 text-primary" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10">
          <Star className="h-24 w-24 text-accent" />
        </div>
      </section>

      {/* What is Astra Math Circle */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              What is Astra Math Circle?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Astra Math Circle is a <strong className="text-foreground">learning community</strong> built around the
                enduring power of a math circle, where learners, mentors, and ideas come together in a shared pursuit of
                mathematical mastery.
              </p>
              <p>
                We adapt these ideas for modern learners through mentor-led circles, structured practice, and a future
                roadmap of AI-driven personalisation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                {["exploring", "debating", "reasoning", "proving", "solving", "reflecting"].map((action) => (
                  <div key={action} className="flex items-center gap-2 text-primary font-medium">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {action}
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="text-xl font-semibold text-foreground mb-2">Our goal is simple:</p>
                <p className="text-foreground">
                  Nurture young thinkers who approach mathematics with clarity, confidence, and joy.
                </p>
              </div>
              <div className="space-y-4 my-8">
                <p className="text-lg text-muted-foreground mb-4">Our name reflects our identity:</p>
                <p className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-foreground">Astra</strong> – from the Latin "stars", symbolising aspiration
                    and brilliance
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Circle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-foreground">Circle</strong> – perfection, continuity, and community
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Circle */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">Why a Circle?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 text-center">
                  Mathematical Perfection
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A circle is symmetrical, elegant, and infinite. In Astra, this translates to endless depth, structured
                  reasoning, and beauty in ideas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 text-center">
                  Community & Collaboration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A circle gathers people together. Students learn with and from peers, guided by mentors who ask
                  questions rather than provide answers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Circle className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 text-center">Continuity & Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A circle never ends; it moves forward without stopping. This reflects our philosophy: mastery is not a
                  finish line, but a continuous journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Astra Different */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            What Makes Astra Different
          </h2>
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">Mentor-Led Exploration</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our mentors guide through questions:{" "}
                  <em>
                    What do you notice? Does this always work? Can we generalise? Can someone propose another method?
                  </em>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our sessions feel like guided conversations. Students think first, discuss next, and refine their
                  thinking together. This is the core of every great Math Circle. We resist the temptation to explain
                  prematurely. Students build the idea rather than receiving it.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">Mathematical Thinking, Not Tricks</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {["pattern discovery", "reasoning", "proofs", "generalisation", "abstraction"].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-primary font-medium">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {skill}
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Not shortcuts, not speed-focused "tricks", not exam hacks. Students learn to approach problems like
                  mathematicians-slowly, carefully, beautifully.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">Two Complementary Session Types</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Every circle uses a deliberate mix of:</p>
                <div className="space-y-3">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="font-semibold text-foreground">Concept Sessions</p>
                    <p className="text-sm text-muted-foreground">Deep understanding</p>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg">
                    <p className="font-semibold text-foreground">Problem-Solving Sessions</p>
                    <p className="text-sm text-muted-foreground">Discipline, strategy, contest-readiness</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Each session ends with clarity: what we discovered, why it works, and how it connects to larger
                  mathematical ideas.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">4</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">Small Cohorts (8-12 students)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Depth requires personal attention. Every student presents, argues ideas, and receives personal
                  guidance.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">5</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">A Future-Proof System</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Over time, students experience:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "diagnostic tests",
                    "simulated test situations",
                    "individualised analytics",
                    "personalised practice",
                    "concept summaries",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Snapshot */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Programs Snapshot
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Grades 5-6
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Foundations Circle</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Build early mathematical fluency through patterns, logical puzzles, structured thinking, and intuitive
                  problem-solving.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    Grades 7-8
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Explorers Circle</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Introduce number theory, algebra, inequalities, factorisation, modular arithmetic, and structured
                  reasoning.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Grades 9-10
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Olympiad Circle</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Train deeply for problem-solving competitions such as AMC, IOQM, RMO through multi-step reasoning and
                  proofs.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Link href="/programs">
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Workshop CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-balance">
              Experience Astra Through Our Math Workshops
            </h2>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">What your child will experience:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  "the Astra method for building curiosity and mastery in math",
                  "The joy of concept discovery",
                  "multi-step problem-solving",
                  "high-value discussion",
                  "safe, supportive learning",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 mb-10">
              <div>
                <p className="text-lg font-semibold mb-2">Format:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-primary-foreground/10 px-4 py-2 rounded-full">4 live sessions</span>
                  <span className="bg-primary-foreground/10 px-4 py-2 rounded-full">60 minutes each</span>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2">Tracks Available:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-primary-foreground/10 px-4 py-2 rounded-full">Grades 5-6 track</span>
                  <span className="bg-primary-foreground/10 px-4 py-2 rounded-full">Grades 7-8 track</span>
                </div>
              </div>
            </div>
            <Link href="/join">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8"
              >
                Join a Free Workshop
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
