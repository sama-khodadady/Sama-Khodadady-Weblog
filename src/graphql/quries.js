import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query MyQuery {
    posts {
      author {
        ... on Author {
          name
          avatar {
            url
          }
        }
      }
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query MyQuery {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      post {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_BLOG_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          avatar {
            url
          }
          name
          field
        }
      }
      content {
        html
      }
      title
      slug
      coverPhoto {
        url
      }
    }
  }
`;

const GET_BLOG_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_INFO,
  GET_BLOG_INFO,
  GET_BLOG_COMMENTS,
};
