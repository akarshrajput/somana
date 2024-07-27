import { Copyright } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import LinkButton from "../buttons/LinkButton";

const Footer = () => {
  return (
    <div className="text-sm dark:text-stone-200 mt-20 px-4 py-6 flex flex-col gap-4 items-center justify-center">
      {/* <div className="flex flex-col">
        <div>
          <img className="h-12" src="/somana.png" />
        </div>
      </div> */}
      <div className="flex pt-6 flex-wrap justify-center gap-2">
        <LinkButton>Blog</LinkButton>
        <LinkButton>Music</LinkButton>
        <LinkButton>Movies</LinkButton>
        <LinkButton>Podcasts</LinkButton>
        <LinkButton>News</LinkButton>
        <LinkButton>Services</LinkButton>
        <LinkButton>Privacy Policy</LinkButton>
        <LinkButton>Terms and Conditions</LinkButton>
        <LinkButton>Violation</LinkButton>
        <LinkButton>Report</LinkButton>
        <LinkButton>Developers</LinkButton>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 text-center">
        {/* <h2>Address : Phagwara, Punjab, LPU, BH1</h2> */}
        <p className="hover:underline hover:text-blue-400">
          <a href="mailto:akarshrajput.01@gmail.com">
            akarshrajput.01@gmail.com
          </a>
        </p>
        <p className="hover:underline hover:text-blue-400">
          <a href="tel:+916395714331">+916395714331</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
