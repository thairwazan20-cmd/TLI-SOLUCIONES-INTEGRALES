import Icon from './Icon'
import { INFO } from '../data'

export default function WhatsAppFloat() {
  return (
    <a
      href={INFO.wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-lg transition hover:scale-110"
    >
      <Icon name="whatsapp" className="h-8 w-8" />
    </a>
  )
}
