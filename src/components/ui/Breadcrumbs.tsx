import React from 'react';
import { JsonLd } from '../seo/JsonLd';
import { generateBreadcrumbSchema, type BreadcrumbItem } from '../../lib/schema';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (url: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const fullItems: BreadcrumbItem[] = [{ name: 'Home', url: '/' }, ...items];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(url);
    }
  };

  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema(fullItems)} />
      <nav aria-label="Breadcrumb" className="py-3 text-xs text-muted flex items-center space-x-2">
        <ol className="flex items-center space-x-2">
          {fullItems.map((item, idx) => {
            const isLast = idx === fullItems.length - 1;
            return (
              <li key={item.url} className="flex items-center space-x-2">
                {idx > 0 && <span className="opacity-40 select-none">/</span>}
                {isLast ? (
                  <span className="text-main font-medium truncate max-w-[240px]" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={item.url}
                    onClick={(e) => handleClick(e, item.url)}
                    className="hover:text-accent transition-colors truncate max-w-[180px]"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
