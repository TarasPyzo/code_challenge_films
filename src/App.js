import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_ALL_FILMS } from './apis/films.gql';
import Films from './components/Films';

const numberOfItemsOnPage = 2;

function App() {
  const [queryVars, setQueryVars] = useState({ first: numberOfItemsOnPage });
  const [page, setPage] = useState(1);
  const { data, loading, error } = useQuery(
    GET_ALL_FILMS,
    { variables: queryVars },
  );

  if (loading) return <div className="font-bold text-2xl flex justify-center">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { films, pageInfo, totalCount: totalCountOfItems } = data.allFilms;

  return (
    <div className="container mx-auto w-[800px] bg-sky-50 p-10">
      <h1 className="text-2xl font-bold underline text-blue-800 flex justify-center mb-5">
        Films
      </h1>
      <Films totalCountOfItems={totalCountOfItems} films={films} />
      <div className="flex justify-center">
        <button
          className="p-2 border-2 border-red-700 rounded-md mr-10 disabled:bg-gray-300"
          onClick={() => {
            setQueryVars({ last: numberOfItemsOnPage, before: pageInfo.startCursor });
            setPage(page - 1);
          }}
          disabled={!(page > 1)}
        >
          {'< Previous'}
        </button>
        <button
          className="p-2 border-2 border-red-700 rounded-md disabled:bg-gray-300"
          onClick={() => {
            setQueryVars({ first: numberOfItemsOnPage, after: pageInfo.endCursor });
            setPage(page + 1);
          }}
          disabled={!(page < totalCountOfItems / numberOfItemsOnPage)}
        >
          {'Next >'}
        </button>
      </div>
    </div>
  );
}

export default App;
