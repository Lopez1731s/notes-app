import React, { useState } from "react";

import { Form, Col } from "react-bootstrap";
import Notes from "./Notes";

const SearchBar = ({ data, loading, error, refetch }) => {
  const [noteName, setnoteName] = useState({ search: "" });

  const handleChange = ({ target }) => {
    setnoteName({
      ...noteName,
      [target.name]: target.value,
    });
  };

  const newData = data
    ? data.filter((note) => {
        if (noteName.search === "") {
          return note;
        } else if (
          note.title.toLowerCase().includes(noteName.search.toLowerCase())
        ) {
          return note;
        }
        return false;
      })
    : "";

  return (
    <>
      <Col xs={12} md={6} lg={10}>
        <h3>Search notes</h3>
        <Form.Control
          className="mt-2"
          type="text"
          placeholder="Look for a note..."
          name="search"
          onChange={handleChange}
        />
      </Col>

      <Col xs={12} md={6} lg={12}>
        <Notes
          data={newData}
          loading={loading}
          error={error}
          refetch={refetch}
          size={4}
          noteName={noteName.search}
        />
      </Col>
    </>
  );
};

export default SearchBar;

/**      */
