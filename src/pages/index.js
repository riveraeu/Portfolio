import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./projects.css"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="container-hero">
        <div className="container-hero-inner">
          <h1 className="hero-title">Eugene <br className="break" />Rivera</h1>
          <p className="hero-copy">Is a freelance web developer that has been working with Restoration Hardware for the past year.
          Take a look at his work or reach out to inquire about his services.</p>
        </div>
      </div>
      <div className="container-project-outer">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="container-project" key={node.id}>
            <div data-sal="zoom-in" className="container-project-inner">
              <div className={node.frontmatter.col1Classes}>
                <picture>
                  <source srcSet={node.frontmatter.col1ImgMobile} media="(max-width: 768px)" />
                  <source srcSet={node.frontmatter.col1ImgDesktop} media="(min-width: 768px)" />
                  <img className={node.frontmatter.col1ImgClass} src={node.frontmatter.col1ImgMobile} alt={node.frontmatter.col1ImgAlt} />
                </picture>
              </div>
                <div className={node.frontmatter.col2Classes} dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: fields___slug}) {
      edges {
        node {
          id
          html
          frontmatter {
            col1Classes
            col2Classes
            col1ImgClass
            col1ImgMobile
            col1ImgDesktop
            col1ImgAlt
            title
          }
        }
      }
    }
  }
`