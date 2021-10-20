import React from "react"
import Img from "gatsby-image"

export const Description = props => (
  <div className="flex flex-col items-center mt-10 mb-10 w-11/12 sm:w-8/12">
    <div className="flex flex-col items-center w-full sm:flex-col">
      <div className="flex flex-row items-center w-full mb-4">
        <Img
          title="Product image"
          className="rounded-full w-16 h-16 mr-5 flex"
          fluid={props.headerImage.childImageSharp.fluid}
        />
        <p className="text-left text-3xl font-medium text-black leading-relaxed">
          Hey I am Philip
        </p>
      </div>
      <p className="text-left text-md font-light text-gray-400 leading-relaxed">
        {props.frontmatter.firstParagraph}
      </p>
      <p className="text-left text-md mt-4 font-light text-gray-400 leading-relaxed">
        {props.frontmatter.secondParagraph}
      </p>
    </div>
  </div>
)
