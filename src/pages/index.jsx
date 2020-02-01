import React from "react"
import { graphql } from "gatsby"
import { Description } from "../components/description"
import { Project } from "../components/project"

const IndexPage = props => (
  <div className="flex flex-col items-center bg-gray-100">
    <Description
      descriptionText={props.data.descriptionContent}
      headerImage={props.data.headerImage}
    />
    <Project />
    <Project />
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    headerImage: file(relativePath: { eq: "PW.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    descriptionContent: markdownRemark {
      frontmatter {
        name
        descriptionText
      }
    }
  }
`
