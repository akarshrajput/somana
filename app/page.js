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
            <div className="my-4">
              <Navigation />
            </div>
            <div>
              <CommonSpecialBlogs genre="Space" />
            </div>

            {/* <div className="my-2">
              <p className="mb-2 bg-stone-50 p-1 px-2 w-fit rounded-md font-medium flex items-center gap-2">
                <Mountains weight="bold" />
                Advertisement
              </p>
              <div
                className="border border-dashed p-1 my-1 rounded-md bg-stone-100"
                id="container-2a23f44d708874fffe31b49e3f5cd5d5"
              ></div>
            </div> */}
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
