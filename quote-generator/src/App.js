import React, { useCallback, useEffect, useState } from "react";
import api from "./services/api.js";
import { HiRefresh } from "react-icons/hi";

import Quote from "./Quote";

import { Container } from "./styles";

function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    return await api
      .get("quotes/random?limit=1")
      .then((res) => {
        setQuote(res.data.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Quote data={quote} />
          <button onClick={fetchData} type="button">
            <HiRefresh size={16} color="#4f4f4f" />
            Random
          </button>
        </>
      )}
      <div className="me">Caio Domingues @ DevChallenges.io</div>
    </Container>
  );
}

export default App;
