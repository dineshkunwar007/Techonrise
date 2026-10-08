import React from 'react';
import { Button } from '../ui/Button';
import { PhoneCall, Calendar } from 'lucide-react';

interface StickyMobileCtaProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({
  currentPath,
  onNavigate,
  onOpenConsultationModal,
}) => {
  // Do not show sticky bar on dedicated conversion/form pages where the form is already the viewport focus
  if (currentPath === '/contact' || currentPath === '/free-audit') {
    return null;
  }

  return (
    <aside
      aria-label="Quick Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[var(--surface-1)]/95 backdrop-blur-md border-t border-subtle shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex items-center gap-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <button
        type="button"
        onClick={() => {
          if (onOpenConsultationModal) {
            onOpenConsultationModal();
          } else {
            onNavigate('/contact');
          }
        }}
        className="flex-1 min-h-[46px] px-4 py-2.5 rounded-xl bg-teal-700 text-white dark:bg-[#2DD4BF] dark:text-[#0C0F12] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
      >
        <Calendar className="w-4 h-4 shrink-0 text-white dark:text-[#0C0F12]" aria-hidden="true" />
        <span>Book Consultation</span>
      </button>

      <a
        href="tel:+442012345678"
        aria-label="Call Techonrise office directly"
        className="min-h-[46px] min-w-[46px] px-3.5 rounded-xl bg-[var(--surface-2)] text-main border border-subtle flex items-center justify-center hover:border-accent transition-colors active:scale-[0.98]"
      >
        <PhoneCall className="w-4 h-4 text-accent" aria-hidden="true" />
        <span className="sr-only">Call office</span>
      </a>

      <button
        type="button"
        onClick={() => onNavigate('/free-audit')}
        className="min-h-[46px] px-3.5 rounded-xl bg-[var(--surface-2)] text-main border border-subtle text-xs font-medium hidden xs:flex items-center gap-1.5 hover:border-accent active:scale-[0.98]"
      >
        <span>Free Audit</span>
      </button>
    </aside>
  );
};
