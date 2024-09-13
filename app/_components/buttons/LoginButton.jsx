"use client";
import { User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import LoginComponent from "../main/LoginComponent";

const LoginButton = () => {
  return (
    <div>
      <button
        className="text-sm font-semibold leading-6 text-gray-900"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Login
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {/* <h3 className="font-bold text-lg">Hello!</h3> */}
          {/* <p className="py-4">
            Press ESC key or click the button below to close
          </p> */}
          <LoginComponent />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default LoginButton;
