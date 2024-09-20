import React from "react";
import { SignIn } from "@phosphor-icons/react/dist/ssr";
import BaseButton from "../buttons/BaseButton";
import LinkButton from "../buttons/LinkButton";

const PlayGroundHeaderNav = () => {
  return (
    <div className="ml-auto flex items-center font-medium gap-2">
      <BaseButton>Token</BaseButton>
      <BaseButton>Credits</BaseButton>
      <BaseButton>Developer</BaseButton>
      <BaseButton className=" bg-pink-700 hover:bg-pink-600">
        Somana-2.0.1
      </BaseButton>
      <BaseButton>
        GPT-3.5
        {/* <OpenAiLogo weight="regular" className="size-4" /> */}
      </BaseButton>
      <LinkButton className="bg-purple-700 hover:bg-purple-600">
        Login
        <SignIn className="size-4" weight="bold" />
      </LinkButton>
    </div>
  );
};

export default PlayGroundHeaderNav;
