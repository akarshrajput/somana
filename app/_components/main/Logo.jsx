import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <img src="/somana.png" className="h-12" />
      </Link>
    </div>
  );
};

export default Logo;
