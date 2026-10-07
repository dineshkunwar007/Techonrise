import React, { useId } from 'react';
import { cn } from '../../lib/utils';
import { Check, AlertCircle } from 'lucide-react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  hint?: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, hint, error, id, required, checked, onChange, disabled, ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;
    const errorId = `${checkboxId}-error`;
    const hintId = `${checkboxId}-hint`;

    return (
      <div className="space-y-1">
        <label htmlFor={checkboxId} className={cn('flex items-start gap-3 cursor-pointer group select-none', disabled && 'cursor-not-allowed opacity-50')}>
          <div className="relative flex items-center justify-center mt-0.5 shrink-0">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              required={required}
              checked={checked}
              onChange={onChange}
              disabled={disabled}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? errorId : hint ? hintId : undefined}
              className="peer sr-only"
              {...props}
            />
            <div
              className={cn(
                'w-5 h-5 rounded-md border border-[var(--border-color)] bg-[var(--surface-2)] transition-all duration-200 flex items-center justify-center peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--accent)] peer-checked:bg-[var(--accent)] peer-checked:border-[var(--accent)] group-hover:border-[var(--accent)]/60',
                error && 'border-red-500'
              )}
            >
              <Check className="w-3.5 h-3.5 text-[#0C0F12] opacity-0 peer-checked:opacity-100 transition-opacity stroke-[3]" />
            </div>
          </div>

          {label && (
            <div className="text-xs text-[var(--text-muted)] leading-relaxed pt-0.5">
              {label}
              {required && <span className="text-[var(--accent)] ml-1">*</span>}
              {hint && <p id={hintId} className="text-[11px] text-[var(--text-muted)]/80 mt-0.5">{hint}</p>}
            </div>
          )}
        </label>

        {error && (
          <p id={errorId} className="text-xs text-red-400 flex items-center gap-1.5 pt-0.5 pl-8">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';
