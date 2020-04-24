import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Breakpoint } from "react-socks"
import ProjectMobile from "../components/project-mobile"
import ProjectDesktop from "../components/project-desktop"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Project" />
      <Breakpoint small down>
        <ProjectMobile content={data.allMarkdownRemark.edges[0].node.frontmatter} />
      </Breakpoint>
      <Breakpoint medium up>
        <ProjectDesktop content={data.allMarkdownRemark.edges[0].node.frontmatter} />
      </Breakpoint>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fields: {slug: {eq: "/1_mobile-redesign/"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            img1
            img2
            img3
            img4
            img5
            img6
            p1
            p2
            p3
            p4
            p5
            p6
          }
        }
      }
    }
  }
`