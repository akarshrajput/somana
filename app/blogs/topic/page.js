import BlogTopics from "@/app/_components/blogsComponent/BlogTopics";
import Footer from "@/app/_components/main/Footer";

function page() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex w-full lg:w-5/6 self-center flex-col gap-2 px-4 sm:px-4 md:px-4">
          <div className="dark:bg-stone-900 dark:text-stone-200 mt-2">
            <BlogTopics />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default page;
