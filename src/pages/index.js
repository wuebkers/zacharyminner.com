import React from 'react';
import { graphql, Link } from 'gatsby';

import Divider from '../components/divider';
import Seo from '../components/seo';
import Layout from '../components/layout/layout';
import Image from '../components/image';
import ContentPreview from '../components/content-preview';

const IndexPage = ({ data, location }) => {
  const isHome = location.pathname === '/';

  return (
    <Layout isHome={isHome}>
      <Seo title="Projects, games, ideas" />
      <div className="container py-10">
        <div className="flex">
          <div className="flex-grow leading-normal md:mr-20 text-24">
            I'm a web developer building websites and applications at{' '}
            <a href="https://www.skycatchfire.com/" target="_blank" rel="noreferrer" className="font-bold">
              SKYCATCHFIRE
            </a>
            . I live in North Canton with my beautiful girlfriend Haley, my playful cat Ava, and my tiny kitten Lily. I'm a Zach of all trades and I'm always trying to learn more about myself and
            everything else.
          </div>
          <div style={{ width: '175px', height: '175px' }} className="flex-shrink-0 hidden overflow-hidden border-4 border-gray-900 border-solid rounded-full md:block header-image">
            <Image filename="zach-and-haley.png" />
          </div>
        </div>

        <div>
          <Link to="/">Experience</Link>
        </div>

        <Divider />

        <div className="grid grid-cols-1">
          <div>
            <h2 className="mb-8 font-black text-24">Notes</h2>
            <ul className="grid gap-y-10 gap-x-16 md:grid-cols-2">
              {data.allMdx.edges
                .filter((edge) => edge.node.fields.category === 'articles')
                .map(({ node }) => (
                  <li key={node.id}>
                    <ContentPreview slug={node.fields.slug} title={node.frontmatter.title} date={node.frontmatter.date} summary={node.frontmatter.summary} />
                  </li>
                ))}
            </ul>
          </div>

          <Divider />

          <div>
            <h2 className="mb-8 font-black text-24">Projects</h2>
            <ul className="grid gap-y-10 gap-x-16 md:grid-cols-2">
              {data.allMdx.edges
                .filter((edge) => edge.node.fields.category === 'projects')
                .map(({ node }) => (
                  <li key={node.id}>
                    <ContentPreview slug={node.fields.slug} title={node.frontmatter.title} date={node.frontmatter.date} summary={node.frontmatter.summary} tags={node.frontmatter.tags} />
                  </li>
                ))}
            </ul>
          </div>

          <Divider />

          <div>
            <h2 className="mb-8 font-black text-24">Code Snippets</h2>
            <ul>
              {data.allMdx.edges
                .filter((edge) => edge.node.fields.category === 'snippets')
                .map(({ node }) => (
                  <li key={node.id}>
                    <ContentPreview slug={node.fields.slug} title={node.frontmatter.title} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

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
            tags
          }
          fields {
            slug
            category
          }
        }
      }
    }
  }
`;
