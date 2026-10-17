"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Website Development",
    projectDescription: "",
    honeypot: "", // hidden anti-spam field
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "Website Development",
        projectDescription: "",
        honeypot: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Hidden Honeypot Field */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {status === "success" ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-emerald-900">Message Sent Successfully!</h3>
          <p className="text-emerald-700 text-sm leading-relaxed max-w-md mx-auto">
            Thank you for reaching out. We have received your project requirements and will get back to you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-2.5 rounded-xl text-sm transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <>
          {status === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Company (Optional) */}
            <div className="space-y-2">
              <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Inc."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-all"
              />
            </div>

            {/* Project Type */}
            <div className="space-y-2">
              <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-all"
              >
                <option value="Website Development">Website Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Custom Software">Custom Software</option>
                <option value="Cloud & DevOps">Cloud & DevOps</option>
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <label htmlFor="projectDescription" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
              Project Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              required
              rows={5}
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Tell us about your project, goals, timeline and technical requirements..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-900 focus:bg-white focus:outline-none focus:border-blue-600 transition-all resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#0B1220] hover:bg-gray-800 disabled:bg-gray-400 text-white font-medium py-4 px-8 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all text-sm cursor-pointer"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </>
      )}
    </form>
  );
}
