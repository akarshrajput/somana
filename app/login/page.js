import {
  AppleLogo,
  Cube,
  FacebookLogo,
  GithubLogo,
  GoogleLogo,
  Lock,
  LockKey,
  UserCircle,
  WarningOctagon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import { signInAction, signInFacebook, signInGithub } from "../_lib/actions";
import LoginComponent from "../_components/main/LoginComponent";

const page = () => {
  return <LoginComponent />;
};

export default page;
