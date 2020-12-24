import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiChevronLeft, HiRefresh } from "react-icons/hi";

import api from "./services/api.js";
import Quote from "./Quote";

import { Container } from "./styles";

function Author() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { author } = useParams();

  const fetchData = useCallback(async () => {
    setLoading(true);
    return await api
      .get(`quotes?author=${author}&limit=100`)
      .then((res) => {
        setQuotes(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [author]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="author">
            <a href="/">
              <HiChevronLeft color="#000" size={16} />
              Back
            </a>
            <h1>{author}</h1>
          </div>
          {quotes.map((quote) => (
            <Quote key={quote._id} data={quote} compact />
          ))}
        </>
      )}
    </Container>
  );
}

export default Author;
