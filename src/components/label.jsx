import React from "react"

export const Label = props => (
  <div
    className={`p-1 w-auto pr-2 pl-2 text-center text-xs inline-block text-white rounded items-center mr-2 ${props.color}`}
  >
    {props.name}
  </div>
)
