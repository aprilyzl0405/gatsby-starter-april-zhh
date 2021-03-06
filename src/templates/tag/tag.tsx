import React, { FC } from 'react';
import { graphql } from 'gatsby';

import dayjs from 'dayjs';

import { useSearchParam } from 'react-use';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import NoSsr from '@material-ui/core/NoSsr';

import { getRandom } from '@/utils/utils';

import useConfig from '@/components/Config';
import Layout from '@/components/Layout/layout';
import BackGround from "@/components/Layout/background";
import Tags from '@/components/Tags';
import PostCard from '@/components/Card/post';

const useStyles = makeStyles(theme => ({
  backgroundiv: {
    height: '50vh',
    overflow: 'hidden',
    backgroundPositionY: '-25rem',
  },
  paper: {
    padding: '1rem',
    position: 'relative',
    top: '-3rem',
  },
  tagCtn: {
    display: '-webkit-flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}));

interface TagPageProps { 
  pageContext: {
    tag: string;
    tags: string[];
  };
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          fields: {
            path: string;
          };
          frontmatter: {
            date: string;
            title: string;
            tags: string[];
            description?: string;
            categories: string[];
            image?: string;
          };
        };
      }[];
    }
  }
}

// eslint-disable-next-line react/prop-types
const TagPage: FC<TagPageProps> = ({ data, pageContext }) => {
  const classes = useStyles();
  const { getDefaultImg } = useConfig();
  const { edges } = data.allMarkdownRemark;
  const { tag, tags } = pageContext;

  return (
    <Layout>
      <BackGround type="home" />
      <NoSsr>
        <Container>

          <Paper elevation={3} className={`${classes.paper} ${classes.tagCtn}`}>
            <Tags tags={tags} select={tag} type={useSearchParam("t") as 'wall' | 'cloud'} />
          </Paper>
          <div className="col-xl-10 col-lg-7 col-md-12 col-xs-12 order-2">
            <div
              className="col-12"
              style={{
                fontSize: 20,
                margin: 15,
              }}
            >
              {edges.length}
              &nbsp;Articles in&nbsp;
              {tag}
            </div>
            <Grid container spacing={2}>
              {
                edges.map(({ node }) => {
                  const { frontmatter, fields: { path } } = node;
                  const image = frontmatter.image || getRandom(getDefaultImg());
                  const formatDate = dayjs(frontmatter.date).format('YYYY-MM-DD');
                  const { title, description, categories } = frontmatter;

                  return (
                    <Grid item xs={12} sm={6} md={4} key={title}>

                      <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={800}>
                        <Box>
                          <PostCard
                            path={path}
                            image={image}
                            date={formatDate}
                            title={title}
                            description={description}
                            tagShow={false}
                            categories={categories}
                          />
                        </Box>
                      </Slide>
                    </Grid>
                  )
                })
              }
            </Grid>

          </div>
          <div className="col-xl-2 col-lg-1 order-3" />
        </Container>
      </NoSsr>
    </Layout>
  );
};

export default TagPage;

export const pageQuery = graphql`
  query tagQuery($tag: [String!]) {
    allMarkdownRemark(
      filter: {frontmatter: {tags: {in: $tag}, draft: {ne: true}}}, 
      sort: {order: DESC, fields: frontmatter___date}
    ) {
      edges {
        node {
          id
          fields {
            path
          }
          frontmatter {
            title
            date
            tags
            categories
            description
            image
          }
        }
      }
      totalCount
    }
  }`
