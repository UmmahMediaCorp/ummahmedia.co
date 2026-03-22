import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Amiri } from "next/font/google";
import "./globals.css";
import CinematicNav from "@/components/layout/CinematicNav";

const bebasNeue = Bebas_Neue({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ummah Media — Mine Attention. Build Brands. Monetize Impact.",
  description:
    "South Edmonton's first Muslim-owned media company. AI-powered production. Cultural fluency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${amiri.variable} antialiased`}
    >
      <body>
        <CinematicNav />
        {children}
        <noscript>
          <div style={{ background: '#0a0a0a', color: '#fff', padding: '3rem 1.5rem', fontFamily: 'system-ui, sans-serif' }}>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Ummah Media</h1>
            <p style={{ marginBottom: '1.5rem', color: '#a3a3a3' }}>
              South Edmonton&apos;s first Muslim-owned media company. AI-powered production. Cultural fluency.
            </p>
            <h2 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Our Services</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="/brand-development" style={{ color: '#f59e0b' }}>Brand Development</a> — We build anything your brand needs</li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/video-marketing" style={{ color: '#f59e0b' }}>Video Marketing</a> — Stories that move hearts</li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/social-media" style={{ color: '#f59e0b' }}>Social Media Marketing</a> — Revenue. Not likes.</li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/ugc-influencer" style={{ color: '#f59e0b' }}>UGC &amp; Influencer Agency</a> — Real people. Real influence.</li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/smartsuite" style={{ color: '#f59e0b' }}>SmartSuite</a> — AI-powered business systems</li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/ai-education" style={{ color: '#f59e0b' }}>AI Education</a> — The future is for the prepared</li>
            </ul>
            <p style={{ marginTop: '1.5rem' }}>
              <a href="https://calendly.com/ummahmedia/strategy-call" style={{ color: '#f59e0b' }}>Book a free strategy call</a>
            </p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
