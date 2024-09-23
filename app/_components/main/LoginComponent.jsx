import { signInAction, signInGithub } from "@/app/_lib/actions";

const LoginComponent = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex gap-4 mt-10 sm:w-96 w-72 flex-col items-center dark:border-stone-600 p-10 dark:text-stone-50 dark:bg-stone-800  rounded-md">
          <div className="flex w-full flex-col items-center gap-4">
            <div className="flex items-center gap-2 mb-4">
              <p className="font-medium text-xl">Login to Somana</p>
              <img src="/somama-s-logo.png" className="size-6" />
            </div>
            <form className="w-full" action={signInAction}>
              <button
                // disabled={true}
                className="flex justify-center w-full items-center font-medium dark:bg-stone-700 bg-gray-100 py-3 rounded-md border border-stone-200 dark:border-stone-600"
              >
                <div className="flex items-center gap-2">
                  <img src="/login-google-logo.png" className="h-6" />
                  Google
                </div>
              </button>
            </form>
            <form className="w-full" action={signInGithub}>
              <button className="flex justify-center w-full items-center dark:bg-stone-700 bg-gray-100 py-3 rounded-md border border-gray-200 dark:border-stone-600">
                <div className="flex items-center gap-2">
                  <img src="/login-github-logo.png" className="h-6" />
                  GitHub
                </div>
              </button>
            </form>

            {/* <form className="w-full" action={signInFacebook}>
            <button className="flex justify-center w-full items-center font-medium dark:bg-stone-700 bg-stone-100 py-3 rounded-md border border-stone-200 dark:border-stone-600">
              <div className="flex items-center gap-2">
                <img src="/login-facebook-logo.webp" className="h-6" />
                Login using FaceBook
              </div>
            </button>
          </form> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginComponent;
