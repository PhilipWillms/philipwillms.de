import React from "react";
import Img from "gatsby-image";

export const Description = props => (
  <div className="flex flex-col items-center w-6/7 mt-20 sm:w-5/6">
    <div className="flex flex-col items-center w-full sm:flex-row">
      <Img
        title="Product image"
        className="rounded-full w-24 h-24"
        fluid={props.headerImage.childImageSharp.fluid}
      />
      <h1 className="text-xl mt-3 mb-1 sm:m-0 sm:ml-4 sm:font-medium sm:mb-4">
        {props.descriptionText.frontmatter.name}
      </h1>
      <div className="text-gray-400 text-sm sm:ml-auto sm:mb-4 sm:text-base">
        <a className="italic">Email</a> | 
        <a className="italic"> Github</a> |<a className="italic"> Gitlab</a>
      </div>
    </div>
    <p className="text-center text-lg mt-5 font-hairline text-gray-400 leading-relaxed tracking-wide sm:text-left sm:mr-auto sm:text-xl sm:max-w-2xl">
      {props.descriptionText.frontmatter.descriptionText}
    </p>
  </div>
);
