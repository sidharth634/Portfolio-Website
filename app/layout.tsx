import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./_components/ThemeProvider";

/* ======================================
   Root Layout — H. Sidharthan Portfolio
   ====================================== */

export const metadata: Metadata = {
  // SEO: Title & Description
  title: "H. Sidharthan | CS Engineer · Python Developer · AI Enthusiast",
  description:
    "Portfolio of H. Sidharthan — Computer Science Engineering student at Easwari Engineering College. Python Developer, AI & Computer Vision enthusiast, and Full Stack Learner. Explore my projects, skills, and achievements.",

  // Open Graph tags for social sharing
  openGraph: {
    title: "H. Sidharthan | CS Engineer · Python Developer · AI Enthusiast",
    description:
      "Explore the portfolio of H. Sidharthan — Python, AI, Computer Vision, React & Full Stack projects.",
    url: "https://sidharth1-github-io.vercel.app/",
    siteName: "H. Sidharthan Portfolio",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "H. Sidharthan Portfolio",
      },
    ],
  },

  // Twitter card
  twitter: {
    card: "summary_large_image",
    title: "H. Sidharthan | CS Engineer · Python Developer",
    description:
      "Portfolio of H. Sidharthan — Python, AI, Computer Vision, React & Full Stack projects.",
    images: ["/hero.png"],
  },

  // Favicon
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts — Work Sans (matches reference portfolio typography) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* ThemeProvider wraps everything to enable dark/light toggle */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
