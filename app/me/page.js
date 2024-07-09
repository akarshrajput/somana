import React from "react";
import { auth } from "../_lib/auth";
import { signOutAction } from "../_lib/actions";
import CurrentUserProfile from "../_components/currentUserComponents/CurrentUserProfile";

const page = async () => {
  const session = await auth();
  return (
    <div className="px-20 mt-4">
      <div>
        <CurrentUserProfile session={session} />
      </div>
      <div>
        <form action={signOutAction}>
          <button className="bg-rose-400 border  border-rose-600 py-1 px-2 rounded-md">
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
