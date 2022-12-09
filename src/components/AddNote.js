import Form from "react-bootstrap/Form";
import { useState } from "react";
import Note from "./Note";

function AddNote() {
  // function from stack overflow
  let increment = (function (i) {
    return function () {
      i += 1;
      return i;
    };
  })(0);

  const colours = [
    { value: "#b3f0ff", text: "Blue" },
    { value: "#ffcce6", text: "Pink" },
    { value: "#ffbb99", text: "Peach" },
    { value: "#b3e6b3", text: "Green" },
  ];

  const [selectedColour, setSelectedColour] = useState(colours[0].value);
  const [noteBody, setNoteBody] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  const [noteArray, setNoteArray] = useState([]);

  const createNote = (e) => {
    e.preventDefault();
    setNoteArray([...noteArray, { title: noteTitle, body: noteBody, colour:selectedColour }]);

  };

  const getTitle = (e) => {
    setNoteTitle(e.target.value);
  };

  const getNote = (e) => {
    setNoteBody(e.target.value);
  };

  const getColour = (e) => {
    setSelectedColour(e.target.value);
  };

  return (
    <div className="AddNote">
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your title:</Form.Label>
            <Form.Control type="text" onChange={getTitle} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your note:</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={getNote} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select a colour:</Form.Label>
            <Form.Select value={selectedColour} onChange={getColour}>
              {colours.map((colour) => (
                <option key={colour.value} value={colour.value}>
                  {colour.text}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <button onClick={createNote}>Add</button>
        </Form>
      </div>
      <div className='noteSection'>
      {noteArray.map((value, key) => {
        return (
          <Note key={key} title={value.title} body={value.body} colour={value.colour}/>
        );
       })}
      </div>
    </div>
  );
}

export default AddNote;
