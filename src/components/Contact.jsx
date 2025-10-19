import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import Cubes from "./extra/Cubes";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;
const TEMPLATE_REPLY = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY;
const COOLDOWN_SECONDS = 100;

emailjs.init(PUBLIC_KEY);

export default function Contact({ isDarkMode }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(() => {
    const last = localStorage.getItem("lastSend");
    if (!last) return 0;
    const elapsed = Math.floor((Date.now() - parseInt(last, 10)) / 1000);
    return elapsed < COOLDOWN_SECONDS ? COOLDOWN_SECONDS - elapsed : 0;
  });

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => setCooldown((c) => c - 1), 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const commonParams = {
      title: "Contact Form",
      time: new Date().toLocaleString(),
      name: form.name,
      email: form.email,
      message: form.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_CONTACT, commonParams)
      .then(() =>
        emailjs.send(SERVICE_ID, TEMPLATE_REPLY, {
          name: form.name,
          email: form.email,
          title: commonParams.title,
        })
      )
      .then(() => {
        setSubmitted(true);
        setCooldown(COOLDOWN_SECONDS);
        localStorage.setItem("lastSend", Date.now().toString());
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) =>
        setError(`Error ${err.status || ""}: ${err.text || err}`)
      );
  };

  const isDisabled = submitted || cooldown > 0;

  return (
    <section
      id="contact"
      className={`relative scroll-mt-24 min-h-screen py-20 px-6 md:px-12 transition-colors duration-700 overflow-hidden `}
    >
      {/* 🧊 Interactive Cube Background with Top Gradient Fade */}
      <div className="absolute inset-0 -z-10 pointer-events-auto">
        <Cubes
          gridSize={9}
          maxAngle={55}
          radius={4}
          faceColor={isDarkMode ? "#0f0820" : "#e9e9ef"}
          borderStyle="1px solid #5b21b6"
          rippleColor={isDarkMode ? "#a855f7" : "#7e22ce"}
          rippleSpeed={1.2}
          autoAnimate={true}
          rippleOnClick={true}
        />

        {/* 🔳 Gradient fade overlay */}
        <div
          className={`absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-purple-200/30 to-[var(--background)] `}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 container mx-auto max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center mb-20">
          Get In <span className="text-purple-500">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8 bg-black/20 dark:bg-black/40 p-8 rounded-2xl border border-purple-500 backdrop-blur-md">
            {[
              {
                icon: <MapPin className="w-6 h-6 text-purple-500 mt-1" />,
                title: "Location",
                text: "Tupi, South Cotabato, Philippines",
              },
              {
                icon: <Phone className="w-6 h-6 text-purple-500 mt-1" />,
                title: "Phone",
                text: "+63 963 1512 988",
              },
              {
                icon: <Mail className="w-6 h-6 text-purple-500 mt-1" />,
                title: "Email",
                text: "benzajtil@gmail.com",
              },
            ].map((info, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 hover:bg-purple-500/10 p-4 rounded-xl transition-all duration-300"
              >
                {info.icon}
                <div>
                  <h3 className="font-semibold text-xl text-purple-400">
                    {info.title}
                  </h3>
                  <p className="text-[var(--foreground)]">{info.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`relative z-10 w-full max-w-md bg-white/10 dark:bg-purple-950/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl space-y-6 transition-all duration-500`}
          >
            {submitted ? (
              <div className="p-6 bg-purple-600/80 rounded-xl text-center text-white font-semibold">
                Thanks for reaching out! 💜 I’ll reply soon.
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-center text-purple-400">
                  Drop me a Message
                </h3>

                <div className="space-y-4">
                  {["name", "email", "message"].map((field) => (
                    <div key={field}>
                      <label
                        htmlFor={field}
                        className="block text-sm font-semibold text-purple-300 mb-2"
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>

                      {field === "message" ? (
                        <textarea
                          id={field}
                          name={field}
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          required
                          placeholder="Write your message..."
                          className="w-full rounded-xl bg-purple-100/10 dark:bg-purple-950/40 border border-purple-400/30 px-4 py-3 text-gray-100 placeholder-purple-300 focus:ring-2 focus:ring-purple-500 outline-none resize-none transition"
                        />
                      ) : (
                        <input
                          type={field === "email" ? "email" : "text"}
                          id={field}
                          name={field}
                          value={form[field]}
                          onChange={handleChange}
                          required
                          placeholder={`Your ${field}`}
                          className="w-full rounded-xl bg-purple-100/10 dark:bg-purple-950/40 border border-purple-400/30 px-4 py-3 text-gray-100 placeholder-purple-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {error && (
                  <p className="text-red-400 text-center text-sm font-medium">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isDisabled}
                  className={`mt-4 w-full flex justify-center items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
                    isDisabled
                      ? "bg-purple-900/50 text-purple-300 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg hover:shadow-purple-500/50 hover:scale-[1.03]"
                  }`}
                >
                  {isDisabled ? `⏳ Wait ${cooldown}s` : "Send Message"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
