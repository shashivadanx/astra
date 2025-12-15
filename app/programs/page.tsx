import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programs | Astra Math Circle",
  description:
    "Explore our three progressive circles: Foundations Circle (Grades 5-6), Explorers Circle (Grades 7-8), and Olympiad Circle (Grades 9-10). Each designed to build mathematical mastery.",
  openGraph: {
    title: "Programs | Astra Math Circle",
    description:
      "Progressive math learning circles from Grades 5-10, building from foundations to Olympiad-level mastery.",
  },
}

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              A continuous journey from curiosity to mastery
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our programs are structured as progressive "circles", each representing a deeper layer of mathematical
              thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview Table */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">Program Overview</h2>
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left p-4 font-semibold text-foreground">Program</th>
                  <th className="text-left p-4 font-semibold text-foreground">Grades</th>
                  <th className="text-left p-4 font-semibold text-foreground">Focus</th>
                  <th className="text-left p-4 font-semibold text-foreground">Outcomes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-semibold text-primary">Foundations Circle</td>
                  <td className="p-4">5–6</td>
                  <td className="p-4 text-muted-foreground">Patterns, logic, number sense</td>
                  <td className="p-4 text-muted-foreground">
                    Comfort with reasoning, early algebraic thinking, strong problem intuition
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-semibold text-accent">Explorers Circle</td>
                  <td className="p-4">7–8</td>
                  <td className="p-4 text-muted-foreground">
                    Algebra, number theory, inequalities, geometry, combinatorics
                  </td>
                  <td className="p-4 text-muted-foreground">
                    Olympiad foundations, multi-step reasoning, contest-mindset
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-semibold text-primary">Olympiad Circle</td>
                  <td className="p-4">9–10</td>
                  <td className="p-4 text-muted-foreground">
                    Advanced level in each domain, Contest-level problems, proofs
                  </td>
                  <td className="p-4 text-muted-foreground">
                    AMC/IOQM/RMO readiness, disciplined strategies, deep mathematical maturity
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Foundations Circle */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Grades 5–6
              </span>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Foundations Circle</h2>
              <p className="font-serif text-2xl italic text-muted-foreground">A gentle ascent into deep thinking</p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  For young learners who are already strong in school math and want richer challenges. We introduce them
                  to patterns, puzzles, estimation, and early proof-like reasoning through stories, games, and intuitive
                  problems.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">What students experience</h3>
                    <ul className="space-y-3">
                      {[
                        "pattern discovery and visual reasoning",
                        "logical puzzles and strategic thinking",
                        "early algebra through natural exploration",
                        "quizzes and analytics",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">What changes in them</h3>
                    <ul className="space-y-3">
                      {[
                        "They stop fearing unfamiliar problems",
                        "They begin explaining ideas clearly",
                        "They form early proof-like reasoning patterns",
                        "They become comfortable thinking without guidance",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          <span className="text-foreground font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Explorers Circle */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Grades 7–8
              </span>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Explorers Circle</h2>
              <p className="font-serif text-2xl italic text-muted-foreground">
                The first real step into Olympiad mathematics
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  This circle bridges school math and contest-style reasoning. Students work with number theory,
                  factorisation, inequalities, modular arithmetic, sequences, and non-routine problems.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">What students experience</h3>
                    <ul className="space-y-3">
                      {[
                        "structured algebraic manipulation",
                        "classic number theory problems",
                        "inequalities as tools for bounding and estimation",
                        "contest-style problems that demand creativity",
                        "Quizzes, mock tests and analytics",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">What changes in them</h3>
                    <ul className="space-y-3">
                      {[
                        "They develop strategic problem-solving approaches",
                        "They learn to identify structure in problems",
                        "They connect ideas across topics",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span className="text-foreground font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Olympiad Circle */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Grades 9–10
              </span>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Olympiad Circle</h2>
              <p className="font-serif text-2xl italic text-muted-foreground">For serious problem-solvers</p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  An intensive track for learners aiming for AMC, IOQM, RMO, and beyond. Sessions are rigorous and
                  focused on deep problem-solving in algebra, number theory, combinatorics, and geometry.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">What students experience</h3>
                    <ul className="space-y-3">
                      {[
                        "multi-step proofs",
                        "high-level contest problems",
                        "systematic strategy building",
                        "mock tests and analytics",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">What changes in them</h3>
                    <ul className="space-y-3">
                      {[
                        "independence",
                        "resilience under complexity",
                        "structured logic",
                        "clarity in explanation",
                        "contest-ready discipline",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          <span className="text-foreground font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
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
