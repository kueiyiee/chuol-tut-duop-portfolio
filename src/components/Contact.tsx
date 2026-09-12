import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  Linkedin,
  Facebook,
  Send, 
  CheckCircle2, 
  FileText, 
  ArrowUpRight, 
  MessageSquare, 
  AlertCircle, 
  Loader2, 
  X,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  GraduationCap,
  Clock,
  ShieldCheck,
  UserCheck,
  UserRound
} from 'lucide-react';
import { personalInfo, academicReference } from '../data/portfolioData';

interface ContactProps {
  onOpenCV: () => void;
}

interface FormState {
  from_name: string;
  from_email: string;
  phone: string;
  subject: string;
  message: string;
  website: string; // Anti-spam honeypot
}

interface ValidationErrors {
  from_name?: string;
  from_email?: string;
  subject?: string;
  message?: string;
}

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';

// EmailJS Configuration Constants (Supports env variable overrides if custom template is provisioned)
const EMAILJS_CONFIG = {
  SERVICE_ID: (import.meta.env.VITE_EMAILJS_SERVICE_ID as string) || 'service_t77xw7d',
  TEMPLATE_ID: (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string) || 'template_0xxxv3o',
  PUBLIC_KEY: (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string) || '82BlkPaIfAXnlDE3Y',
  DESTINATION_EMAIL: 'Nyuonjamestutduop@gmail.com',
  BRAND_NAME: 'NYUON | Digital Portfolio'
};

const INITIAL_FORM: FormState = {
  from_name: '',
  from_email: '',
  phone: '',
  subject: '',
  message: '',
  website: ''
};

const SUGGESTED_SUBJECTS = [
  'Internship Opportunity',
  'Academic Research Collaboration',
  'Environmental Field Project',
  'Conservation Initiative',
  'Professional Inquiry'
];

interface NotificationState {
  type: 'success' | 'error';
  title: string;
  message: string;
  details?: string;
  isTemplateNotFound?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCV }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [notification, setNotification] = useState<NotificationState | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [emailCopied, setEmailCopied] = useState<boolean>(false);

  // One-click copy destination email
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAILJS_CONFIG.DESTINATION_EMAIL).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    }).catch(() => {
      setEmailCopied(false);
    });
  };

  // Initialize official EmailJS SDK on mount with required rate limit and public key
  useEffect(() => {
    try {
      emailjs.init({
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
        blockHeadless: true,
        limitRate: {
          throttle: 10000 // 10s rate limit
        }
      });
    } catch (err) {
      console.warn('EmailJS initialization note:', err);
    }
  }, []);

  // Format timestamp in Africa/Addis_Ababa timezone
  const getAddisAbabaTimestamp = (): string => {
    try {
      return new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Africa/Addis_Ababa'
      }).format(new Date());
    } catch {
      return new Date().toLocaleString('en-GB');
    }
  };

  // Construct direct mailto draft link with pre-filled inputs
  const getMailtoHref = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry - Academic Collaboration');
    const body = encodeURIComponent(
      `Hello Nyuon,\n\n` +
      `Sender Name: ${formData.from_name || 'Visitor'}\n` +
      `Sender Email: ${formData.from_email || 'Not provided'}\n` +
      `Sender Phone: ${formData.phone || 'N/A'}\n` +
      `Time: ${getAddisAbabaTimestamp()}\n` +
      `----------------------------------------\n\n` +
      `${formData.message || ''}\n`
    );
    return `mailto:${EMAILJS_CONFIG.DESTINATION_EMAIL}?subject=${subject}&body=${body}`;
  };

  // Copy full message details to user clipboard
  const handleCopyMessage = () => {
    const content = [
      `TO: ${EMAILJS_CONFIG.DESTINATION_EMAIL}`,
      `FROM: ${formData.from_name || 'Visitor'} <${formData.from_email || 'Not provided'}>`,
      `PHONE: ${formData.phone || 'N/A'}`,
      `SUBJECT: ${formData.subject || 'Portfolio Inquiry'}`,
      `DATE: ${getAddisAbabaTimestamp()}`,
      `\nMESSAGE:`,
      formData.message
    ].join('\n');

    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      setCopied(false);
    });
  };

  // Client-side field validation
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    const trimmedName = formData.from_name.trim();
    const trimmedEmail = formData.from_email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      newErrors.from_name = 'Full Name is required.';
    }

    if (!trimmedEmail) {
      newErrors.from_email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.from_email = 'Please enter a valid email address.';
    }

    if (!trimmedSubject) {
      newErrors.subject = 'Subject is required.';
    }

    if (!trimmedMessage) {
      newErrors.message = 'Message cannot be empty.';
    } else if (trimmedMessage.length < 10) {
      newErrors.message = 'Please provide a slightly more descriptive message (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectSuggestedSubject = (subjectText: string) => {
    setFormData((prev) => ({ ...prev, subject: subjectText }));
    if (errors.subject) {
      setErrors((prev) => ({ ...prev, subject: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === 'sending') return;

    // Anti-Spam Honeypot Verification
    if (formData.website && formData.website.trim() !== '') {
      console.warn('Bot detected via honeypot; submission silently intercepted.');
      setStatus('success');
      setNotification({
        type: 'success',
        title: 'Delivery Confirmed',
        message: 'Thank you! Your message has been sent successfully. I will get back to you as soon as possible.'
      });
      setFormData(INITIAL_FORM);
      setTimeout(() => setStatus('idle'), 4500);
      return;
    }

    if (!validateForm()) {
      return;
    }

    setErrors({});
    setNotification(null);
    setStatus('sending');

    try {
      if (!formRef.current) {
        throw new Error('Contact form reference is unavailable.');
      }

      const timestamp = getAddisAbabaTimestamp();
      const timeField = formRef.current.querySelector<HTMLInputElement>('input[name="time"]');
      if (timeField) {
        timeField.value = timestamp;
      }

      let sentSuccess = false;

      // 1. Primary Attempt: Official EmailJS sendForm
      try {
        await emailjs.sendForm(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          formRef.current,
          {
            publicKey: EMAILJS_CONFIG.PUBLIC_KEY
          }
        );
        sentSuccess = true;
      } catch (firstErr: any) {
        console.warn('Primary sendForm encountered error:', firstErr);
        
        const isHeadless = firstErr?.status === 451 || String(firstErr?.text || firstErr?.message).toLowerCase().includes('headless');
        if (isHeadless) {
          console.info('Retrying with blockHeadless disabled for preview environment...');
          await emailjs.sendForm(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            formRef.current,
            {
              publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
              blockHeadless: false
            }
          );
          sentSuccess = true;
        } else {
          // Attempt raw JSON send method as secondary backup
          try {
            await emailjs.send(
              EMAILJS_CONFIG.SERVICE_ID,
              EMAILJS_CONFIG.TEMPLATE_ID,
              {
                from_name: formData.from_name.trim(),
                from_email: formData.from_email.trim(),
                phone: formData.phone.trim() || 'Not provided',
                subject: formData.subject.trim(),
                message: formData.message.trim(),
                time: timestamp
              },
              {
                publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
                blockHeadless: false
              }
            );
            sentSuccess = true;
          } catch (secondErr: any) {
            throw secondErr || firstErr;
          }
        }
      }

      if (sentSuccess) {
        setStatus('success');
        setNotification({
          type: 'success',
          title: 'Delivery Confirmed',
          message: 'Thank you! Your message has been sent successfully. I will get back to you as soon as possible.'
        });

        setFormData(INITIAL_FORM);

        setTimeout(() => {
          setStatus('idle');
        }, 4500);
      }
    } catch (err: any) {
      console.error('EmailJS transmission error:', err);
      setStatus('error');

      const rawText = String(err?.text || err?.message || '');
      const isTemplateNotFound = rawText.toLowerCase().includes('template id not found') || err?.status === 400;
      const isHeadless = err?.status === 451 || rawText.toLowerCase().includes('headless');

      if (isTemplateNotFound) {
        setNotification({
          type: 'error',
          title: 'EmailJS Configuration Notice',
          message: `The EmailJS service connected, but template ID "${EMAILJS_CONFIG.TEMPLATE_ID}" was not found in your EmailJS account.`,
          details: 'In your EmailJS Dashboard (dashboard.emailjs.com/admin/templates), please ensure your template is created and saved. Your message is safely kept below, and you can send it immediately via your email client.',
          isTemplateNotFound: true
        });
      } else if (isHeadless) {
        setNotification({
          type: 'error',
          title: 'Security Notice',
          message: 'Automated email transmission was restricted by browser security policies.',
          details: 'You can instantly dispatch your message using the pre-filled email client link below.',
          isTemplateNotFound: false
        });
      } else {
        setNotification({
          type: 'error',
          title: 'Submission Note',
          message: "We couldn't deliver your message via the automated service right now.",
          details: rawText || 'Please try again or use the pre-filled email client option below.',
          isTemplateNotFound: false
        });
      }
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Nyuon James Tut Duop"
      className="border-t border-slate-200 py-16 text-slate-800 transition-colors duration-300 dark:border-slate-800 dark:text-slate-100 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 border-b border-slate-200 pb-5 text-left dark:border-slate-700/80">
          <div className="mb-2 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-blue-600 dark:text-sky-400">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
              <MessageSquare className="h-3.5 w-3.5" />
            </div>
            <span>07 / CONTACT · NYUON | DIGITAL PORTFOLIO</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Start a Conversation
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
            Open to research, fieldwork, and professional opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5 lg:pr-8">
            <div className="space-y-6 lg:border-r lg:border-slate-200 lg:pr-8 dark:lg:border-slate-800">
              <div className="flex items-center gap-4 pb-5">
                <img
                  src={personalInfo.profileImage}
                  alt="Chuol Tut Duop"
                  className="h-16 w-16 rounded-full border border-slate-200 object-cover bg-slate-100 dark:border-slate-700 dark:bg-slate-800"
                />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    CHUOL TUT DUOP
                  </div>
                  <div className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
                    B.Sc. Candidate
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Natural Resources &amp; Management
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" />
                <span>Kebri Dahar, Somali Region, Ethiopia</span>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-600 dark:text-sky-400">
                  Direct Channels
                </div>

                <ul className="space-y-2">
                  <li>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="group flex items-center justify-between gap-3 border-b border-slate-200 py-2 text-sm text-slate-700 transition-colors hover:text-blue-700 dark:border-slate-800 dark:text-slate-200 dark:hover:text-sky-300"
                    >
                      <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        <Mail className="h-3.5 w-3.5" />
                        Email
                      </span>
                      <span className="flex items-center gap-2 text-right text-slate-800 dark:text-slate-100">
                        <span className="truncate">{personalInfo.email}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="group flex items-center justify-between gap-3 border-b border-slate-200 py-2 text-sm text-slate-700 transition-colors hover:text-blue-700 dark:border-slate-800 dark:text-slate-200 dark:hover:text-sky-300"
                    >
                      <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        <Phone className="h-3.5 w-3.5" />
                        Phone
                      </span>
                      <span className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
                        <span>{personalInfo.phone}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 border-b border-slate-200 py-2 text-sm text-slate-700 transition-colors hover:text-blue-700 dark:border-slate-800 dark:text-slate-200 dark:hover:text-sky-300"
                    >
                      <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        <Linkedin className="h-3.5 w-3.5" />
                        LinkedIn
                      </span>
                      <span className="flex items-center gap-2">
                        <span>Connect on LinkedIn</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={personalInfo.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 border-b border-slate-200 py-2 text-sm text-slate-700 transition-colors hover:text-blue-700 dark:border-slate-800 dark:text-slate-200 dark:hover:text-sky-300"
                    >
                      <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        <Facebook className="h-3.5 w-3.5" />
                        Facebook
                      </span>
                      <span className="flex items-center gap-2">
                        <span>Connect on Facebook</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={personalInfo.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full items-center justify-between gap-3 border-b border-slate-200 py-2 text-left text-sm text-slate-700 transition-colors hover:text-blue-700 dark:border-slate-800 dark:text-slate-200 dark:hover:text-sky-300"
                      aria-label="View CV"
                    >
                      <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        <FileText className="h-3.5 w-3.5" />
                        CV
                      </span>
                      <span className="flex items-center gap-2">
                        <span>View CV</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border-t border-slate-200 pt-5 dark:border-slate-800">
                <div className="mb-3 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>Academic Reference</span>
                </div>
                <div className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
                  <div className="font-semibold text-slate-900 dark:text-white">{academicReference.name}</div>
                  <div>{academicReference.title}</div>
                  <div className="text-slate-600 dark:text-slate-300">{academicReference.institution}</div>
                  <div className="pt-1 text-slate-600 dark:text-slate-300">
                    Phone: {academicReference.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-2">
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-sky-400">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Send a Message
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use the form for research, fieldwork, or professional inquiries.
                </p>
              </div>

              {notification && (
                <div
                  id="contact-notification"
                  role={notification.type === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                  className={`flex items-start gap-3 rounded-lg border p-4 text-xs leading-relaxed ${
                    notification.type === 'success'
                      ? 'border-blue-200 bg-blue-50 text-blue-950 dark:border-blue-900/60 dark:bg-blue-950/20 dark:text-sky-200'
                      : 'border-red-200 bg-red-50 text-red-950 dark:border-red-900/60 dark:bg-red-950/20 dark:text-red-100'
                  }`}
                >
                  {notification.type === 'success' ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600 dark:text-sky-400" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-4 w-4 text-red-600 dark:text-red-400" />
                  )}

                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-semibold">{notification.title}</p>
                    <p>{notification.message}</p>

                    {notification.details && (
                      <p className="text-[11px] opacity-90">{notification.details}</p>
                    )}

                    {notification.type === 'error' && (
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <a
                          href={getMailtoHref()}
                          className="inline-flex items-center gap-1.5 rounded-full bg-red-700 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-white transition-colors hover:bg-red-800"
                        >
                          <Mail className="h-3 w-3" />
                          Open in Email App
                          <ArrowUpRight className="h-3 w-3" />
                        </a>

                        <button
                          type="button"
                          onClick={handleCopyMessage}
                          className="inline-flex items-center gap-1.5 rounded-full border border-red-300 bg-white px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-red-900 transition-colors hover:bg-red-50 dark:border-red-800 dark:bg-slate-900 dark:text-red-100 dark:hover:bg-slate-800"
                        >
                          {copied ? (
                            <>
                              <Check className="h-3 w-3 text-sky-500" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              Copy Message
                            </>
                          )}
                        </button>

                        {notification.isTemplateNotFound && (
                          <a
                            href="https://dashboard.emailjs.com/admin/templates"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-[0.16em] text-red-900 underline dark:text-red-200"
                          >
                            EmailJS Dashboard
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setNotification(null)}
                    className="rounded-full p-1 text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-200"
                    aria-label="Dismiss notification"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}

              <form
                ref={formRef}
                id="emailjs-contact-form"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4 text-left"
              >
                <div
                  className="hidden"
                  aria-hidden="true"
                  style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleInputChange}
                  />
                </div>

                <input type="hidden" name="time" value={getAddisAbabaTimestamp()} />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-from-name" className="mb-1.5 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      <UserRound className="h-3.5 w-3.5" />
                      <span>Full Name <span className="text-blue-600 dark:text-sky-400">*</span></span>
                    </label>
                    <input
                      id="contact-from-name"
                      name="from_name"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.from_name)}
                      aria-describedby={errors.from_name ? 'name-error' : undefined}
                      value={formData.from_name}
                      onChange={handleInputChange}
                      placeholder="e.g. Dr. Jane Doe / Organization Name"
                      className={`w-full border-b border-slate-300 bg-transparent px-0 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:text-white dark:placeholder:text-slate-500 ${
                        errors.from_name ? 'border-red-400' : ''
                      }`}
                    />
                    {errors.from_name && (
                      <p id="name-error" className="mt-1 text-[11px] text-red-600 dark:text-red-400">{errors.from_name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-from-email" className="mb-1.5 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      <Mail className="h-3.5 w-3.5" />
                      <span>Email Address <span className="text-blue-600 dark:text-sky-400">*</span></span>
                    </label>
                    <input
                      id="contact-from-email"
                      name="from_email"
                      type="email"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.from_email)}
                      aria-describedby={errors.from_email ? 'email-error' : undefined}
                      value={formData.from_email}
                      onChange={handleInputChange}
                      placeholder="e.g. contact@organization.org"
                      className={`w-full border-b border-slate-300 bg-transparent px-0 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:text-white dark:placeholder:text-slate-500 ${
                        errors.from_email ? 'border-red-400' : ''
                      }`}
                    />
                    {errors.from_email && (
                      <p id="email-error" className="mt-1 text-[11px] text-red-600 dark:text-red-400">{errors.from_email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="mb-1.5 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    <Phone className="h-3.5 w-3.5" />
                    <span>Phone Number <span className="text-slate-400">(Optional)</span></span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +251 91 234 5678"
                    className="w-full border-b border-slate-300 bg-transparent px-0 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <label htmlFor="contact-subject" className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      <FileText className="h-3.5 w-3.5" />
                      <span>Subject <span className="text-blue-600 dark:text-sky-400">*</span></span>
                    </label>
                    <span className="text-[9px] text-slate-400 dark:text-slate-500">or select topic below</span>
                  </div>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Internship Opportunity / Research Fellowship"
                    className={`w-full border-b border-slate-300 bg-transparent px-0 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:text-white dark:placeholder:text-slate-500 ${
                      errors.subject ? 'border-red-400' : ''
                    }`}
                  />

                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-[11px] text-red-600 dark:text-red-400">{errors.subject}</p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-2">
                    {SUGGESTED_SUBJECTS.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleSelectSuggestedSubject(item)}
                        className={`rounded-full border px-3 py-1 text-[10px] font-mono uppercase tracking-[0.16em] transition-colors ${
                          formData.subject === item
                            ? 'border-blue-600 bg-blue-600 text-white dark:border-sky-400 dark:bg-sky-500 dark:text-slate-950'
                            : 'border-slate-200 bg-white/50 text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Message <span className="text-blue-600 dark:text-sky-400">*</span></span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your organization, prospective program, or inquiry..."
                    className={`w-full resize-y border-b border-slate-300 bg-transparent px-0 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:text-white dark:placeholder:text-slate-500 ${
                      errors.message ? 'border-red-400' : ''
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-[11px] text-red-600 dark:text-red-400">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={status === 'sending'}
                    className={`flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[10px] font-mono uppercase tracking-[0.2em] transition-all ${
                      status === 'sending'
                        ? 'cursor-wait bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900'
                        : status === 'success'
                        ? 'bg-blue-600 text-white'
                        : status === 'error'
                        ? 'bg-amber-600 text-white hover:bg-amber-500'
                        : 'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
                    }`}
                  >
                    {status === 'sending' && <Loader2 className="h-4 w-4 animate-spin" />}
                    {status === 'success' && <CheckCircle2 className="h-4 w-4" />}
                    {status === 'error' && <Send className="h-4 w-4" />}
                    {status === 'idle' && <Send className="h-4 w-4" />}
                    <span>
                      {status === 'sending' && 'Sending Message...'}
                      {status === 'success' && 'Message Sent ✓'}
                      {status === 'error' && 'Try Again'}
                      {status === 'idle' && 'Send Message →'}
                    </span>
                  </button>
                </div>

                <div className="pt-2 text-[10px] font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" />
                    <span>Protected by Anti-Spam &amp; Rate-Limiting</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 border-t border-slate-200 pt-2 dark:border-slate-800">
                    <span>Timezone:</span>
                    <span className="text-slate-700 dark:text-slate-200">Africa/Addis_Ababa</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
