import { gql } from 'graphql-request';

export const getHomepageProps = gql`
  query getHomepageProps {
    stores(orderBy: sort_ASC) {
      id
      name
      description
      slug
      image {
        url(transformation: { image: { resize: { fit: clip, width: 1000 } } })
        alt
      }
      hasExternalPage
      externalUrl
    }
    callToAction(where: { id: "cl3ak154l759w0bk747xcq2s3" }) {
      header
      subheader
    }
    aboutus(where: { id: "cl3aktuhi7tat0bk7w4fsvbcn" }) {
      header
      subheader
    }
  }
`;

export const getStores = gql`
  query getStores {
    stores {
      id
      name
      description
      slug
      image {
        id
        url(transformation: { image: { resize: { fit: clip, width: 1000 } } })
        alt
      }
      address {
        id
        street
        city
        state
        zipcode
      }
      article {
        raw
      }
      hasExternalPage
      externalUrl
    }
  }
`;

export const getStore = gql`
  query getStore($slug: String!) {
    store(where: { slug: $slug }) {
      id
      name
      description
      slug
      image {
        id
        url(transformation: { image: { resize: { fit: clip, width: 1000 } } })
        width
        height
        alt
      }
      address {
        id
        street
        city
        state
        zipcode
      }
      article {
        raw
      }
      hasExternalPage
      externalUrl
    }
  }
`;

export const getJobListings = gql`
  query getJobListings {
    joblistings {
      id
      title
      description
      datePosted
      isFulltime
      wage
      estimatedHours
      store {
        id
        name
        address {
          id
          street
          city
          state
          zipcode
        }
      }
    }
  }
`;

export const getJobListing = gql`
  query getJobListing($id: ID!) {
    joblisting(where: { id: $id }) {
      id
      title
      description
      datePosted
      isFulltime
      wage
      estimatedHours
      article {
        raw
      }
      store {
        id
        name
        description
        address {
          id
          street
          city
          state
          zipcode
        }
      }
    }
  }
`;

export const getSitemapLinks = gql`
  query getSitemapLinks {
    stores(orderBy: sort_ASC) {
      id
      name
      slug
    }
    joblistings(orderBy: datePosted_ASC) {
      id
      title
    }
  }
`;

export const getStoreSlugs = gql`
  query getStoreSlugs {
    stores {
      id
      slug
    }
  }
`;

export const getJobListingSlugs = gql`
  query getJobListingSlugs {
    joblistings {
      id
    }
  }
`;
