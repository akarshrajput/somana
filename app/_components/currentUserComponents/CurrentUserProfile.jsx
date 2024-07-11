import React from "react";

const CurrentUserProfile = ({ session }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center text-sm gap-2 bg-stone-50 border rounded-md p-10">
        <img
          src={session.user.image}
          className="size-36 rounded-lg border-4 border-stone-300"
        />
        <p className="bg-stone-100 antialiased px-4 py-1 border rounded-md">
          Name - {session.user.name}
        </p>
        <p className="bg-stone-100 antialiased px-4 py-1 border rounded-md">
          Email - {session.user.email}
        </p>
        {/* <p>Name - {session.user.name}</p> */}
      </div>
    </div>
  );
};

export default CurrentUserProfile;
