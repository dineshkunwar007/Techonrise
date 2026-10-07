import express, { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { contactFormSchema, auditFormSchema } from './src/lib/formSchemas.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

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

const rateLimitMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1';
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment before trying again.' });
  }
  next();
};

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  // API Route: /api/contact
  app.post('/api/contact', rateLimitMiddleware, async (req: Request, res: Response) => {
    try {
      const rawData = req.body || {};

      // Honeypot check: silently accept bots without processing
      if (rawData.honeypot) {
        return res.json({ success: true, message: 'Message received' });
      }

      // Server-side Zod validation
      const validation = contactFormSchema.safeParse(rawData);
      if (!validation.success) {
        return res.status(400).json({
          error: 'Validation failed',
          details: validation.error.flatten().fieldErrors,
        });
      }

      const data = validation.data;

      // TODO: Connect email provider (e.g. Resend, Postmark, or SendGrid)
      // Example production implementation:
      // const resend = new Resend(process.env.RESEND_API_KEY);
      // await resend.emails.send({
      //   from: 'enquiries@techonrise.co.uk',
      //   to: process.env.NOTIFICATION_EMAIL || 'hello@techonrise.co.uk',
      //   subject: `[New Project Brief] ${data.fullName} - ${data.company || 'Direct'}`,
      //   html: `
      //     <h2>New Project Brief Received</h2>
      //     <p><strong>Name:</strong> ${data.fullName}</p>
      //     <p><strong>Email:</strong> ${data.email}</p>
      //     <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
      //     <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
      //     <p><strong>Website:</strong> ${data.websiteUrl || 'N/A'}</p>
      //     <p><strong>Services:</strong> ${data.serviceInterest.join(', ')}</p>
      //     <p><strong>Budget:</strong> ${data.budgetRange}</p>
      //     <p><strong>Timeline:</strong> ${data.timeline}</p>
      //     <p><strong>Message:</strong> ${data.message}</p>
      //   `,
      // });

      const leadRef = `TOR-${Date.now().toString(36).toUpperCase()}`;

      return res.json({
        success: true,
        message: 'Consultation request received successfully. A technical director will reply within 1 business day.',
        receivedAt: new Date().toISOString(),
        leadRef,
      });
    } catch {
      return res.status(400).json({ error: 'Invalid JSON payload' });
    }
  });

  // API Route: /api/audit
  app.post('/api/audit', rateLimitMiddleware, async (req: Request, res: Response) => {
    try {
      const rawData = req.body || {};

      if (rawData.honeypot) {
        return res.json({ success: true, message: 'Audit queued' });
      }

      // Server-side Zod validation
      const validation = auditFormSchema.safeParse(rawData);
      if (!validation.success) {
        return res.status(400).json({
          error: 'Validation failed',
          details: validation.error.flatten().fieldErrors,
        });
      }

      const data = validation.data;

      // TODO: Connect email provider (e.g. Resend) or dispatch background audit job
      // Example production implementation:
      // const resend = new Resend(process.env.RESEND_API_KEY);
      // await resend.emails.send({
      //   from: 'audits@techonrise.co.uk',
      //   to: process.env.NOTIFICATION_EMAIL || 'hello@techonrise.co.uk',
      //   subject: `[Free Audit Request] ${data.websiteUrl} - ${data.name}`,
      //   html: `
      //     <h2>Free Technical Audit Request</h2>
      //     <p><strong>Client Name:</strong> ${data.name}</p>
      //     <p><strong>Email:</strong> ${data.email}</p>
      //     <p><strong>Target URL:</strong> ${data.websiteUrl}</p>
      //     <p><strong>Business Sector:</strong> ${data.businessType}</p>
      //     <p><strong>Primary Goal:</strong> ${data.primaryGoal}</p>
      //   `,
      // });

      const auditId = `AUD-${Date.now().toString(36).toUpperCase()}`;

      return res.json({
        success: true,
        message: 'Digital audit queued. Diagnostic report will be dispatched within 2 business days.',
        receivedAt: new Date().toISOString(),
        auditId,
      });
    } catch {
      return res.status(400).json({ error: 'Invalid JSON payload' });
    }
  });

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
