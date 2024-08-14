import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chemical from "./ChemicalItem";
import { Container, Input, Label, Table } from "reactstrap";
import {
  addChemical,
  deleteChemical,
  editChemical
} from "../redux/chemicalSlice";
import SearchBar from "./SearchBar";
import AddChemical from "./AddChemical";
import "./chemicalapp.css";
import Swal from 'sweetalert2';

export default function ChemicalApp() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const chemicals = useSelector((state) => state.chemicals.chemicals);

  const handle_add = (text) => {
    dispatch(addChemical(text));
  };

  const handle_delete = (text) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "The element has been deleted.",
          icon: "success"
        });
        dispatch(deleteChemical(text));
      }
    });
  };

  const handle_edit = (text) => {
    dispatch(editChemical(text));
  };

  const filteredChemicals = chemicals.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.formula.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <h1 className="title">Chemical App</h1>
      <AddChemical handle_add={handle_add} />
      <Table hover className="settable">
        <SearchBar />
        <thead>
          <tr>
            <th><i className="fa-solid fa-hashtag"></i> ID</th>
            <th><i className="fa-solid fa-vial-circle-check"></i> Name</th>
            <th><i className="fa-solid fa-vial"></i> Formula</th>
            <th><i className="fa-solid fa-delete-left"></i> Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredChemicals.map((item, index) => (
            <Chemical
              key={index}
              chemical={item}
              deleteChem={handle_delete}
              editChem={handle_edit}
            />
          ))}
        </tbody>
      </Table>
      <Label>Search:
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearch("");
            }
          }}
        />
      </Label>
    </Container>
  );
}
