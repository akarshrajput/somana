import Link from "next/link";

const NavigationAI = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <Link
          href="/ai/playground"
          className="px-4 py-2 text-sm bg-stone-800 rounded-full text-white"
        >
          Explore AI playground
        </Link>
      </div>
    </div>
  );
};
export default NavigationAI;
