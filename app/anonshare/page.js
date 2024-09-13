import { Fingerprint, Key } from "@phosphor-icons/react/dist/ssr";
import InputAnonFile from "../_components/anonShareComponents/InputAnonFile";
import Link from "next/link";
import SystemInfo from "../_components/anonShareComponents/SystemInfo";
import SpecialServiceButton from "../_components/buttons/SpecialServiceButton";
const hostname = process.env.HOSTNAME;
const page = () => {
  return (
    <div className="flex flex-col gap-2 items-center mt-2">
      <Link
        href="/anonshare/file"
        className="bg-blue-500 flex items-center gap-1 rounded-md py-1 px-2 text-stone-50"
      >
        <Fingerprint weight="bold" />
        Get File
      </Link>{" "}
      <div>
        <InputAnonFile hostname={hostname} />
      </div>
      <div className="flex flex-col gap-1">
        {/* <p className="bg-stone-800 flex items-center gap-2 text-stone-50 p-2 px-4 rounded-md">
          <Key weight="bold" />
          Anon share
        </p> */}
        <p className="text-sm mt-4 flex gap-1 items-center text-stone-700">
          Powered by <Link href="/">Somana</Link>
        </p>
      </div>
      <SystemInfo />
    </div>
  );
};
export default page;
