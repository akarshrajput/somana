import Image from "next/image";
import Hero from "./_components/main/Hero";
import Loader from "./_components/main/Loader";
import LoaderSmall from "./_components/main/LoaderSmall";
import { auth } from "./_lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <Hero />
    </div>
  );
}
