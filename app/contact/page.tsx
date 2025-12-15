"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We'd love to hear from you - whether you're a parent, student,
              school, or collaborator.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        WhatsApp
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        The fastest way to reach us. Chat with our team directly
                        on WhatsApp for quick responses.
                      </p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                      >
                        Start a conversation
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-2 hover:border-accent/50">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-6">
                    <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        Email
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Send us an email and we'll get back to you within 24
                        hours.
                      </p>
                      <a
                        href="mailto:support@astramathcircle.com"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
                      >
                        support@astramathcircle.com
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
