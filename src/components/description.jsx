import React from "react"
import { Briefcase } from "../icons/briefcase"
import { ExternalLink } from "../icons/externalLink"

export const Description = () => (
  <div className="flex flex-col w-full items-center md:mt-5 mb-8 sm:w-9/12">
    <div className="flex flex-col items-start w-full mb-4">
      <p className="mt-4 text-left text-md font-light text-theme-300">
        <span>
          Currently working at Hetzner Cloud.
          <Briefcase className="inline ml-1 mb-1 w-4 h-4" />
        </span>
      </p>
    </div>
  </div>
)
