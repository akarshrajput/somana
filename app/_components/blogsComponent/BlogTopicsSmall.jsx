import { ArrowRight, Fire, TrendUp } from "@phosphor-icons/react/dist/ssr";
import CommonLinkButton from "../buttons/CommonLinkButton";
import Link from "next/link";
import DisabledInfoButton from "../buttons/DisabledInfoButton";

const BlogTopicsSmall = () => {
  const topics = [
    "Blog",
    "Automotive",
    "Beauty",
    "Books",
    "Business",
    "Career",
    "Cryptocurrency",
    "Culture",
    "Crafts",
    "Design",
    "Education",
    "Entertainment",
    "Environmental",
  ];

  return (
    <div className="rounded-lg">
      <div className="mb-2">
        <DisabledInfoButton>
          Trending Topics
          <TrendUp weight="bold" />
        </DisabledInfoButton>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {topics.map((topic) => (
          <CommonLinkButton key={topic} href={`/blogs/topic/${topic}`}>
            {topic}
          </CommonLinkButton>
        ))}
        <Link
          href="/blogs/topic"
          className="text-sm px-2 text-orange-600 hover:underline flex w-fit  items-center gap-1"
        >
          More...
        </Link>
      </div>
    </div>
  );
};

export default BlogTopicsSmall;
