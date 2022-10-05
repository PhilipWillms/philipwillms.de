import React from "react"
import { Link } from "gatsby"

import { ExternalLink } from "./externalLink"

export const TopBar = () => (
  <div className="flex justify-between w-full mt-4 max-w-4xl mb-10 flex-row items-center">
    <h1 className="text-2xl text-white m-0 font-semibold border-transparent border-b hover:border-theme-300">
      <Link to="/">Philip Willms</Link>
    </h1>
    <div className="text-black-400 text-m">
      <a
        href="https://github.com/PhilipWillms"
        className="flex flex-row gap-1 items-center cursor-pointer mr-2 border-transparent py-1 text-white border-b hover:border-theme-300"
        target="_blank"
        rel="noreferrer"
      >
        Github
        <ExternalLink className="h-3 w-3" />
      </a>
    </div>
  </div>
)
