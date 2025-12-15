"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const whatsappNumber = "+917204248989"; // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BD5A] text-white transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-foreground text-background text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </a>
  )
}
