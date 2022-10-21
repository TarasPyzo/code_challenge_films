import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import App from '../App';
import { GET_ALL_FILMS } from '../apis/films.gql';

const mocks = [
  {
    request: {
      query: GET_ALL_FILMS,
      variables: {
        first: 2,
      }
    },
    result: {
      data: {
        allFilms: { films: [{ title: "A New Hope", director: "George Lucas" }] },
      }
    }
  }
];

it("should render app without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
});

it("should render film", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
  expect(await screen.findByText("A New Hope")).toBeInTheDocument();
});
