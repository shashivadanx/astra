import Link from "next/link"
import { Logo } from "@/components/logo"
import { Mail, MessageCircle } from "lucide-react"

export function Footer() {
  const whatsappNumber = "+917204248989"; // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Logo variant="navy-on-white" size="md" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              A modern Math Circle for ambitious young thinkers. Inspired by global Math Circles and Olympiad
              traditions.
            </p>
            <p className="text-lg font-serif font-bold text-foreground mt-6">Where curiosity becomes mastery.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-teach"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  How We Teach
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Join the Circle
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@astramathcircle.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  support@astramathcircle.com
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Astra Math Circle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
