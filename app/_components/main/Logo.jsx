import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <img src="/somana-3.png" className="h-12 brightness-125" />
      </Link>
    </div>
  );
};

export default Logo;
