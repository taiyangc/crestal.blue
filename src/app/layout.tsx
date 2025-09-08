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
  title: "Blue's Experiments - Innovative Web3 Products A-Z",
  description: "Discover Blue's handpicked collection of innovative Web3 products and digital experiments. From .ai to .zero, explore unique and fun sites curated with love by CrestalBlue and co. Each alphabetically organized by their creative domain extensions.",
  keywords: "Web3, blockchain, crypto, digital innovation, experiments, products, CrestalBlue, innovative sites, Blue",
  authors: [{ name: "Blue" }],
  openGraph: {
    title: "Blue's Experiments - Innovative Web3 Products A-Z",
    description: "Explore Blue's curated collection of innovative Web3 products and digital experiments, alphabetically organized from .ai to .zero",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue's Experiments",
    description: "Innovative Web3 Products A-Z",
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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S9ZQWB27DT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S9ZQWB27DT');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
