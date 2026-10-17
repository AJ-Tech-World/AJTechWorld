import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — AJ Tech World",
  description:
    "Let's build something great. Share your project requirements and we'll get back to you with the next steps.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>{" "}
            / <span className="text-blue-600">Contact</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Let's build something great
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Have a project in mind? Share your requirements and we'll get back to you with the next steps.
            </p>
          </div>
        </div>

        {/* Contact Layout Grid */}
        <div className="bg-gray-50/50 py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column: Contact Info */}
              <div className="lg:col-span-4 space-y-12">
                <div className="space-y-10">
                  {/* Email */}
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                        Email Us
                      </h4>
                      <p className="text-base sm:text-lg font-bold text-gray-900">
                        ajtechworldofficial@gmail.com
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                        Call / WhatsApp
                      </h4>
                      <p className="text-base sm:text-lg font-bold text-gray-900">
                        +91 98765 43210
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Available Mon-Fri, 9am-6pm IST
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                        Location
                      </h4>
                      <p className="text-base sm:text-lg font-bold text-gray-900">
                        India
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Remote-first, open to global projects
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-[#0B1220] rounded-3xl text-white space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
                  <h5 className="font-bold text-lg relative z-10">Client Focused</h5>
                  <p className="text-xs text-gray-400 leading-relaxed relative z-10">
                    We prioritize clear communication and deep technical alignment to ensure your vision is executed exactly as intended.
                  </p>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-8 bg-white border border-gray-200 rounded-3xl shadow-xl shadow-gray-200/40 p-8 sm:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
