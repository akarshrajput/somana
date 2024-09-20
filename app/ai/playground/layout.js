import PlayGroundHeader from "@/app/_components/aiComponents/PlaygroundHeader";
import SideBar from "@/app/_components/aiComponents/SideBar";
import { Inter } from "next/font/google";
// import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Playground by Somana",
  description: "Somana AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex text-sm flex-col text-white bg-black h-screen ${inter.className}`}
      >
        <header className="sticky top-0 left-0 right-0 w-full z-50">
          <PlayGroundHeader />
        </header>
        <div className="grid grid-cols-5 h-full">
          <aside className="sticky left-0 bottom-0 h-full col-span-1">
            <SideBar />
          </aside>
          <main className="flex-grow overflow-auto col-span-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
