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
    const params = {
      title: "Contact Form",
      time: new Date().toLocaleString(),
      name: form.name,
      email: form.email,
      message: form.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_CONTACT, params)
      .then(() =>
        emailjs.send(SERVICE_ID, TEMPLATE_REPLY, {
          name: form.name,
          email: form.email,
          title: params.title,
        })
      )
      .then(() => {
        setSubmitted(true);
        setCooldown(COOLDOWN_SECONDS);
        localStorage.setItem("lastSend", Date.now().toString());
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => setError(`Error: ${err.text || err.message}`));
  };

  const isDisabled = submitted || cooldown > 0;

  return (
    <section
      id="contact"
      className={`relative min-h-screen py-24 px-6 sm:px-10 overflow-hidden ${
        isDarkMode ? "text-gray-100" : "text-gray-900"
      }`}
    >
      {/* 🧊 CUBES AS INTERACTIVE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Cubes
          gridSize={10}
          radius={5}
          cubeSize={90}
          borderStyle="1px solid rgba(255,255,255,0.1)"
          faceColor={isDarkMode ? "#0c0c15" : "#f0f0f0"}
          rippleColor={isDarkMode ? "#a855f7" : "#7e22ce"}
          rippleSpeed={1.5}
          autoAnimate={true}
          rippleOnClick={true}
        />
      </div>

      {/* Transparent overlay to preserve glass blur but allow pointer events */}
      <div className="absolute inset-0 z-10 pointer-events-none backdrop-blur-[2px]" />

      {/* Foreground content */}
      <div className="relative z-20 pointer-events-auto container mx-auto max-w-6xl">
        <h2 className="text-4xl font-extrabold text-center mb-20">
          Let’s <span className="text-purple-500">Connect</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info Cards */}
          <div className="space-y-8 bg-black/30 dark:bg-white/5 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-md">
            {[
              {
                icon: <MapPin className="w-6 h-6 text-purple-400 mt-1" />,
                title: "Location",
                text: "Tupi, South Cotabato, Philippines",
              },
              {
                icon: <Phone className="w-6 h-6 text-purple-400 mt-1" />,
                title: "Phone",
                text: "+63 963 1512 988",
              },
              {
                icon: <Mail className="w-6 h-6 text-purple-400 mt-1" />,
                title: "Email",
                text: "benzajtil@gmail.com",
              },
            ].map((info, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300"
              >
                {info.icon}
                <div>
                  <h3 className="font-semibold text-xl text-purple-400">
                    {info.title}
                  </h3>
                  <p className="text-gray-400">{info.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-md mx-auto bg-white/10 dark:bg-purple-950/30 border border-purple-400/30 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.25)] space-y-6 transition-transform duration-300 hover:scale-[1.01]"
          >
            {submitted ? (
              <div className="p-6 bg-purple-600/80 rounded-xl text-center text-white font-semibold">
                💜 Message Sent! I’ll get back to you soon.
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-center text-purple-400">
                  Drop Me a Line
                </h3>
                <p className="text-center text-sm text-gray-400 mb-4">
                  Let’s talk about your ideas or projects!
                </p>

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
                        placeholder="Your message..."
                        className="w-full rounded-xl bg-black/30 border border-purple-500/40 px-4 py-3 text-gray-100 placeholder-purple-300 focus:ring-2 focus:ring-purple-500 outline-none resize-none transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
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
                        className="w-full rounded-xl bg-black/30 border border-purple-500/40 px-4 py-3 text-gray-100 placeholder-purple-300 focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                      />
                    )}
                  </div>
                ))}

                {error && (
                  <p className="text-red-400 text-center text-sm font-medium">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isDisabled}
                  className={`w-full mt-4 py-3 font-semibold rounded-xl transition-all duration-300 ${
                    isDisabled
                      ? "bg-purple-900/50 text-purple-300 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white shadow-lg hover:shadow-purple-500/60 hover:scale-[1.03]"
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
