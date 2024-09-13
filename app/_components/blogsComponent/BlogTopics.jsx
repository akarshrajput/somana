import { Fire } from "@phosphor-icons/react/dist/ssr";
import CommonLinkButton from "../buttons/CommonLinkButton";
import Link from "next/link";

const BlogTopics = () => {
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
    "Fashion",
    "Finance",
    "Fitness",
    // "Food",
    // "Gaming",
    // "Gardening",
    // "Health",
    // "History",
    // "Home",
    // "Humor",
    // "Interests",
    // "Investing",
    // "Legal",
    // "Lifestyle",
    // "Luxury",
    // "Marketing",
    // "Movies",
    // "Music",
    // "News",
    // "Nonprofit",
    // "Parenting",
    // "Pets",
    // "Photography",
    // "Politics",
    // "Estate",
    // "Relationships",
    // "Science",
    // "Shopping",
    // "Social",
    // "Space",
    // "Spirituality",
    // "Sports",
    // "Startups",
    // "Story",
    // "Technology",
    // "Tips",
    // "Travel",
    // "Volunteer",
    // "Writing",
  ];

  return (
    <div className="w-fit mt-20 px-4">
      <div>
        <p className="text-lg font-medium mb-4">Discover More</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        {topics.map((topic) => (
          <Link
            className="bg-stone-50 hover:bg-stone-200 px-4 py-2 rounded-full text-sm"
            key={topic}
            href={`/blogs/topic/${topic}`}
          >
            {topic}
          </Link>
        ))}
      </div>
      <Link className="btn btn-link" href="#">
        Explore More
      </Link>
    </div>
  );
};

export default BlogTopics;
