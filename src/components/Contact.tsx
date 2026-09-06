import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  Linkedin, 
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
  UserCheck
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
      className="py-20 lg:py-28 bg-transparent text-slate-800 dark:text-slate-100 border-t border-slate-200 dark:border-blue-900/30 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-slate-200 dark:border-blue-900/30 text-left">
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-600 dark:text-sky-400 font-bold mb-2 flex items-center space-x-2">
            <span>07 / DIRECT INQUIRIES &amp; COLLABORATIONS</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500 dark:text-slate-400 font-normal tracking-wider">
              {EMAILJS_CONFIG.BRAND_NAME}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Work Toward a More Sustainable Future
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mt-3 font-light">
            All direct communication channels, verified coordinates, academic reference information, and immediate messaging are consolidated here.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          {/* Left Column: Direct Coordinates & Strategic Communication Headquarters */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl glass-card space-y-6">
              {/* Header Status */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-blue-900/40">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-700 dark:text-sky-300 font-bold">
                    Official Contact Hub
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                  <span>Response: &lt; 24h</span>
                </div>
              </div>

              {/* Scholar Identity Brief */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight font-comic">
                  Chuol Tut Duop
                </h3>
                <div className="flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-400">
                  <GraduationCap className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
                  <span>Senior B.Sc. Candidate (Natural Resources &amp; Management)</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
                  <span>Addis Ababa &amp; Kebri Dahar, Ethiopia</span>
                </div>
              </div>

              {/* Verified Direct Channels */}
              <div className="space-y-3 pt-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold">
                  Direct Inquiries &amp; Channels
                </div>

                {/* Email Box with One-Click Copy */}
                <div className="p-3.5 rounded-xl bg-white/70 dark:bg-black/40 border border-slate-200 dark:border-blue-500/20 hover:border-blue-500 backdrop-blur-md transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase text-blue-600 dark:text-sky-400 font-semibold flex items-center space-x-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      <span>Official Inbox</span>
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-[10px] font-mono inline-flex items-center space-x-1 text-blue-600 dark:text-sky-300 hover:underline cursor-pointer"
                    >
                      {emailCopied ? (
                        <>
                          <Check className="w-3 h-3 text-sky-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${EMAILJS_CONFIG.DESTINATION_EMAIL}`}
                    className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-300 transition-colors break-all block"
                  >
                    {EMAILJS_CONFIG.DESTINATION_EMAIL}
                  </a>
                </div>

                {/* Phone Channel */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/70 hover:bg-white dark:bg-black/40 dark:hover:bg-blue-950/30 border border-slate-200 dark:border-blue-500/20 hover:border-blue-500 text-slate-900 dark:text-white text-xs font-medium backdrop-blur-md transition-all"
                >
                  <div className="flex items-center space-x-2.5">
                    <Phone className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                </a>

                {/* LinkedIn Channel */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/70 hover:bg-white dark:bg-black/40 dark:hover:bg-blue-950/30 border border-slate-200 dark:border-blue-500/20 hover:border-blue-500 text-slate-900 dark:text-white text-xs font-medium backdrop-blur-md transition-all"
                >
                  <div className="flex items-center space-x-2.5">
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                    <span>Connect on LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                </a>

                {/* CV Action */}
                <button
                  type="button"
                  onClick={onOpenCV}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/70 hover:bg-white dark:bg-black/40 dark:hover:bg-blue-950/30 border border-slate-200 dark:border-blue-500/20 hover:border-blue-500 text-slate-900 dark:text-white text-xs font-medium backdrop-blur-md transition-all w-full text-left cursor-pointer"
                >
                  <div className="flex items-center space-x-2.5">
                    <FileText className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                    <span>Review Academic CV (Online CV)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                </button>
              </div>

              {/* Academic Reference Card (Consolidated) */}
              <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/40 space-y-1.5 text-xs">
                <div className="flex items-center space-x-1.5 text-[10px] font-mono text-blue-700 dark:text-sky-300 font-bold uppercase tracking-wider">
                  <UserCheck className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                  <span>Academic Reference</span>
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">
                  {academicReference.name}
                </div>
                <div className="text-blue-700 dark:text-sky-300 font-medium">
                  {academicReference.title}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-xs">
                  {academicReference.institution} · Phone: {academicReference.phone}
                </div>
              </div>

              {/* Verification & Privacy Commitment */}
              <div className="pt-2 border-t border-slate-200 dark:border-blue-900/40 flex items-start space-x-2.5 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Inquiries transmitted through this dossier are routed directly to <strong className="font-mono text-slate-900 dark:text-white">Nyuonjamestutduop@gmail.com</strong>.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive EmailJS Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-2xl glass-card space-y-6">
              {/* Form Title & Subtitle */}
              <div>
                <div className="flex items-center space-x-2 mb-2 text-[10px] font-mono text-blue-600 dark:text-sky-400 uppercase font-bold tracking-widest">
                  <MessageSquare className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  <span>Send a Direct Message</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Initiate a Conversation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-light">
                  Submit an inquiry regarding fellowships, research collaborations, or conservation programs. Messages are transmitted securely to <strong className="text-slate-900 dark:text-white font-medium">{EMAILJS_CONFIG.DESTINATION_EMAIL}</strong>.
                </p>
              </div>

              {/* Status Notification / Toast */}
              {notification && (
                <div
                  id="contact-notification"
                  role={notification.type === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                  className={`p-4 rounded-xl border flex items-start space-x-3 text-xs leading-relaxed transition-all duration-200 ${
                    notification.type === 'success'
                      ? 'bg-blue-500/15 border-blue-600/40 text-blue-950 dark:text-sky-200 backdrop-blur-md'
                      : 'bg-red-500/15 border-red-600/40 text-red-950 dark:text-red-200 backdrop-blur-md'
                  }`}
                >
                  {notification.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 space-y-2">
                    <p className="font-semibold text-sm">
                      {notification.title}
                    </p>
                    <p className="text-xs leading-relaxed">{notification.message}</p>
                    
                    {notification.details && (
                      <p className="text-[11px] opacity-90 leading-relaxed font-light">
                        {notification.details}
                      </p>
                    )}

                    {notification.type === 'error' && (
                      <div className="pt-2.5 border-t border-red-400/30 dark:border-red-900/40 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <a
                            href={getMailtoHref()}
                            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-red-700 hover:bg-red-800 text-white text-xs font-medium transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-red-500"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Open in Email App (Pre-Filled)</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>

                          <button
                            type="button"
                            onClick={handleCopyMessage}
                            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/70 dark:bg-black/40 border border-red-300 dark:border-red-800/60 hover:bg-red-50 dark:hover:bg-black/60 text-red-950 dark:text-red-200 text-xs font-medium backdrop-blur-xs transition-colors cursor-pointer"
                          >
                            {copied ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-sky-400" />
                                <span className="text-sky-300">Copied to Clipboard!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Message Details</span>
                              </>
                            )}
                          </button>

                          {notification.isTemplateNotFound && (
                            <a
                              href="https://dashboard.emailjs.com/admin/templates"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 text-[11px] text-red-900 dark:text-red-300 hover:underline font-medium ml-auto"
                            >
                              <span>EmailJS Dashboard</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>

                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Alternatively send directly to:{' '}
                          <a
                            href={`mailto:${EMAILJS_CONFIG.DESTINATION_EMAIL}`}
                            className="font-mono font-semibold text-red-800 dark:text-red-300 underline hover:opacity-80"
                          >
                            {EMAILJS_CONFIG.DESTINATION_EMAIL}
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setNotification(null)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full cursor-pointer"
                    aria-label="Dismiss notification"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Contact Form */}
              <form
                ref={formRef}
                id="emailjs-contact-form"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4 text-left"
              >
                {/* Honeypot Anti-Spam Hidden Field */}
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

                {/* Submission Time variable generated for EmailJS template */}
                <input
                  type="hidden"
                  name="time"
                  value={getAddisAbabaTimestamp()}
                />

                {/* Row 1: Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-from-name"
                      className="block text-[10px] font-mono uppercase text-slate-600 dark:text-slate-400 mb-1.5 font-semibold"
                    >
                      Full Name <span className="text-blue-600 dark:text-sky-400">*</span>
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
                      className={`w-full px-4 py-2.5 rounded-xl border glass-input text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-all focus-visible:outline-2 focus-visible:outline-blue-500 ${
                        errors.from_name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-200 dark:border-blue-900/40 focus:border-blue-500'
                      }`}
                    />
                    {errors.from_name && (
                      <p id="name-error" className="text-[11px] text-red-600 dark:text-red-400 mt-1 font-medium">
                        {errors.from_name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-from-email"
                      className="block text-[10px] font-mono uppercase text-slate-600 dark:text-slate-400 mb-1.5 font-semibold"
                    >
                      Email Address <span className="text-blue-600 dark:text-sky-400">*</span>
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
                      className={`w-full px-4 py-2.5 rounded-xl border glass-input text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-all focus-visible:outline-2 focus-visible:outline-blue-500 ${
                        errors.from_email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-200 dark:border-blue-900/40 focus:border-blue-500'
                      }`}
                    />
                    {errors.from_email && (
                      <p id="email-error" className="text-[11px] text-red-600 dark:text-red-400 mt-1 font-medium">
                        {errors.from_email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone Number (Optional) */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-[10px] font-mono uppercase text-slate-600 dark:text-slate-400 mb-1.5 font-semibold"
                  >
                    Phone Number <span className="text-[10px] text-slate-400 font-normal font-sans">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +251 91 234 5678"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-blue-900/40 glass-input text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-all focus:border-blue-500 focus-visible:outline-2 focus-visible:outline-blue-500"
                    />
                  </div>
                </div>

                {/* Row 3: Subject */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="contact-subject"
                      className="block text-[10px] font-mono uppercase text-slate-600 dark:text-slate-400 font-semibold"
                    >
                      Subject <span className="text-blue-600 dark:text-sky-400">*</span>
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono">
                      or select topic below
                    </span>
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
                    className={`w-full px-4 py-2.5 rounded-xl border glass-input text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-all focus-visible:outline-2 focus-visible:outline-blue-500 ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-slate-200 dark:border-blue-900/40 focus:border-blue-500'
                    }`}
                  />

                  {errors.subject && (
                    <p id="subject-error" className="text-[11px] text-red-600 dark:text-red-400 mt-1 font-medium">
                      {errors.subject}
                    </p>
                  )}

                  {/* Suggested Topic Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {SUGGESTED_SUBJECTS.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleSelectSuggestedSubject(item)}
                        className={`text-[10px] px-3 py-1 rounded-full border transition-all cursor-pointer backdrop-blur-md ${
                          formData.subject === item
                            ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-600 dark:text-white dark:border-blue-500 font-semibold shadow-xs'
                            : 'bg-white/60 hover:bg-white dark:bg-black/30 dark:hover:bg-blue-950/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-blue-900/40'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[10px] font-mono uppercase text-slate-600 dark:text-slate-400 mb-1.5 font-semibold"
                  >
                    Message <span className="text-blue-600 dark:text-sky-400">*</span>
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
                    className={`w-full px-4 py-2.5 rounded-xl border glass-input text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm resize-y transition-all focus-visible:outline-2 focus-visible:outline-blue-500 ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-slate-200 dark:border-blue-900/40 focus:border-blue-500'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-[11px] text-red-600 dark:text-red-400 mt-1 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={status === 'sending'}
                    className={`w-full py-3.5 px-6 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center space-x-2 focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer ${
                      status === 'sending'
                        ? 'bg-blue-700 text-white cursor-wait opacity-90'
                        : status === 'success'
                        ? 'bg-blue-600 hover:bg-blue-500 text-white cursor-default'
                        : status === 'error'
                        ? 'bg-amber-600 hover:bg-amber-500 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                    }`}
                  >
                    {status === 'sending' && (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-sky-200" />
                        <span>Sending Message...</span>
                      </>
                    )}
                    {status === 'success' && (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                        <span>Message Sent ✓</span>
                      </>
                    )}
                    {status === 'error' && (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Try Again</span>
                      </>
                    )}
                    {status === 'idle' && (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Footer Transmission Metadata */}
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    <span>Protected by Anti-Spam &amp; Rate-Limiting</span>
                  </span>
                  <span>Timezone: Africa/Addis_Ababa</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
