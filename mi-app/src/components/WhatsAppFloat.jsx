import { INFO } from '../data'

export default function WhatsAppFloat() {
  return (
    <a
      href={INFO.wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-2xl text-white shadow-lg transition hover:scale-110"
    >
      💬
    </a>
  )
}
