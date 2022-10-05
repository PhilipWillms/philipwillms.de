import React from "react"
import { Bolt } from "./bolt"

export const Description = () => (
  <div className="flex flex-col w-full items-center mt-10 mb-10 sm:w-9/12">
    <div className="flex flex-col items-start w-full mb-4">
      <p className="text-left text-md font-light text-theme-300">
        I am a Software Developer and enjoy working with modern frontend web
        technologies like react, NextJs, tailwind or styled-components.
      </p>
      <p className="mt-4 text-left text-md font-light text-theme-300">
        Currently I work as a Frontend Developer at Instant Commerce in
        Amsterdam. <Bolt className="inline mb-1 h-4 w-4" />
      </p>
    </div>
  </div>
)
