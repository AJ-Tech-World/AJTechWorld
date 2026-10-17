import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Metrics } from "@/components/home/metrics";
import { ServicesOverview } from "@/components/home/services-overview";
import { FeaturedWork } from "@/components/home/featured-work";
import { ProcessSection } from "@/components/home/process-section";
import { CtaBanner } from "@/components/home/cta-banner";

// export const metadata: Metadata = {
//   title: "AJ Tech World — Software Development Studio",
//   description:
//     "We build digital products that help businesses grow. Websites, mobile applications, and custom software built with modern technology.",
//   icons: {
//     icon: "/AJ.png",
//   },
//   openGraph: {
//     title: "AJ Tech World — Software Development Studio",
//     description:
//       "We build digital products that help businesses grow. Websites, mobile applications, and custom software.",
//     url: "https://ajtechworld.com",
//     siteName: "AJ Tech World",
//     images: [
//       {
//         url: "/AJ.png",
//         alt: "AJ Tech World Logo",
//       },
//     ],
//     type: "website",
//   },
// };


export const metadata: Metadata = {
  title: "AJ Tech World — Software Development Studio",
  description:
    "We build websites, mobile applications, and custom software.",

  icons: {
    icon: "/AJ-exact-favicon.png",
  },

  openGraph: {
    title: "AJ Tech World — Software Development Studio",
    description:
      "We build digital products that help businesses grow.",
    url: "https://ajtechworld.com",
    siteName: "AJ Tech World",
    images: [
      {
        url: "/AJ-exact-favicon.png",
        alt: "AJ Tech World Logo",
      },
    ],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Metrics />
        <ServicesOverview />
        <FeaturedWork />
        <ProcessSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
