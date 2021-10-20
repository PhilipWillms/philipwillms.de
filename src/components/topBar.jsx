import React from "react"
import { Link } from "gatsby"

export const TopBar = props => (
  <div className="flex flex-col items-start justify-between mt-5 mb-5 w-11/12 sm:mb-10 sm:flex-row sm:items-center">
    <h1 className="text-2xl text-black-400 m-0 font-semibold">
      <Link to="/">{props.title}</Link>
    </h1>
    <div className="text-black-400 text-m">
      {/* <Link to="/contact" className="cursor-pointer mr-1">
        Email
      </Link>
      |  */}
      <a
        href="https://github.com/PhilipW97"
        className="cursor-pointer mr-2 hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      |
      <a
        href="https://gitlab.com/philip27"
        className="cursor-pointer mr-2 ml-2 hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Gitlab
      </a>
    </div>
  </div>
)
