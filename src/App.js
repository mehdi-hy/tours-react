import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const getData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  const handleDelete = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const refresh = () => {
    setIsLoading(true);
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {isLoading && <Loading />}
      {isError && <h1>Error.....</h1>}
      {!isLoading && (
        <Tours tours={tours} handleDelete={handleDelete} refresh={refresh} />
      )}
    </>
  );
}

export default App;
