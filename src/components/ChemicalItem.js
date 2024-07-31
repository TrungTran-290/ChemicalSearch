import React, { useState } from "react";
import { Button } from "reactstrap";
import EditChemical from "./EditChemical";
export default function Chemical({ chemical, deleteChem, editChem }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");

  return (
    <tr>
      <td>{chemical.id}</td>
      {
        <td>
          <EditChemical
            id={chemical.id}
            text={text}
            setText={setText}
            edit={edit}
            setEdit={setEdit}
            chemical={chemical}
            editChem={editChem}
          />
        </td>
      }


      <td>{chemical.formula}</td>
      <td>
        <Button
          className="btn btn-danger"
          onClick={() => deleteChem(chemical.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
