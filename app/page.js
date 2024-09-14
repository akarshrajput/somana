import { auth } from "./_lib/auth";

import CommonSpecialBlogs from "./_components/blogsComponent/CommonSpecialBlogs";

import Footer from "./_components/main/Footer";
import TrendingBlogs from "./_components/blogsComponent/TrendingBlogs";
import HeroSection from "./_components/main/HeroSection";
import BlogTopics from "./_components/blogsComponent/BlogTopics";
import Navigation from "./_components/main/Navigation";

const hostname = process.env.HOSTNAME;

export default async function Home() {
  const session = await auth();

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-2">
          <div className="dark:bg-stone-900 dark:text-stone-200">
            {/* <div className="mt-2">
              <ServicesNav />
            </div> */}

            <div>
              <HeroSection />
            </div>
            {/* <div className="my-4">
              <Navigation />
            </div> */}
            <div>
              <CommonSpecialBlogs genre="Space" />
            </div>
          </div>
          <div className="grid grid-cols-3 mx-auto lg:max-w-[90rem]">
            <div className="col-span-2">
              <TrendingBlogs />
            </div>
            <div>
              <BlogTopics />
            </div>
          </div>
          {/* <div className="dark:bg-stone-900 dark:text-stone-200">
            <TrendingSongs hostname={hostname} />
          </div> */}

          {/* <div className="mt-2">
            <ExploreMoreBlogs />
          </div> */}

          {/* <div className="dark:bg-stone-900 mt-2 dark:text-stone-200">
            <CommonSongs
              musicType="Love"
              description="Love Music"
              hostname={hostname}
            />
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
