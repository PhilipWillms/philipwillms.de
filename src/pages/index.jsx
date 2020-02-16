import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import { Description } from "../components/description";
import { Header } from "../components/header";
import { Project } from "../components/project";
import { Footer } from "../components/footer";
import Projects from "../markdown-pages/project.yaml";
import leptop from "../images/leptop.ico";

const IndexPage = props => (
  <div className="flex items-center w-full justify-center bg-gray-100">
    <div className="flex flex-col w-full items-center bg-gray-100 max-w-6xl">
      <Helmet>
        <link rel="icon" type="image/png" href={leptop} sizes="32x32" />
        <title>Philip Willms</title>
      </Helmet>
      <Description
        descriptionText={props.data.descriptionContent}
        headerImage={props.data.headerImage}
      />
      <Header header="My Projects" />
      {Projects.map((project, index) => {
        return <Project key={index} projectData={project} />;
      })}
      <Footer bielefeld={props.data.bielefeld} />
    </div>
  </div>
);

export default IndexPage;

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
`;
