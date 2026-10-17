import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import Cubes from "./extra/Cubes";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;
const TEMPLATE_REPLY = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY;
const COOLDOWN_SECONDS = 100;
const COOLDOWN_KEY = "contactLastSend";

export default function Contact({ isDarkMode = false }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(() => {
    try {
      const last = Number(localStorage.getItem(COOLDOWN_KEY));
      if (!last) return 0;

      const elapsed = Math.floor((Date.now() - last) / 1000);
      return Math.max(0, COOLDOWN_SECONDS - elapsed);
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = window.setInterval(() => {
      setCooldown((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [cooldown]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSubmitted(false);

    if (isSending || cooldown > 0) return;

    if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_CONTACT) {
      setError(
        "The contact form is not configured yet. Please email me directly.",
      );
      return;
    }

    setIsSending(true);

    const contactParams = {
      title: "Portfolio Contact Form",
      time: new Date().toLocaleString(),
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_CONTACT, contactParams, {
        publicKey: PUBLIC_KEY,
      });

      // The main message was sent successfully.
      // The confirmation email is optional and may fail independently.
      let replyWarning = "";

      if (TEMPLATE_REPLY) {
        try {
          await emailjs.send(
            SERVICE_ID,
            TEMPLATE_REPLY,
            {
              name: contactParams.name,
              email: contactParams.email,
              title: contactParams.title,
            },
            { publicKey: PUBLIC_KEY },
          );
        } catch {
          replyWarning =
            " Your message was sent, but the confirmation email could not be sent.";
        }
      }

      setSubmitted(true);
      setError(replyWarning);
      setForm({ name: "", email: "", message: "" });

      const sentAt = Date.now();

      try {
        localStorage.setItem(COOLDOWN_KEY, String(sentAt));
      } catch {
        // The form can still work when browser storage is unavailable.
      }

      setCooldown(COOLDOWN_SECONDS);
    } catch (err) {
      setError(
        err?.text
          ? `Unable to send your message: ${err.text}`
          : "Unable to send your message. Please try again or contact me by email.",
      );
    } finally {
      setIsSending(false);
    }
  };

  const textColor = isDarkMode ? "text-gray-100" : "text-gray-900";
  const mutedColor = isDarkMode ? "text-gray-300" : "text-gray-600";

  const panelStyle = isDarkMode
    ? "border-white/10 bg-[#14121c]/85"
    : "border-gray-200 bg-white/85";

  const inputStyle = isDarkMode
    ? "border-white/15 bg-black/25 text-gray-100 placeholder:text-gray-400 focus:border-purple-400"
    : "border-gray-300 bg-white/80 text-gray-900 placeholder:text-gray-500 focus:border-purple-500";

  const contactInfo = [
    {
      icon: <MapPin size={22} />,
      title: "Location",
      text: "Tupi, South Cotabato, Philippines",
    },
    {
      icon: <Phone size={22} />,
      title: "Phone",
      text: "+63 963 1512 988",
      href: "tel:+639631512988",
    },
    {
      icon: <Mail size={22} />,
      title: "Email",
      text: "benflorence.dev@gmail.com",
      href: "mailto:benflorence.dev@gmail.com",
    },
  ];

  const isDisabled = isSending || cooldown > 0;

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:py-28"
    >
      {/* Interactive background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-auto absolute inset-0">
          <Cubes
            gridSize={9}
            maxAngle={55}
            radius={4}
            faceColor={isDarkMode ? "#171323" : "#e9e9ef"}
            borderStyle={`1px solid ${isDarkMode ? "#6d28d9" : "#a78bfa"}`}
            rippleColor={isDarkMode ? "#c084fc" : "#7e22ce"}
            rippleSpeed={1.2}
            autoAnimate={true}
            rippleOnClick={true}
          />
        </div>

        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-[var(--background)]/65 via-[var(--background)]/55 to-[var(--background)]/90"
              : "bg-gradient-to-b from-[var(--background)]/70 via-white/55 to-[var(--background)]/90"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mb-12 text-center sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400">
            Let's Connect
          </p>

          <h2
            className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl ${textColor}`}
          >
            Get In <span className="text-purple-400">Touch</span>
          </h2>

          <p
            className={`mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base ${mutedColor}`}
          >
            Have a project, opportunity, or question? Send me a message. I'd be
            happy to hear from you.
          </p>

          <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400" />
        </header>

        <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Contact details */}
          <div
            className={`rounded-2xl border p-5 shadow-xl backdrop-blur-xl sm:p-7 ${panelStyle}`}
          >
            <h3 className={`text-xl font-bold ${textColor}`}>
              Contact Information
            </h3>

            <p className={`mt-2 text-sm leading-6 ${mutedColor}`}>
              You can reach me through any of the following channels.
            </p>

            <div className="mt-6 space-y-3">
              {contactInfo.map((item) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                      {item.icon}
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-purple-400">
                        {item.title}
                      </span>
                      <span
                        className={`mt-1 block break-words text-sm ${mutedColor}`}
                      >
                        {item.text}
                      </span>
                    </span>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`flex items-center gap-4 rounded-xl border border-transparent p-3 transition-colors hover:border-purple-400/30 hover:bg-purple-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${textColor}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-xl p-3"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className={`rounded-2xl border p-5 shadow-xl backdrop-blur-xl sm:p-8 ${panelStyle}`}
          >
            <h3 className={`text-xl font-bold ${textColor}`}>
              Send Me a Message
            </h3>

            <p className={`mt-2 text-sm leading-6 ${mutedColor}`}>
              Fill in the form and I'll get back to you as soon as I can.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className={`mb-2 block text-sm font-semibold ${textColor}`}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  placeholder="Your name"
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-purple-500/40 ${inputStyle}`}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className={`mb-2 block text-sm font-semibold ${textColor}`}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  maxLength={254}
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-purple-500/40 ${inputStyle}`}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className={`mb-2 block text-sm font-semibold ${textColor}`}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                  placeholder="Tell me about your project or opportunity..."
                  className={`w-full resize-y rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-purple-500/40 ${inputStyle}`}
                />
              </div>
            </div>

            {error && (
              <p
                role="status"
                className={`mt-4 text-sm leading-6 ${
                  submitted ? "text-amber-400" : "text-red-400"
                }`}
              >
                {error}
              </p>
            )}

            {submitted && (
              <div
                role="status"
                className="mt-5 flex items-start gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-500"
              >
                <CheckCircle2 className="mt-0.5 shrink-0" size={20} />
                <p>
                  Your message has been sent successfully. Thank you for
                  reaching out!
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isDisabled || submitted}
              className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 ${
                isDisabled || submitted
                  ? "cursor-not-allowed bg-purple-900/50 text-purple-200/70"
                  : "bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-lg shadow-purple-500/20 hover:-translate-y-0.5 hover:shadow-purple-500/30"
              }`}
            >
              {isSending ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending...
                </>
              ) : cooldown > 0 ? (
                `Please wait ${cooldown}s`
              ) : submitted ? (
                <>
                  <CheckCircle2 size={18} />
                  Message Sent
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            <p className={`mt-4 text-center text-xs leading-5 ${mutedColor}`}>
              Your details are used to respond to your message.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
