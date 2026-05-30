import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "VOLT — AI-Powered Health Intelligence Platform | Acquisition Opportunity",
  description: "VOLT is a fully developed AI-native health and nutrition platform featuring autonomous coaching, intelligent engagement systems, and scalable cloud infrastructure. Available for acquisition, licensing, or strategic partnership.",
  keywords: "VOLT, AI health platform, acquisition, health technology, AI coaching, Aira, digital health, health intelligence",
  openGraph: {
    title: "VOLT — AI-Powered Health Intelligence Platform",
    description: "Available for acquisition, licensing, or strategic partnership. A fully developed AI-native health platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ScrollProgress />
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
