"use client";
import LoaderSmall from "@/app/_components/main/LoaderSmall";
import { CheckFilePin } from "@/app/_services/apiAnon";
import { useState } from "react";

const Page = ({ params }) => {
  const [inputPin, setInputPin] = useState("");
  const [anonId, setAnonId] = useState(params.anonID);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error on new submission
    try {
      setIsLoading(true);
      const res = await CheckFilePin({ anonId, inputPin });
      if (res) {
        setFile(res.data.data.file.fileName);
      } else {
        setError("Wrong PIN. Please try again.");
      }
      setIsLoading(false);
    } catch (err) {
      // console.log(err);
      setError("Wrong PIN. Please try again.");
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    link.click();
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-[20rem] flex flex-col">
        <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
          <div className="flex gap-4 flex-col">
            <p className="text-sm text-center text-yellow-600">
              Enter PIN to access file
            </p>
            <input
              className="textarea textarea-bordered resize-none"
              placeholder="PIN"
              onChange={(e) => setInputPin(e.target.value)}
              value={inputPin}
            />
            {isLoading ? (
              <LoaderSmall />
            ) : (
              <button
                type="submit"
                className="cursor-pointer bg-green-500 w-fit p-3 rounded-md text-slate-50"
              >
                Proceed
              </button>
            )}
          </div>
        </form>

        {file && (
          <div className="mt-4 text-center">
            <button
              className="cursor-pointer bg-blue-500 w-fit p-3 rounded-md text-slate-50"
              onClick={handleDownload}
            >
              Download File
            </button>
          </div>
        )}

        {error && (
          <p className="text-sm text-center text-red-600 mt-4">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Page;
