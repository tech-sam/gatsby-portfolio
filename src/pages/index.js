import React from "react"
import { Link, graphql } from "gatsby"
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import Header from "../components/header"
import Image from "../components/image"
import SEO from "../components/seo"
import { theme } from '../styles'
import Projects from '../components/projects';


const IndexPage = ({ data }) => {

  return (
    <>
      <Layout>
        <Header data={data.header.edges}/>
        <Projects data={data.projects.edges}/>
      </Layout>
    </>
  )
}


//   <Layout>
//   <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//   <h1>Hi people</h1>
//   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//     <Image />
//   </div>
//   <Link to="/page-2/">Go to page 2</Link>

// </Layout>

export default IndexPage


export const query = graphql`

  query IndexQuery {
    header: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/header/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            subitems
            contactText
          }
          html
        }
      }
    }

    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            image
            tech
            github
            external
          }
          html
        }
      }
    }
  }


`;

