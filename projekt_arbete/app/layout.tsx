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
  title: 'Theos Portfolio | Web Developer',
  description: 'Professional portfolio showcasing web development projects, skills, and experience in modern web technologies.',
  keywords: ['web developer', 'portfolio', 'frontend developer', 'React', 'Next.js', 'Svelte', 'Typescript', 'Tailwind', 'CSS', 'HTML'],
  robots: 'index, follow',
  openGraph: {
    title: 'Theos Portfolio | Web Developer',
    description: 'Professional portfolio showcasing web development projects',
    type: 'website',
    url: 'https://your-domain.com',
    images: [
      {
        url: '../static/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background flex`}
      >
        {children}
      </body>
    </html>
  );
}
