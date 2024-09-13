"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { ClipboardText, Password, ShieldCheck } from "@phosphor-icons/react";
import QRcode from "../main/QRcode";
import { useLocationInfo } from "@/app/_context/LocationContext";
import LoaderSmall from "../main/LoaderSmall";
import { SubmitFormData } from "@/app/_services/apiAnon";

const InputAnonFile = ({ hostname }) => {
  const { ip, location, isLoading } = useLocationInfo();
  const [file, setFile] = useState(null);
  const [pin, setPin] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [anonId, setAnonId] = useState("");
  const [showQr, setShowQr] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file || !pin || !timeLimit) {
      toast.error("File not entered.");
    }

    if (!file || !pin || !timeLimit) return;

    const formData = {
      file: file,
      pin: pin,
      timeLimit: timeLimit,
      ip: ip,
      location: location,
    };

    try {
      setSubmitLoading(true);
      const id = await SubmitFormData(formData);
      setAnonId(`${hostname}/anonshare/file/${id}`);
      toast.success("File submitted!");
      setSubmitLoading(false);
      setShowForm(false);
    } catch (error) {
      console.error("Error submitting form data:", error);
      toast.error("Error submitting file!");
    }

    setFile("");
    setPin("");
    setTimeLimit("");
  };

  const handleCopyClick = () => {
    // Select the textarea
    const textarea = document.querySelector(".your-textarea-class");

    // Copy the text inside the textarea to the clipboard
    if (textarea.textContent.length >= 1) {
      textarea.select();
      document.execCommand("copy");
      toast.success("Link Copied");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[20rem] flex flex-col">
        <p className="flex gap-2 mt-4 items-center justify-center text-green-700 border p-2 bg-green-50 rounded-md">
          <ShieldCheck size={20} weight="bold" />
          Your security is our first priority
        </p>
        <div className="flex gap-2 items-center my-4">
          <Password size={32} weight="bold" color="#15803d" />
          <p>Encrypted Vault</p>
        </div>
        {showForm ? (
          <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              onChange={handleFileChange}
            />
            <div className="flex gap-4 flex-col">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Create a Pin"
                  onChange={(e) => setPin(e.target.value)}
                  value={pin}
                />
              </label>
              <p className="text-sm text-center text-yellow-600">
                Remember you PIN to access file
              </p>

              <select
                className="select select-bordered w-full max-w-xs"
                defaultValue=""
                value={timeLimit}
                onChange={(e) => setTimeLimit(e.target.value)}
              >
                <option disabled value="">
                  Time Limit (By default 24 hour)
                </option>
                <option value="30 min">30 min</option>
                <option value="1 hour">1 hour</option>
                <option value="2 hour">2 hour</option>
                <option value="3 hour">3 hour</option>
                <option value="6 hour">6 hour</option>
                <option value="12 hour">12 hour</option>
                <option value="1 day">1 day</option>
                <option value="1 week">1 week</option>
                <option value="1 month">1 month</option>
              </select>

              <div className="flex justify-center">
                {isLoading || submitLoading ? (
                  <LoaderSmall />
                ) : (
                  <button
                    type="submit"
                    className="cursor-pointer bg-green-500 w-fit p-3 rounded-md text-slate-50"
                  >
                    Generate Link
                  </button>
                )}
              </div>
            </div>
          </form>
        ) : (
          ""
        )}
        {!showForm ? (
          <div className="w-[100%]">
            <textarea
              rows={4}
              readOnly
              className="w-[100%] outline-none mt-4 border p-1 rounded-md text-sm font-medium resize-none your-textarea-class"
              value={anonId}
              onChange={(e) => setAnonId(e.target.value)}
            />
            <button
              onClick={handleCopyClick}
              className="cursor-pointer bg-slate-100 text-slate-700 w-fit p-1 px-2 rounded-md mt-2"
            >
              <ClipboardText size={20} weight="bold" />
            </button>
            <p className="text-sm text-center text-yellow-600">
              Copy above link to share file
            </p>
            <p className="text-center">OR</p>
            <p className="text-sm text-center text-yellow-600">
              Scan QR code below
            </p>
            <div className="flex flex-col items-center mt-2">
              {anonId ? <QRcode link={anonId} /> : ""}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default InputAnonFile;
