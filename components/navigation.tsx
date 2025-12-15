"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b  border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="py-3">
            <Logo variant="navy-on-white" size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/programs"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/how-we-teach"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              How We Teach
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <Link href="/join">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Join the Circle
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/programs"
              className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/how-we-teach"
              className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How We Teach
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link href="/join" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Join the Circle
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
