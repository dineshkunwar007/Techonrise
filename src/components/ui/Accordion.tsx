import React, { useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface AccordionItem {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number;
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenIndex = 0,
  allowMultiple = true,
  className,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([defaultOpenIndex]);
  const baseId = useId();

  const toggleItem = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices(allowMultiple ? [...openIndices, index] : [index]);
    }
  };

  return (
    <div className={cn('divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]', className)}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const headerId = `${baseId}-header-${item.id}`;
        const panelId = `${baseId}-panel-${item.id}`;

        return (
          <div key={item.id} className="py-4 sm:py-5">
            <h3 className="m-0 p-0 text-base font-normal">
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-lg py-1 select-none"
              >
                <span className="text-base sm:text-lg font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors pr-4">
                  {item.title}
                </span>
                <span className="shrink-0 p-1.5 rounded-full bg-[var(--surface-2)] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors border border-[var(--border-color)]">
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-300',
                      isOpen && 'rotate-180 text-[var(--accent)]'
                    )}
                    aria-hidden="true"
                  />
                </span>
              </button>
            </h3>

            {/* Content always stays in DOM for crawlability and indexing */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100 pt-3' : 'grid-rows-[0fr] opacity-0 pt-0 overflow-hidden'
              )}
            >
              <div className="overflow-hidden text-sm text-[var(--text-muted)] leading-relaxed">
                {typeof item.content === 'string' ? (
                  <p>{item.content}</p>
                ) : (
                  item.content
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
