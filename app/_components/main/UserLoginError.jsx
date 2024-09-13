import { Info } from "@phosphor-icons/react/dist/ssr";

const UserLoginError = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 items-center mt-10">
      <Info weight="bold" />
      {children}
    </div>
  );
};
export default UserLoginError;
