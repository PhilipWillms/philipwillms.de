import React from "react";
import { Label } from "./label";

export const Project = props => (
  <div className="flex flex-col items-left w-5/6 mt-10">
    <h1 className="text-l font-bold mt-3 mb-1 text-gray-400 tex-weight">
      {props.projectData.title}
    </h1>
    <div className="mb-6">
      {props.projectData.labels.map((label, index) => {
        return <Label key={index} name={label[0]} color={label[1]} />;
      })}
    </div>
    {props.projectData.textParagraphs.map((_, index) => {
      return (
        <p key={index} className="font-thin mb-4 text-gray-400">
          {props.projectData.textParagraphs[index]}
        </p>
      );
    })}

    <p className="tracking-wider italic text-xs text-gray-400 font-thin">
      {props.projectData.date}
    </p>
  </div>
);
