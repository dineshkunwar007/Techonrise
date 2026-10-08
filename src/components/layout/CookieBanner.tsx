import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { ShieldCheck, Settings } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('techonrise_cookie_consent');
    if (savedConsent) {
      setConsentGiven(true);
      try {
        const parsed = JSON.parse(savedConsent);
        setAnalyticsEnabled(parsed.analytics ?? false);
        setMarketingEnabled(parsed.marketing ?? false);
      } catch {
        // Fallback
      }
    } else {
      setConsentGiven(false);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = { necessary: true, analytics: true, marketing: true, timestamp: new Date().toISOString() };
    localStorage.setItem('techonrise_cookie_consent', JSON.stringify(consent));
    setConsentGiven(true);
    // Google Consent Mode v2 Stub
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
      (window as unknown as { gtag: Function }).gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    }
  };

  const handleRejectAll = () => {
    const consent = { necessary: true, analytics: false, marketing: false, timestamp: new Date().toISOString() };
    localStorage.setItem('techonrise_cookie_consent', JSON.stringify(consent));
    setConsentGiven(true);
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
      (window as unknown as { gtag: Function }).gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }
  };

  const handleSavePreferences = () => {
    const consent = { necessary: true, analytics: analyticsEnabled, marketing: marketingEnabled, timestamp: new Date().toISOString() };
    localStorage.setItem('techonrise_cookie_consent', JSON.stringify(consent));
    setConsentGiven(true);
    setShowPreferences(false);
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
      (window as unknown as { gtag: Function }).gtag('consent', 'update', {
        analytics_storage: analyticsEnabled ? 'granted' : 'denied',
        ad_storage: marketingEnabled ? 'granted' : 'denied',
        ad_user_data: marketingEnabled ? 'granted' : 'denied',
        ad_personalization: marketingEnabled ? 'granted' : 'denied',
      });
    }
  };

  if (consentGiven !== false) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-[74px] sm:bottom-6 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-md z-50 p-4 sm:p-5 bg-[var(--surface-1)] border border-subtle rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
        <div className="space-y-2.5 w-full">
          <div>
            <h4 className="text-sm font-semibold text-main">Privacy & Cookie Preferences</h4>
            <p className="text-xs text-muted leading-relaxed mt-1">
              Techonrise enforces consent-first privacy. We do not load non-essential tracking scripts until you grant permission under UK GDPR.
            </p>
          </div>

          {showPreferences && (
            <div className="py-2.5 my-2 space-y-2.5 border-y border-subtle text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-main font-medium block">Strictly Necessary</span>
                  <span className="text-[10px] text-muted">Core functions & theme preference</span>
                </div>
                <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">Always Active</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div>
                  <label htmlFor="analytics-consent" className="text-main font-medium block cursor-pointer">
                    Performance & Analytics
                  </label>
                  <span className="text-[10px] text-muted">Anonymous Core Web Vitals diagnostic</span>
                </div>
                <input
                  id="analytics-consent"
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="rounded border-subtle accent-[#2DD4BF] cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between pt-1">
                <div>
                  <label htmlFor="marketing-consent" className="text-main font-medium block cursor-pointer">
                    Marketing Attribution
                  </label>
                  <span className="text-[10px] text-muted">Campaign conversion evaluation</span>
                </div>
                <input
                  id="marketing-consent"
                  type="checkbox"
                  checked={marketingEnabled}
                  onChange={(e) => setMarketingEnabled(e.target.checked)}
                  className="rounded border-subtle accent-[#2DD4BF] cursor-pointer"
                />
              </div>
            </div>
          )}

          <div className="flex items-center flex-wrap gap-2 pt-1">
            {showPreferences ? (
              <div className="flex items-center gap-2 w-full justify-between">
                <Button size="sm" variant="primary" onClick={handleSavePreferences}>
                  Save Preferences
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setShowPreferences(false)}>
                  Cancel
                </Button>
              </div>
            ) : (
              <>
                <Button size="sm" variant="primary" onClick={handleAcceptAll}>
                  Accept
                </Button>
                <Button size="sm" variant="secondary" onClick={handleRejectAll}>
                  Reject
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowPreferences(true)}
                  className="text-xs text-muted hover:text-main flex items-center gap-1.5 ml-auto"
                  aria-label="Manage cookie settings"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Manage</span>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
