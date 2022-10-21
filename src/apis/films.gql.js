import { gql } from '@apollo/client';

const GET_ALL_FILMS = gql`
  query GetAllFilms($first: Int, $last: Int, $before: String, $after: String) {
    allFilms(first: $first, last: $last, before: $before, after: $after) {
      films {
        id
        title
        director
        releaseDate
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
`;

export { GET_ALL_FILMS };
