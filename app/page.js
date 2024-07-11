import Image from "next/image";
import Hero from "./_components/main/Hero";
import Loader from "./_components/main/Loader";
import LoaderSmall from "./_components/main/LoaderSmall";
import { auth } from "./_lib/auth";
import HomePageNavigation from "./_components/homePageComponents/HomePageNavigation";
import TrendingSongs from "./_components/musicComponents/TrendingSongs";
const hostname = process.env.HOSTNAME;
export default async function Home() {
  const session = await auth();

  return (
    <div className="px-4 mt-2 flex flex-col gap-4">
      <TrendingSongs hostname={hostname} />
      <HomePageNavigation />
    </div>
  );
}
