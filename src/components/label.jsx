import React from "react";

export const Label = props => {
  return (
    <div
      className={`p-1 w-20 text-center text-xs inline-block text-white rounded items-center mr-2 ${props.color}`}
    >
      {props.name}
    </div>
  );
};
