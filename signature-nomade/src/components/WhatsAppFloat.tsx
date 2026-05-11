import { MessageCircle } from "lucide-react";
import { site } from "../data/content";

const href = `https://wa.me/${site.whatsappPhone}`;

export function WhatsAppFloat() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 right-5 z-[60] inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#128C7E] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_-18px_rgba(18,140,126,0.55)] backdrop-blur transition hover:border-white/35 hover:bg-[#0f786c] hover:shadow-[0_22px_60px_-20px_rgba(18,140,126,0.68)] md:bottom-8 md:right-8"
      aria-label="Contacter Signature Nomade sur WhatsApp"
    >
      <MessageCircle className="h-6 w-6 transition group-hover:scale-105" aria-hidden />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
