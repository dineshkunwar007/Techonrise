import React, { useRef, useId } from 'react';
import { cn } from '../../lib/utils';

export interface TabItem {
  id: string;
  label: string;
  badge?: string;
  content?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTabId: string;
  onTabChange: (id: string) => void;
  className?: string;
  children?: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTabId,
  onTabChange,
  className,
  children,
}) => {
  const tabListRef = useRef<HTMLDivElement>(null);
  const baseId = useId();

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextTab = tabs[nextIndex];
    onTabChange(nextTab.id);

    // Focus next button
    const buttons = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    buttons?.[nextIndex]?.focus();
  };

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <div className={cn('space-y-4', className)}>
      <div
        ref={tabListRef}
        role="tablist"
        aria-orientation="horizontal"
        className="flex items-center gap-1.5 p-1.5 bg-[var(--surface-1)] border border-[var(--border-color)] rounded-xl overflow-x-auto scrollbar-none"
      >
        {tabs.map((tab, idx) => {
          const isActive = tab.id === activeTabId;
          const tabId = `${baseId}-tab-${tab.id}`;
          const panelId = `${baseId}-panel-${tab.id}`;

          return (
            <button
              key={tab.id}
              role="tab"
              id={tabId}
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onTabChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={cn(
                'px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 select-none focus-visible:outline-2 focus-visible:outline-[var(--accent)]',
                isActive
                  ? 'bg-[var(--surface-2)] text-[var(--text-primary)] font-semibold shadow-xs border border-[var(--accent)]/40 text-[var(--accent)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)]/50 border border-transparent'
              )}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--surface-1)] text-[var(--text-muted)]">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Render active tab content if provided */}
      {tabs.map((tab) => {
        const isCurrent = tab.id === activeTabId;
        const panelId = `${baseId}-panel-${tab.id}`;
        const tabId = `${baseId}-tab-${tab.id}`;

        if (!tab.content) return null;

        return (
          <div
            key={tab.id}
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId}
            hidden={!isCurrent}
            className={cn(
              'focus:outline-none transition-opacity duration-200',
              isCurrent ? 'block opacity-100' : 'hidden opacity-0'
            )}
          >
            {tab.content}
          </div>
        );
      })}

      {/* Or render children passed from parent */}
      {children}
    </div>
  );
};
