import { Row } from "react-bootstrap";

//components
import AlertMsg from "./AlertMsg";
import CardNote from "./CardNote";
import LoadingMsg from "./LoadingMsg";

const Notes = ({ data, loading, error, refetch, size, noteName }) => {
  return (
    <>
      <h4 className="mt-5">Notes</h4>
      <Row>
        {error ? (
          <AlertMsg msg={"There is a problem: " + error} vari={"danger"} />
        ) : (
          ""
        )}

        {data <= 0 ? (
          <AlertMsg msg={"No notes yet, create one!"} vari={"info"} />
        ) : (
          data
            .sort(
              (a, b) =>
                new Date(a.updated).getTime() < new Date(b.updated).getTime()
            )
            .map((note) => (
              <CardNote
                note={note}
                refetch={refetch}
                key={note.id}
                size={size}
              />
            ))
        )}
        <LoadingMsg loading={loading} />
      </Row>
    </>
  );
};

export default Notes;