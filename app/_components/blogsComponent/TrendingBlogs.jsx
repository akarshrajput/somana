import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrendingBlogs = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <BlogComponent />
      <BlogComponent />
      <BlogComponent />
      <BlogComponent />
      <BlogComponent />
    </div>
  );
};

const BlogComponent = () => {
  return (
    <Link href="" className="flex flex-col gap-1 rounded-md p-1">
      <div className="flex items-center gap-1 text-sm">
        <Image
          src="/text.jpeg"
          height={10}
          width={10}
          alt="Profile Image"
          className="rounded-full size-4"
        />
        <p className="antialiased">Akarsh Rajput</p>
        <CheckCircle className="text-sky-500" weight="fill" />
        <div className="ml-auto flex items-center gap-1">
          <p className="bg-stone-100 border  py-0.5 px-1 rounded-md">1 min</p>
          <p className="bg-stone-100 border  py-0.5 px-1 rounded-md">June 26</p>
        </div>
      </div>
      <div className="leading-5 antialiased">
        <p>Napoleon Bonaparte : The Rise of new kingdom</p>
      </div>
      <div>
        <p className="text-sm antialiased">
          The Rise of Kingdom is on the way. The only catch is a king have to
          open his swords and kill all enemeis.
        </p>
      </div>
    </Link>
  );
};

export default TrendingBlogs;
