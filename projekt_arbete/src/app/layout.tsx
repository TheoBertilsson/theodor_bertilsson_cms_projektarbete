import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "Theos Portfolio | Web Developer",
  description:
    "Professional portfolio showcasing web development projects, skills, and experience in modern web technologies.",
  keywords: [
    "web developer",
    "portfolio",
    "frontend developer",
    "React",
    "Next.js",
    "Svelte",
    "Typescript",
    "Tailwind",
    "CSS",
    "HTML",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Theos Portfolio | Web Developer",
    description: "Professional portfolio showcasing web development projects",
    type: "website",
    url: "/",
    images: [
      {
        url: "/static/og.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
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
      <body className={` antialiased bg-background flex`}>{children}</body>
    </html>
  );
}
