import Image from "next/image";
import Hero from "./_components/main/Hero";
import Loader from "./_components/main/Loader";
import LoaderSmall from "./_components/main/LoaderSmall";
import { auth } from "./_lib/auth";
import HomePageNavigation from "./_components/homePageComponents/HomePageNavigation";
import TrendingSongs from "./_components/musicComponents/TrendingSongs";
import CommonSpecialBlogs from "./_components/blogsComponent/CommonSpecialBlogs";
import CommonTrendBlog from "./_components/blogsComponent/CommonTrendBlog";
import { FlagBannerFold, Planet } from "@phosphor-icons/react/dist/ssr";
import Footer from "./_components/main/Footer";
const hostname = process.env.HOSTNAME;
export default async function Home() {
  const session = await auth();

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-2 gap-x-4 my-4 bg-stone-950 text-stone-50 px-4 py-4">
          <div className="col-span-2">
            <CommonSpecialBlogs genre="Space" />
          </div>
          <CommonTrendBlog genre="Space">
            <Planet className="text-stone-50" weight="fill" />
          </CommonTrendBlog>
        </div>
        <div className="bg-stone-50 p-4">
          <TrendingSongs hostname={hostname} />
        </div>
        {/* <HomePageNavigation /> */}
      </div>
      <Footer />
    </>
  );
}
