import React from "react"
import { graphql } from "gatsby"

import { Description } from "../components/description"
import { Project } from "../components/project"
import { Footer } from "../components/footer"
import Projects from "../markdown-pages/project.yaml"

const IndexPage = props => (
  <div className="flex flex-col items-center bg-gray-100">
    <Description
      descriptionText={props.data.descriptionContent}
      headerImage={props.data.headerImage}
    />
    {Projects.map((project, index) => {
      return <Project key={index} projectData={project} />
    })}
    <Footer bielefeld={props.data.bielefeld} />
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
    bielefeld: file(relativePath: { eq: "bielefeld.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
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
