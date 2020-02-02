import React from "react"
import { Description } from "../components/description"
import { graphql } from "gatsby"

const IndexPage = props => (
  <div className="flex flex-col items-center">
    <Description
      descriptionText={props.data.descriptionContent}
      headerImage={props.data.headerImage}
    />
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
