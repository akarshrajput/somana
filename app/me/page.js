import React from "react";
import { auth } from "../_lib/auth";
import CurrentUserProfile from "../_components/currentUserComponents/CurrentUserProfile";
import CurrentUserNavigation from "../_components/currentUserComponents/CurrentUserNavigation";

const page = async () => {
  const session = await auth();
  return (
    <div className="px-4 mt-4">
      <div>
        <CurrentUserNavigation />
      </div>
      <div className="my-2">
        <CurrentUserProfile session={session} />
      </div>
    </div>
  );
};

export default page;
