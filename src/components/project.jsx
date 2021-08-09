import React from "react"
import { Label } from "./label"

export const Project = props => (
  <a
    href={props.projectData.link}
    className="flex flex-col items-left w-11/12 sm:w-8/12 mt-6"
    target="_blank"
    rel="noreferrer"
  >
    <h1 className="text-l font-bold mt-3 mb-1 text-black tex-weight">
      {props.projectData.title}
    </h1>
    {props.projectData.textParagraphs.map((_, index) => (
      <p key={index} className="font-light mb-2 text-gray-400">
        {props.projectData.textParagraphs[index]}
      </p>
    ))}
    <div className="mb-3 mt-1">
      {props.projectData.labels.map((label, index) => (
        <Label key={index} name={label[0]} color={label[1]} />
      ))}
    </div>
  </a>
)
