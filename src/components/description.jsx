import React from "react"
import { Briefcase } from "../icons/briefcase"
import { ExternalLink } from "../icons/externalLink"

export const Description = () => (
  <div className="flex flex-col w-full items-center md:mt-5 mb-8 sm:w-9/12">
    <div className="flex flex-col items-start w-full mb-4">
      <p className="text-left text-md font-light text-theme-300">
        While my journey into tech may not have been a lifelong passion, I
        quickly fell in love with the way of thinking coding demands. The
        combination of implementing complex logic with the artful translation of
        stunning designs into fully functional, visually striking websites
        defines my passion and expertise in frontend development.
      </p>
      <p className="mt-4 text-left text-md font-light text-theme-300">
        <span>
          Currently working for Hetzner Cloud.
          <Briefcase className="inline ml-1 mb-1 w-4 h-4" />
          <br />
          Feel free to reach out to me on{" "}
          <a
            href="https://www.linkedin.com/in/philip-willms-5a5245219"
            className="inline-flex items-center gap-1 cursor-pointer mr-2 border-transparent py-1  border-b hover:border-theme-300"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ExternalLink className="h-3 w-3 stroke-2" />
          </a>
        </span>
      </p>
    </div>
  </div>
)
