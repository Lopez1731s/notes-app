import React from "react";
import { Container, Row } from "react-bootstrap";
import SearchBar from "../components/SearchBar";

import useNotes from "../hooks/useNotes";
const Search = () => {
  const { data, loading, error, refetch } = useNotes(
    "https://api.m3o.com/v1/notes/List"
  );
  return (
    <Container className="mt-5">
      <Row>
        <SearchBar
          data={data}
          loading={loading}
          error={error}
          refetch={refetch}
        />
      </Row>
    </Container>
  );
};

export default Search;
