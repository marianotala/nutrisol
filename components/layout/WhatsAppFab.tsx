import { whatsappLink } from '@/lib/site';
import { WhatsAppIcon } from '@/components/ui/icons';

/** Botón flotante de WhatsApp — canal de contacto sin fricción. */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-card transition-transform duration-300 ease-out-soft hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
