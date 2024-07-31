import React from 'react'
import { Input } from 'reactstrap';

export default function EditChemical({id,text,setText,edit,setEdit, chemical,editChem}) {
  return (
    edit?<td><Input  value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => {
        if (e.key === "Enter") {
        editChem({id:chemical.id,name:text,formula:"none"});
          setText("");
          setEdit(!edit)
        }
      }}/></td>:<td onDoubleClick={()=>setEdit(!edit)}>{chemical.name}</td>
  )
}
