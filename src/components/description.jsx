import React from "react";
import Img from "gatsby-image";

export const Description = props => {
  return (
    <div className="flex flex-col items-center w-6/7 mt-20">
      <Img
        title="Product image"
        className="rounded-full w-24 h-24"
        fluid={props.headerImage.childImageSharp.fluid}
      />
      <h1 className="text-xl mt-3 mb-1">
        {props.descriptionText.frontmatter.name}
      </h1>
      <div className="text-gray-400 text-sm">
        <a className="italic">Email</a> | 
        <a className="italic"> Github</a> |<a className="italic"> Gitlab</a>
      </div>
      <p className="text-center text-lg mt-5 font-hairline text-gray-400 leading-relaxed tracking-wide">
        {props.descriptionText.frontmatter.descriptionText}
      </p>
    </div>
  );
};
