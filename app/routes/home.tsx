import { Description } from "@/components/description";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { TopBar } from "@/components/topBar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Philip Willms" }, { name: "description", content: "" }];
}

export default function Home() {
  return (
    <div className="flex justify-center w-full h-screen px-6 bg-theme-500 font-lato bg-[#1a1a1a]">
      <div className="flex flex-col items-center w-full max-w-screen-md">
        <TopBar />
        <Description />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}
