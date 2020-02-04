import React from "react"
import Img from "gatsby-image"

export const Footer = props => (
  <div className="flex column items-center h-20  mt-8 w-full justify-center">
    <Img
      title="Product image"
      className="rounded-full w-6 h-6 mb-2"
      fluid={props.bielefeld.childImageSharp.fluid}
    />
    <p className="text-gray-400 font-normal">
      Bielefeld | {new Date().getFullYear()}
    </p>
  </div>
)
