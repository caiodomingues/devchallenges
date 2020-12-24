import React from "react";
import { HiChevronRight } from "react-icons/hi";

import { Container, Card } from "./styles";

const Quote = ({ data, compact }) => {
  const { quoteText, quoteAuthor, quoteGenre } = data;
  return (
    <>
      <Container>
        <h1>"{quoteText}"</h1>
      </Container>
      {!compact && (
        <Card>
          <a href={quoteAuthor}>{quoteAuthor}</a>
          <p>{quoteGenre}</p>
          <HiChevronRight size={32} color="#fff" />
        </Card>
      )}
    </>
  );
};

export default Quote;
