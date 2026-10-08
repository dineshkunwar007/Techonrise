import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { contactFormSchema, auditFormSchema } from './src/lib/formSchemas.ts';

// Simple in-memory rate-limiter stub: max 10 requests per minute per IP
const requestCounts = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);
  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + 60_000 });
    return true;
  }
  if (record.count >= 10) {
    return false;
  }
  record.count += 1;
  return true;
}

function apiStubsPlugin(): Plugin {
  return {
    name: 'api-stubs',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1';

        if (req.method === 'POST' && req.url === '/api/contact') {
          if (!checkRateLimit(clientIp)) {
            res.statusCode = 429;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Too many requests. Please wait a moment before trying again.' }));
            return;
          }

          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const rawData = JSON.parse(body || '{}');

              // Honeypot check: silently accept bots without processing
              if (rawData.honeypot) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, message: 'Message received' }));
                return;
              }

              // Server-side Zod validation
              const validation = contactFormSchema.safeParse(rawData);
              if (!validation.success) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  error: 'Validation failed',
                  details: validation.error.flatten().fieldErrors,
                }));
                return;
              }

              const data = validation.data;

              // TODO: Connect email provider (e.g. Resend, Postmark, or SendGrid)
              // Example production snippet:
              // const resend = new Resend(process.env.RESEND_API_KEY);
              // await resend.emails.send({
              //   from: 'enquiries@techonrise.co.uk',
              //   to: process.env.NOTIFICATION_EMAIL || 'hello@techonrise.co.uk',
              //   subject: `[New Project Brief] ${data.fullName} - ${data.company || 'Direct'}`,
              //   html: `<p><strong>Name:</strong> ${data.fullName}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Budget:</strong> ${data.budgetRange}</p><p><strong>Message:</strong> ${data.message}</p>`
              // });

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: true,
                message: 'Consultation request received successfully. A technical director will reply within 1 business day.',
                receivedAt: new Date().toISOString(),
                leadRef: `TOR-${Date.now().toString(36).toUpperCase()}`,
              }));
            } catch {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
            }
          });
          return;
        }

        if (req.method === 'POST' && req.url === '/api/audit') {
          if (!checkRateLimit(clientIp)) {
            res.statusCode = 429;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Too many requests. Please wait a moment before trying again.' }));
            return;
          }

          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const rawData = JSON.parse(body || '{}');

              if (rawData.honeypot) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, message: 'Audit queued' }));
                return;
              }

              // Server-side Zod validation
              const validation = auditFormSchema.safeParse(rawData);
              if (!validation.success) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  error: 'Validation failed',
                  details: validation.error.flatten().fieldErrors,
                }));
                return;
              }

              const data = validation.data;

              // TODO: Trigger automated Core Web Vitals diagnostic run or dispatch notification to Resend
              // Example:
              // await resend.emails.send({
              //   from: 'audits@techonrise.co.uk',
              //   to: process.env.NOTIFICATION_EMAIL || 'hello@techonrise.co.uk',
              //   subject: `[Audit Request] ${data.websiteUrl} by ${data.name}`,
              //   html: `<p><strong>Target URL:</strong> ${data.websiteUrl}</p><p><strong>Sector:</strong> ${data.businessType}</p><p><strong>Goal:</strong> ${data.primaryGoal}</p>`
              // });

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: true,
                message: 'Digital audit queued. Diagnostic report will be dispatched within 2 business days.',
                receivedAt: new Date().toISOString(),
                auditId: `AUD-${Date.now().toString(36).toUpperCase()}`,
              }));
            } catch {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiStubsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/three') || id.includes('@react-three')) {
              return 'three-bundle';
            }
          },
        },
      },
    },
  };
});
