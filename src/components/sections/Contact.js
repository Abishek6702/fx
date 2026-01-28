"use client";

import { useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const trackEvent = (name, params = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    if (!value.trim()) return "This field is required";
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Enter a valid email address";
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) {
      setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      if (!res.ok) throw new Error();

      toast.success("Enquiry Request Submitted");
      trackEvent("contact_form_submitted", {
        has_name: !!form.name,
        has_email: !!form.email,
      });

      setForm(initialState);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-[#070d17]">
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center justify-center ">
        {/* LEFT: FORM */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Get in touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1 mb-6">
            Let’s chat about how our expert team can help you.
          </p>

          <div className="bg-white dark:bg-[#0f172a] rounded-xl p-6 shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm
                    ${errors.name ? "border-red-500" : "border-gray-300"}
                    dark:bg-[#0f172a] dark:border-zinc-700 dark:text-white`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm
                    ${errors.email ? "border-red-500" : "border-gray-300"}
                    dark:bg-[#0f172a] dark:border-zinc-700 dark:text-white`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm resize-none
                    ${errors.message ? "border-red-500" : "border-gray-300"}
                    dark:bg-[#0f172a] dark:border-zinc-700 dark:text-white`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg gradient text-white py-2 font-semibold"
              >
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="hidden lg:flex justify-center ">
          <Image
            src={"/tabd.svg"}
            width={400}
            height={400}
            alt="Contact illustration"
            className="dark:hidden"
            priority
          />
          <Image
            src={"/tabd.svg"}
            width={400}
            height={400}
            alt="Contact illustration"
            className="hidden dark:block"
            priority
          />
        </div>
      </div>
    </section>
  );
}
