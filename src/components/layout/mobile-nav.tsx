"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Logo } from "./logo";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  // Close menu when the route changes.
  useEffect(() => {
    onClose();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Lock background scrolling and handle Escape.
  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const html = document.documentElement;

    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Avoid rendering the portal before the browser is available.
  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full-screen blurred backdrop */}
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-md lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Fixed navigation drawer */}
          <motion.aside
            key="mobile-nav-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 260,
            }}
            className="fixed inset-y-0 right-0 z-[9999] flex h-dvh w-[85%] max-w-sm flex-col overflow-hidden border-l border-gray-200 bg-white shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 py-4">
              <Logo />

              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-6 py-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      aria-current={isActive ? "page" : undefined}
                      className={`rounded-xl px-4 py-3 text-base transition-colors ${
                        isActive
                          ? "bg-blue-50 font-semibold text-blue-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Bottom action */}
              <div className="mt-auto flex flex-col gap-4 border-t border-gray-100 pt-6">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1220] px-6 py-3.5 text-center font-medium text-white transition-colors hover:bg-gray-800"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <p className="text-center text-xs text-gray-400">
                  © 2026 AJ Tech World. All rights reserved.
                </p>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}