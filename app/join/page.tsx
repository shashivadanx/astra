"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, MessageCircle, BookOpen, Target } from "lucide-react"

const whatsappNumber = "+917204248989"; // Replace with actual number
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I'd like to register for the free workshop.`

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">Join the Free Workshop</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A free 4-session live workshop for curious students in Grades 5-8 to experience Astra's unique approach to
              mathematical thinking and problem solving.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                <MessageCircle className="mr-2 h-5 w-5" />
                Register Free on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Join This Workshop */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 text-center">Why Join This Workshop</h2>

            <Card className="bg-primary/5 border-l-4 border-primary mb-6">
              <CardContent className="pt-4 pb-4">
                <p className="text-lg font-semibold text-foreground mb-2">Most children are good at math.</p>
                <p className="text-muted-foreground">
                  This workshop helps them learn to think deeply, reason clearly, and solve beautifully.
                </p>
              </CardContent>
            </Card>

            <p className="text-muted-foreground mb-4">In 4 engaging sessions, your child will experience:</p>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                "guided concept exploration",
                "rich, non-routine problems",
                "collaborative reasoning",
                "mentor-led discussions",
                "structured reflection",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-muted/30 p-3 rounded-lg">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-foreground font-semibold">Astra-style learning - short, powerful, free.</p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Who It's For</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Grades 5-6: Foundations Track</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Ideal for children who enjoy puzzles, patterns, and thinking differently.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-bold text-foreground">Grades 7-8: Explorers Track</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Perfect for students ready for a gentle introduction to Olympiad-style thinking.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Child Will Do */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">What Your Child Will Do</h2>

            <div className="space-y-3">
              {[
                "explore a beautiful idea each session",
                "attempt interesting, brain-stretching problems",
                "discuss and compare approaches",
                "learn how mathematicians think",
                "build confidence in unfamiliar problem situations",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-muted/30 p-3 rounded-lg">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <p className="text-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-6 text-sm">
              All in a supportive, mentor-guided environment.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Format */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Workshop Format</h2>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <Card className="text-center">
                <CardContent className="pt-4 pb-4">
                  <div className="text-3xl font-bold text-primary mb-1">4</div>
                  <p className="text-muted-foreground text-sm">free live sessions</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-4 pb-4">
                  <div className="text-3xl font-bold text-accent mb-1">60</div>
                  <p className="text-muted-foreground text-sm">minutes each</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-4 pb-4">
                  <div className="text-3xl font-bold text-primary mb-1">2</div>
                  <p className="text-muted-foreground text-sm">tracks available</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-2">
              {[
                "Separate tracks for Grades 5-6 and Grades 7-8",
                "Zoom-based, interactive, discussion-heavy",
                "No fees. No commitment. No pressure.",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-card p-3 rounded-lg">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              How to Join (3 Simple Steps)
            </h2>

            <div className="space-y-4">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-4 pb-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                        <span className="text-xl font-bold text-primary">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">Register Free on WhatsApp</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Message us on WhatsApp to find the available free workshop slots.
                      </p>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Register Free
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4 pb-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent">
                        <span className="text-xl font-bold text-accent">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">Attend the Workshop</h3>
                      <p className="text-muted-foreground text-sm">
                        Your child experiences Astra's concept + problem-solving approach.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4 pb-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                        <span className="text-xl font-bold text-primary">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">Find the Right Circle</h3>
                      <p className="text-muted-foreground text-sm">
                        After the workshop, a short call helps determine the ideal program for your child.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">FAQs</h2>

            <div className="space-y-4">
              {[
                {
                  question: "Is the workshop really free?",
                  answer: "Yes. It is completely free.",
                },
                {
                  question: "Does my child need Olympiad experience?",
                  answer: "No. Curiosity and strong fundamentals are enough.",
                },
                {
                  question: "How big are the groups?",
                  answer: "Workshops are larger cohorts as they are free of cost. Regular circles have 8-12 students.",
                },
                {
                  question: "Is this aligned to the school curriculum?",
                  answer: "No. We help build deeper thinking that strengthens school performance naturally.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-4 pb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Give your child a taste of deep mathematical thinking.
            </h2>
            <p className="text-lg mb-6">Seats are limited. Register now.</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Register Free on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
