// import { Share } from "@phosphor-icons/react/dist/ssr";
// import { Roboto_Slab } from "next/font/google";
// import Link from "next/link";

// const robotoSlab = Roboto_Slab({
//   subsets: ["latin"],
//   display: "swap",
// });

// const HeroSection = () => {
//   return (
//     <div className="flex flex-col gap-4 my-8">
//       <h1
//         className={`${robotoSlab.className} flex items-center gap-4 font-bold my-2 text-7xl`}
//       >
//         Beyond Boundaries : Somana
//       </h1>
//       <p className="text-xl font-medium">
//         Thinking, and Expertise from Every Corner
//       </p>

//       <Link
//         href="explore"
//         className="flex items-center gap-2 px-8 py-2 rounded-full bg-black text-stone-50 w-fit"
//       >
//         Explore Now <Share weight="bold" />
//       </Link>
//     </div>
//   );
// };
// export default HeroSection;
export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto">
        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 text-stone-900  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-black"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="/hero-image.png"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
