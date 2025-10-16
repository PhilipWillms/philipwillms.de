import { Cloud } from "./icons/microphone copy";

export const Description = () => (
  <div className="flex flex-col w-full items-center md:mt-5 mb-8 sm:w-9/12">
    <div className="flex flex-col items-start w-full mb-4">
      <p className="flex flex-row items-center gap-1 mt-4 text-left text-md font-light text-theme-300">
        <span>Currently buildung the simple cloud at Hetzner Cloud.</span>
        <Cloud className="inlnie w-4 h-4" />
      </p>
    </div>
  </div>
);
