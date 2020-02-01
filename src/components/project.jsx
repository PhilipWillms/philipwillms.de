import React from "react";
import { Label } from "./label";

export const Project = props => {
  return (
    <div className="flex flex-col items-left w-5/6 mt-10">
      <h1 className="text-l font-bold mt-3 mb-1 text-gray-400 tex-weight">
        Lorem ipsum
      </h1>
      <div className="mb-6">
        <Label name="Swift" color="bg-red-400" />
        <Label name="Typescript" color="bg-green-200" />
      </div>

      <p className="font-thin mb-4 text-gray-400">
        At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <p className="font-thin mb-4 text-gray-400">
        Stet clita kasd gubergren, no sea takimata sanctus est.
      </p>
      <p className="font-thin mb-4 text-gray-400">
        Stet clita kasd gubergren, no sea.
      </p>
      <p className="tracking-wider italic text-xs text-gray-400 font-thin">
        31.04.2019
      </p>
    </div>
  );
};
