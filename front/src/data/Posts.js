import {gql} from "@apollo/client";
export const GET_POST = gql`
  query GetLocations {
    posts {
    data {
      id
      attributes {
        title
        description
        category
        img {
          data {
            attributes {
              url
            }
          }
        }
        color
        price
        images {
          data {
            attributes {
              url 
            }
          }
        }
      }
    }
  }
  }
`;