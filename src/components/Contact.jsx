import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

emailjs.init("aAE8KVxHN3pftW0wL");

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const commonParams = {
      title: "Contact Us Form",
      time: new Date().toLocaleString(),
      name: form.name,
      email: form.email,
      message: form.message,
    };
    emailjs
      .send("service_qp82eet", "template_npxedcr", commonParams)
      .then(() =>
        emailjs.send("service_qp82eet", "template_ozkhleb", {
          name: form.name,
          email: form.email,
          title: commonParams.title,
        })
      )
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError(`Error ${err.status || ""}: ${err.text || err}`);
      });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-20 text-black"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-green-300 mt-1" />
              <div>
                <h3 className="font-semibold text-xl">Location</h3>
                <p className="text-gray-400">
                  Tupi, South Cotabato, Philippines
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-green-300 mt-1" />
              <div>
                <h3 className="font-semibold text-xl">Phone</h3>
                <p className="text-gray-400">+63 963 1512 988</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-green-300 mt-1" />
              <div>
                <h3 className="font-semibold text-xl">Email</h3>
                <p className="text-gray-400">benzajtil@gmail.com</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitted ? (
              <div className="p-6 bg-green-800 rounded-lg text-center">
                <p className="font-medium text-white">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded bg-gray-300 border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded bg-gray-300 border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded bg-gray-300 border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-amber-300 text-gray-900 font-semibold rounded hover:bg-amber-400 transition"
                >
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
