import { Link } from "react-router";

export const TopBar = () => (
  <div className="flex justify-between w-full mt-4 max-w-4xl mb-10 flex-row items-center">
    <h1 className="text-2xl text-white m-0 font-semibold border-transparent border-b hover:border-theme-300">
      <Link to="/">Philip Willms</Link>
    </h1>
    <div className="flex flex-row gap-4 text-black-400 text-m">
      <a
        href="https://github.com/PhilipWillms"
        className="flex flex-row gap-1 items-center cursor-pointer mr-2 border-transparent py-1 text-white border-b hover:border-theme-300"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/philip-willms-5a5245219"
        className="flex flex-row gap-1 items-center cursor-pointer mr-2 border-transparent py-1 text-white border-b hover:border-theme-300"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </div>
);
