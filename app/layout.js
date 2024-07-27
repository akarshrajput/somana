import { Inter } from "next/font/google";
import "./globals.css";
import { Rubik } from "next/font/google";

import Header from "./_components/main/Header";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Somana - Hub for Creativity and Entertainment",
  description:
    "Discover movies and music recommendations, read blogs and articles, listen to and download music, store images like Pinterest, connect via social media, share projects and personal profiles, and explore AI-generated content.",
  keywords:
    "movies, music, recommendations, blogs, articles, music listening, music download, image storage, Pinterest, social media, project sharing, personal profile, AI content",
  author: "Akarsh Rajput",
  viewport: "width=device-width, initial-scale=1",
  charset: "UTF-8",
  robots: "index, follow",
  language: "English",
  revisitAfter: "5 days",
  themeColor: "#000000",
  openGraph: {
    title: "Somana - Your Ultimate Hub for Entertainment and Creativity",
    description:
      "Discover movies and music recommendations, read blogs and articles, listen to and download music, store images like Pinterest, connect via social media, share projects and personal profiles, and explore AI-generated content.",
    url: "https://www.somana.in",
    type: "website",
    locale: "en_US",
    site_name: "Somana",
    images: [
      {
        url: "https://www.somana.in/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Somana - Hub for Creativity and Entertainment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somana - Hub for Creativity and Entertainment",
    description:
      "Discover movies and music recommendations, read blogs and articles, listen to and download music, store images like Pinterest, connect via social media, share projects and personal profiles, and explore AI-generated content.",
    site: "@somana",
    creator: "@yourTwitterHandle",
    images: ["https://www.somana.in/favicon.ico"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark:bg-stone-900 ${inter.className}`}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Toaster position="bottom-right" reverseOrder={false} />
          <div className={`${rubik.className}`}>
            {/* <div className="sticky top-0 z-10"> */}
            <div className="sticky bg-white top-0 z-10">
              <Header />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
