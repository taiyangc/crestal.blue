import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue's Experiments - Curated Web3 & Domain Collection",
  description: "Discover Blue's handpicked collection of innovative Web3 projects, domain extensions, and digital experiments. From .ai to .zero, explore the future of the internet through carefully selected domains and platforms.",
  keywords: "Web3, domains, experiments, blockchain, crypto, digital innovation, domain extensions, Blue",
  authors: [{ name: "Blue" }],
  openGraph: {
    title: "Blue's Experiments - Web3 Domain Collection",
    description: "Explore Blue's curated collection of Web3 domains and digital experiments",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue's Experiments",
    description: "Curated Web3 & Domain Collection",
    creator: "@crestalblue_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
