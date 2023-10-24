import React from "react"
import Helmet from "react-helmet"

import { TopBar } from "../components/topBar"
import { Description } from "../components/description"
import { Footer } from "../components/footer"
import laptop from "../images/laptop.ico"
import { Experience } from "../components/experience"

const IndexPage = () => (
  <div className="flex justify-center w-full h-screen px-6 bg-theme-500 font-lato">
    <div className="flex flex-col items-center w-full max-w-screen-md">
      <Helmet>
        <link rel="icon" type="image/png" href={laptop} sizes="32x32" />
        <title>Philip Willms</title>
        <meta name="description" content={".description"} />
      </Helmet>
      <TopBar />
      <Description />
      <Experience />
      <Footer />
    </div>
  </div>
)

export default IndexPage
