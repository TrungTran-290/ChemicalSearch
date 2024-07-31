import React, { useState } from "react";
import {  FormGroup, Input, Label } from "reactstrap";
import "./chemicalapp.css"
export default function AddChemical({ handle_add }) {
  const [text, setText] = useState("");
  const [formula, setFormula] = useState("");
  return (
    <div className="box">
      <FormGroup className="addbar p-3 ms-auto"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handle_add({ name: text, formula: formula });
            setText("");
            setFormula("");
          }
        }}
      >
        <Label for="examplePassword">Name </Label>
        <Input placeholder="Enter name..." value={text} onChange={(e) => setText(e.target.value)} />
        <Label for="examplePassword">Formula </Label>
        <Input placeholder="Enter formula..." value={formula} onChange={(e) => setFormula(e.target.value)} />
      </FormGroup>
      </div>
  );
}
