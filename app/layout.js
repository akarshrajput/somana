import { Inter } from "next/font/google";
import "./globals.css";
import { Rubik } from "next/font/google";

import Header from "./_components/main/Header";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Somana! $ Explore the world",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-right" reverseOrder={false} />
        <div className={`${rubik.className}`}>
          {/* <div className="sticky top-0 z-10"> */}
          <div className="sticky bg-white top-0 z-10">
            <Header />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
