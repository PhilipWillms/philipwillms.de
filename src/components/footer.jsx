import React from "react"

export const Footer = () => (
  <div className="flex items-center justify-end w-full h-20 pt-20 pb-10 mt-auto column">
    <p className="font-light text-white text-sm">
      {new Date().getFullYear()} - Amsterdam
    </p>
  </div>
)
