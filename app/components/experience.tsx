import { Bolt } from "./icons/bolt";
import { Microphone } from "./icons/microphone";

export const Experience = () => (
  <div className="flex flex-col w-full sm:w-9/12 text-theme-300 gap-6">
    <h1 className="font-bold text-xl text-white">Work experience</h1>
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex text-theme-instant text-lg items-center">
          Instant Commerce <Bolt className="inline w-4 h-4 ml-2" />
        </div>
        <div>02/2022 - 11/2023</div>
      </div>
      <div>
        I joined Instant Commerce in its early stages as a Frontend Developer,
        playing an active role in shaping the product. This experience
        strengthened my React skills while allowing me to explore new frameworks
        and libraries. Working in a dynamic, fast-paced environment fostered
        adaptability and encouraged innovation.
      </div>
    </div>
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center text-theme-narando text-lg">
          narando GmbH <Microphone className="inline w-4 h-4 ml-2" />
        </div>
        <div>03/2019 - 02/2022</div>
      </div>
      <div>
        As a Junior Frontend Developer at Narando, I worked in a small, agile
        team, building the latest product version with TypeScript and React. I
        took ownership of the frontend, implementing new features and refining
        the user experience. Mentorship from senior developers helped me deepen
        my expertise in modern frontend development, improving my
        problem-solving and collaboration skills.
      </div>
    </div>
  </div>
);
