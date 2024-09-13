import React from "react";
import { auth } from "../_lib/auth";
import Footer from "../_components/main/Footer";
import ProfileSwitcher from "../_components/currentUserComponents/ProfileSwitcher";
import { Info, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const Page = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col items-center">
      <div className="w-5/6 px-2 mt-4">
        {/* <p className="flex items-center gap-1 text-sm text-green-700 mb-2">
          <Info weight="bold" />
          Your account is secured
          <ShieldCheck weight="fill" /> using Somana Security Authenticator.
        </p> */}
        <ProfileSwitcher session={session} />
      </div>
    </div>
  );
};

export default Page;
