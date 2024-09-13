import CategoryMusicComponent from "@/app/_components/musicComponents/CategoryMusicComponent";

const page = async ({ params }) => {
  return (
    <div>
      <CategoryMusicComponent params={params} />
    </div>
  );
};
export default page;
