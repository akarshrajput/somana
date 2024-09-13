// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import DisabledInfoButton from "../buttons/DisabledInfoButton";
// import LoaderSmall from "../main/LoaderSmall";
// import { SealCheck } from "@phosphor-icons/react/dist/ssr";

// const ExploreMoreBlogs = ({ children, genre }) => {
//   const [blogs, setBlogs] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true); // Track if there are more blogs to load
//   const [loading, setLoading] = useState(false); // Track loading state

//   const fetchBlogs = async (currentPage) => {
//     try {
//       setLoading(true);
//       const res = await fetch(`/api/v1/blogs?&limit=8&page=${currentPage}`, {
//         cache: "no-store",
//       });
//       const data = await res.json();
//       const fetchedBlogs = data.data.blogs;

//       if (fetchedBlogs.length === 0) {
//         setHasMore(false); // No more blogs to load
//       } else {
//         setBlogs((prevBlogs) => [...prevBlogs, ...fetchedBlogs]); // Concatenate new blogs
//       }
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch initial blogs on component mount
//   useEffect(() => {
//     fetchBlogs(page);
//   }, [page]);

//   // Handler for "Load More" button
//   const loadMoreBlogs = () => {
//     setPage((prevPage) => prevPage + 1); // Increment the page
//   };

//   return (
//     <div className="container mx-auto">
//       <div className="mb-2">
//         <DisabledInfoButton>
//           {children} {genre}
//         </DisabledInfoButton>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {blogs.map((blog) => (
//           <BlogComponent blog={blog} key={blog._id} />
//         ))}
//       </div>

//       {hasMore && (
//         <div className="my-4 flex justify-center">
//           <button
//             onClick={loadMoreBlogs}
//             disabled={loading}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
//           >
//             {loading ? <LoaderSmall /> : "Load More"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// const BlogComponent = ({ blog }) => {
//   const heading = blog.heading.substring(0, 30);

//   return (
//     <Link href={`/blogs/${blog.slug}`} className="flex flex-col gap-2">
//       <div className="flex flex-col">
//         <div className="flex gap-2">
//           <div className="flex items-center gap-2 text-sm">
//             <div className="relative flex items-center">
//               <img
//                 className="h-6 w-6 z-10 rounded-full border-2 border-white shadow-sm"
//                 src={blog.author.photo}
//                 alt={blog.author.name}
//               />
//               {blog.author.accountType === "Organization" && (
//                 <img
//                   className="h-6 w-6 z-12 -ml-2 rounded-full border-2 border-white shadow-sm"
//                   src={blog.featuredImage}
//                   alt="Organization"
//                 />
//               )}
//             </div>
//           </div>
//           <div className="flex gap-1 items-center">
//             <Link
//               href={`user/${blog.author.email}`}
//               className="text-[13px] hover:underline underline-offset-2 decoration-1"
//             >
//               {blog.author.name}
//             </Link>
//             {blog.author.verified && (
//               <SealCheck className="text-black" weight="fill" />
//             )}
//             <p className="text-[12px] text-stone-600">on</p>
//             <Link
//               href={`/blogs/topic/${blog.genre}`}
//               className="text-[13px] hover:underline underline-offset-2 decoration-1"
//             >
//               {blog.genre}
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="font-medium text-sm">
//         {heading} {heading.length < blog.heading.length ? "..." : ""}
//       </div>
//       <div className="flex justify-center w-full overflow-hidden h-40 md:h-40 rounded-sm">
//         <img
//           src={blog?.featuredImage}
//           className="w-full h-full object-cover rounded-sm hover:scale-105 transition-transform duration-300"
//           alt="Featured Image"
//         />
//       </div>
//     </Link>
//   );
// };

// export default ExploreMoreBlogs;

"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DisabledInfoButton from "../buttons/DisabledInfoButton";
import LoaderSmall from "../main/LoaderSmall";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "@phosphor-icons/react";

const ExploreMoreBlogs = ({ children, genre }) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Track if there are more blogs to load
  const [loading, setLoading] = useState(false); // Track loading state
  const observerRef = useRef(null); // Ref for IntersectionObserver

  const fetchBlogs = async (currentPage) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/v1/blogs?&limit=8&page=${currentPage}`, {
        cache: "no-store",
      });
      const data = await res.json();
      const fetchedBlogs = data.data.blogs;

      if (fetchedBlogs.length === 0) {
        setHasMore(false); // No more blogs to load
      } else {
        setBlogs((prevBlogs) => [...prevBlogs, ...fetchedBlogs]); // Concatenate new blogs
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial blogs on component mount
  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  // Setup IntersectionObserver to load more blogs when the bottom is reached
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !loading) {
          setPage((prevPage) => prevPage + 1); // Increment the page when bottom is reached
        }
      },
      {
        rootMargin: "100px", // Load more when the user is 100px from the bottom
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading, hasMore]);

  return (
    <div className="mx-auto">
      <div className="mb-2">
        <DisabledInfoButton>
          Explore Blogs
          <ArrowRight />
        </DisabledInfoButton>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
        {blogs.map((blog) => (
          <BlogComponent blog={blog} key={blog._id} />
        ))}
      </div>

      {hasMore && (
        <div
          className="my-4 flex justify-center"
          ref={observerRef} // Ref for the load more trigger
        >
          {loading && <LoaderSmall />}
        </div>
      )}
    </div>
  );
};

const BlogComponent = ({ blog }) => {
  const heading = blog.heading.substring(0, 30);

  return (
    <Link href={`/blogs/${blog.slug}`} className="flex flex-col gap-2">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <div className="flex items-center gap-2 text-sm">
            <div className="relative flex items-center">
              <img
                className="h-6 w-6 z-10 rounded-full border-2 border-white shadow-sm"
                src={blog.author.photo}
                alt={blog.author.name}
              />
              {blog.author.accountType === "Organization" && (
                <img
                  className="h-6 w-6 z-12 -ml-2 rounded-full border-2 border-white shadow-sm"
                  src={blog.featuredImage}
                  alt="Organization"
                />
              )}
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <Link
              href={`user/${blog.author.email}`}
              className="text-[13px] hover:underline underline-offset-2 decoration-1"
            >
              {blog.author.name}
            </Link>
            {blog.author.verified && (
              <SealCheck className="text-black" weight="fill" />
            )}
            <p className="text-[12px] text-stone-600">on</p>
            <Link
              href={`/blogs/topic/${blog.genre}`}
              className="text-[13px] hover:underline underline-offset-2 decoration-1"
            >
              {blog.genre}
            </Link>
          </div>
        </div>
      </div>
      <div className="font-medium text-sm text-nowrap overflow-hidden">
        {/* {heading} {heading.length < blog.heading.length ? "..." : ""} */}
        {blog.heading}
      </div>
      <div className="flex justify-center w-full overflow-hidden h-40  rounded-sm">
        <img
          src={blog?.featuredImage}
          className="w-full h-full object-cover rounded-sm hover:scale-105 transition-transform duration-300"
          alt="Featured Image"
        />
      </div>
    </Link>
  );
};

export default ExploreMoreBlogs;
