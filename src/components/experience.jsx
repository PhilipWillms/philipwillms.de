import React from "react"
import { Microphone } from "../icons/microphone"
import { Bolt } from "../icons/bolt"

export const Experience = () => (
  <div className="flex flex-col w-full sm:w-9/12 text-theme-300 gap-6">
    <h1 className="font-bold text-xl text-white">Work experience</h1>
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex text-theme-instant text-lg items-center">
          Instant Commerce <Bolt className="inline w-4 h-4 ml-2" />
        </div>
        <div>02/2022 - Present</div>
      </div>
      <div>
        I started at Instant Commerce during its early stages as a Mid Frontend
        Developer which gave me the opportunity to actively help shaping the
        product. This role allowed me to enhance my React skills and explore new
        frameworks and libraries. It was a dynamic and fast-paced environment,
        fostering adaptability and innovation. Collaborating within a diverse,
        international team was a valuable experience, expanding my
        cross-cultural communication skills.
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
        As a Junior Frontend Developer at Narando, I was part of a small, agile
        team of three developers. I contributed to building the latest product
        version, gaining expertise in TypeScript and React. I held
        responsibility for the frontend and benefited from the mentorship of
        senior developers, enhancing my skills and knowledge.
      </div>
    </div>
  </div>
)
