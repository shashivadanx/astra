import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Circle,
  MessageCircle,
  BookOpen,
  Target,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Teach | Astra Math Circle",
  description:
    "Discover our mentor-led teaching methodology combining concept sessions, problem-solving sessions, and workshop experiences. Learn how we build mathematical maturity through guided exploration.",
  openGraph: {
    title: "How We Teach | Astra Math Circle",
    description:
      "Our unique teaching methodology: Explore → Struggle → Discuss → Refine. Building mathematical thinkers through guided discovery.",
  },
};

export default function HowWeTeachPage() {
  const whatsappNumber = "+917204248989"; // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I'd like to enquire about the free workshops.`;

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              How learning happens inside the Circle
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Astra combines the heritage of classic Math Circles with a modern,
              structured approach to practice.
            </p>
            <p className="text-lg font-semibold text-foreground mt-4">
              The result: students who think clearly, solve curiously, and enjoy
              mathematics deeply.
            </p>
          </div>
        </div>
      </section>

      {/* The Circle Method */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Circle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                The Circle Method
              </h2>
              <p className="font-serif text-3xl italic text-primary mb-8">
                Explore → Struggle → Discuss → Refine
              </p>
            </div>

            <Card className="bg-primary/5 border-l-4 border-primary">
              <CardContent className="pt-6">
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    In every session, students{" "}
                    <strong className="text-foreground">
                      attempt beautiful problems before seeing any solution
                    </strong>
                    .
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span>Mentors guide with questions, not lectures.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span>Multiple approaches are celebrated.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span>Mistakes become stepping stones.</span>
                    </li>
                  </ul>
                  <p className="font-semibold text-foreground pt-4">
                    This is how mathematical maturity is built.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Concept Sessions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="h-12 w-12 text-primary" />
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Concept Sessions
              </h2>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  How Concept Sessions Work
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "1. Warm-up",
                      description: "A small puzzle or story sets the stage.",
                    },
                    {
                      step: "2. Explore",
                      description:
                        "Students attempt to explain what they notice.",
                    },
                    {
                      step: "3. Connect",
                      description:
                        "Mentors guide students toward the underlying structure.",
                    },
                    {
                      step: "4. Reinforce",
                      description:
                        "A few carefully-curated examples solidify the idea.",
                    },
                    {
                      step: "5. Reflect",
                      description: "Students summarise what they learned.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-bold text-primary">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.step}
                        </h4>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What students gain
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "conceptual clarity",
                    "ability to explain ideas",
                    "generalisation skills",
                    "intuitive reasoning patterns",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-foreground font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem-Solving Sessions */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Target className="h-12 w-12 text-accent" />
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Problem-Solving Sessions
              </h2>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  How Problem-Solving Sessions Work
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "1. Rich problems",
                      description:
                        "Students work individually on 4–6 non-routine problems.",
                    },
                    {
                      step: "2. Minimal hints",
                      description:
                        "Mentors intervene only through strategic questions.",
                    },
                    {
                      step: "3. Present & discuss",
                      description:
                        "Students present. Peers challenge. Mentors refine.",
                    },
                    {
                      step: "4. Strategy map",
                      description:
                        "Sessions end with patterns and strategies summarised.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <span className="font-bold text-accent">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.step}
                        </h4>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What students gain
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "structured reasoning",
                    "stamina",
                    "contest readiness",
                    "multi-step logic",
                    "confidence in ambiguity",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-foreground font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshop Sessions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <MessageCircle className="h-12 w-12 text-primary" />
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Workshop Sessions
              </h2>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Workshop Flow
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                    <span className="font-semibold text-foreground">
                      Concept idea
                    </span>
                    <span className="text-sm text-muted-foreground">
                      20–25 min
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-accent/5 rounded-lg">
                    <span className="font-semibold text-foreground">
                      Problem-solving
                    </span>
                    <span className="text-sm text-muted-foreground">
                      25–30 min
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground">
                      Reflection
                    </span>
                    <span className="text-sm text-muted-foreground">
                      5–10 min
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Workshops are designed to help your child:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Experience Astra's approach to deep, rigorous learning",
                    "Spark curiosity through rich, guided problem-solving",
                    "Find the right learning path for growth and excellence",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="text-center mt-10">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Enquire about our free workshops
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
