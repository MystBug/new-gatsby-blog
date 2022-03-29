import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const blogPost = ({ data }) => {
  const post = data.markdownRemark;
  console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export default blogPost
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
      }
      html
    }
  }
`