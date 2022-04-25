import React from "react"
import Img from "gatsby-image"

export const Footer = props => (
  <div className="flex items-center justify-center w-full h-20 pt-20 pb-10 mt-auto column">
    <p className="font-normal text-gray-400">
      {new Date().getFullYear()}
    </p>
  </div>
)
