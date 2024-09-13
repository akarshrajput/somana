import { House, User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const ReturnHome = () => {
  return (
    <Link
      href="/"
      type="button"
      className="text-white bg-green-600 rounded-md text-sm px-3 py-1.5 gap-1 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <House weight="bold" />
      Home
    </Link>
  );
};
export default ReturnHome;
