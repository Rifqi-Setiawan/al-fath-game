import type { Metadata } from "next";
import "./globals.css";
import "./body-bg.css";
import { Montserrat, Inter } from "next/font/google"; 

export const metadata: Metadata = {
  title: "Al-Fath Guessing Game",
  description: "Tebak angka vs komputer — 3 nyawa. Modern, minimal, ceria.",
};


// Bold, cocok untuk title organisasi
const titleFont = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-title",
});

// Inter untuk judul utama
const interFont = Inter({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`body-bg min-h-screen antialiased text-neutral-800 ${titleFont.variable} ${interFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
