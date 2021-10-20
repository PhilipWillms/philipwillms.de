import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import { TopBar } from "../components/topBar"
import { Description } from "../components/description"
import { Header } from "../components/header"
import { Project } from "../components/project"
import { Footer } from "../components/footer"
import Projects from "../content/project.yaml"
import leptop from "../images/leptop.ico"

const IndexPage = props => {
  const {
    data: {
      descriptionContent: {
        childMarkdownRemark: { frontmatter: contentFrontmatter },
      },
      seoContent: {
        childMarkdownRemark: { frontmatter: seoFrontmatter },
      },
      headerImage,
      bielefeld,
    },
  } = props

  return (
    <div className="flex w-full h-screen justify-center bg-gray-100 font-lato">
      <div className="flex flex-col w-full items-center bg-gray-100 max-w-screen-lg">
        <Helmet>
          <link rel="icon" type="image/png" href={leptop} sizes="32x32" />
          <title>{seoFrontmatter.title}</title>
          <meta name="description" content={seoFrontmatter.description} />
        </Helmet>
        <TopBar title={contentFrontmatter.name} />
        <Description
          headerImage={headerImage}
          frontmatter={contentFrontmatter}
        />
        <Header title="Projects" />
        {Projects.map((project, index) => (
          <Project key={index} projectData={project} />
        ))}
        <Footer bielefeld={bielefeld} />
      </div>
    </div>
  )
}
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
    descriptionContent: file(relativePath: { eq: "description.md" }) {
      childMarkdownRemark {
        frontmatter {
          name
          firstParagraph
          secondParagraph
          thirdParagraph
        }
      }
    }
    seoContent: file(relativePath: { eq: "seo.md" }) {
      childMarkdownRemark {
        frontmatter {
          description
          title
        }
      }
    }
  }
`
