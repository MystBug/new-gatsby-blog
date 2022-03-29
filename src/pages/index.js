import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 30px;
  color: red;
`

const index = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Kiki's thoughts</h1>
      <h4>{ data.allMarkdownRemark.totalCount }</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>{ node.frontmatter.date} - { node.frontmatter.title }</BlogTitle>
          </BlogLink>
          <p>{ node.excerpt }</p>
        </div>
      ))}
    </div>
    
  </Layout>
)

export default index;
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date(locale: "nl-NL", formatString: "D-MMM-YYYY")
            description
            title
          }
          fields {
            slug
          }
          excerpt(truncate: true)
        }
      }
    }
  }
`