import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name must not exceed 100 characters.' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid work email address.' }),
  phone: z
    .string()
    .trim()
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .trim()
    .optional()
    .or(z.literal('')),
  websiteUrl: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^https?:\/\/.+/i.test(val) || /^www\..+/i.test(val) || /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/.test(val), {
      message: 'Please provide a valid website URL (e.g. https://company.co.uk).',
    })
    .or(z.literal('')),
  serviceInterest: z
    .array(z.string())
    .min(1, { message: 'Please select at least one area of interest.' }),
  budgetRange: z
    .string()
    .min(1, { message: 'Please select a budget range.' }),
  timeline: z
    .string()
    .min(1, { message: 'Please select a project timeline.' }),
  message: z
    .string()
    .trim()
    .min(20, { message: 'Message must be at least 20 characters to explain your requirements.' })
    .max(3000, { message: 'Message must not exceed 3000 characters.' }),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must consent to data processing under UK GDPR.',
    }),
  honeypot: z
    .string()
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const auditFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Please provide your full name.' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid work email to receive the report.' }),
  websiteUrl: z
    .string()
    .trim()
    .min(3, { message: 'Please provide your website address.' })
    .refine((val) => /^https?:\/\/.+/i.test(val) || /^www\..+/i.test(val) || /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/.test(val), {
      message: 'Please provide a valid website URL (e.g. https://company.co.uk).',
    }),
  businessType: z
    .string()
    .min(1, { message: 'Please select or describe your sector.' }),
  primaryGoal: z
    .string()
    .min(1, { message: 'Please select your primary transformation goal.' }),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must agree to our privacy policy to receive the audit.',
    }),
  honeypot: z
    .string()
    .optional(),
});

export type AuditFormData = z.infer<typeof auditFormSchema>;
