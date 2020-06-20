import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Zach's Digital Garden" />
    <div className="container grid grid-cols-12 py-10">
      <div className="col-span-6 col-start-4 space-y-8">
        {data.allMdx.edges.map(({ node }) => (
          <Link to={node.fields.slug} key={node.id} className="block p-4 text-gray-900 bg-gray-100 border border-gray-300">
            <h2 class="mb-1">{node.frontmatter.title}</h2>
            <p>{node.frontmatter.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
