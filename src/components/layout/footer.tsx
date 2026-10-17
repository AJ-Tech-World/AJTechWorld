import React from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = "2026";

  return (
    <footer className="bg-[#0B1220] text-gray-300 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block h-15 w-45 bg-white px-1 py-1 rounded-lg">
              {/* <Logo /> */}
              <img src="/AJ Tech World Monogram Logo.png" alt="AJ Tech World Logo" className="h-full w-full object-contain" />
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              AJ Tech World is a software development studio engineering high-performance websites, mobile applications, and custom digital systems for businesses worldwide.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-gray-400">
              <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
              <span>India • Serving Global Clients</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#website-development" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-app-development" className="hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#custom-software" className="hover:text-white transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-devops" className="hover:text-white transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5 text-gray-400">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-xs">ajtechworldofficial@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-xs">+91 98765 43210</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2.5 rounded-lg transition-colors"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {currentYear} AJ Tech World. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
