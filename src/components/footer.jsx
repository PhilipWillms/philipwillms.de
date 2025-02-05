import React from "react"

export const Footer = () => (
  <div className="flex items-center justify-end w-full pb-5 pt-8 md:pb-10 mt-auto column">
    <p className="font-light text-white text-sm">
      {new Date().getFullYear()} - Berlin
    </p>
  </div>
)
