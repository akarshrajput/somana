import {
  Archivo,
  Inter,
  Poppins,
  Roboto,
  Rubik,
  Work_Sans,
} from "next/font/google";
import "./globals.css";

import Header from "./_components/main/Header";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import { MusicPlayerProvider } from "./_context/MusicPlayerContext";
import MusicPlayer from "./_components/musicComponents/MusicPlayer";
import { LocationInfoProvider } from "./_context/LocationContext";
import { auth } from "./_lib/auth";

const inter = Inter({ subsets: ["latin"] });

const poppins = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"], // Load multiple weights
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
  const session = await auth();
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3750195818284635"
          crossorigin="anonymous"
        ></script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SDEHSMHGK5"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SDEHSMHGK5');
      `,
          }}
        />

        <meta
          name="ezoic-site-verification"
          content="qBxP0NlmfzjagfosOUBFH4DZEC3h2G"
        />
      </head>
      <body className={`dark:bg-stone-900 ${inter.className}`}>
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          defaultTheme="light"
        >
          <MusicPlayerProvider>
            <LocationInfoProvider>
              <Toaster
                position="bottom-right"
                reverseOrder={false}
                toastOptions={{
                  className:
                    "dark:bg-stone-800 dark:text-white rounded-lg shadow-lg",
                  duration: 5000,
                  style: {
                    // Additional custom styles if needed
                  },
                }}
              />
              <div className={`${poppins.className}`}>
                {/* <div > */}
                {/* <div className="sticky top-0 z-10"> */}
                <div className="lg:fixed  w-full bg-white top-0 z-20">
                  <Header session={session} />
                </div>
                <div className="lg:h-14 bg-white z-0"></div>
                {children}
              </div>
              <div className="fixed bottom-0 w-full z-50">
                <MusicPlayer />
              </div>
            </LocationInfoProvider>
          </MusicPlayerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
