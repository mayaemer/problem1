import Form from "react-bootstrap/Form";
import { useState } from "react";
import Note from "./Note";

function AddNote() {

  const colours = [
    { value: "#b3f0ff", text: "Blue" },
    { value: "#ffcce6", text: "Pink" },
    { value: "#ffbb99", text: "Peach" },
    { value: "#b3e6b3", text: "Green" },
  ];

  const [noteId, setNoteId] = useState(0);
  const [selectedColour, setSelectedColour] = useState(colours[0].value);
  const [noteBody, setNoteBody] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteArray, setNoteArray] = useState([]);
  const [formVisible, setFormVisible] = useState(true)

  const deleteNote = (e) => {
    const deleteElement = noteArray.filter((note) => note.id != e.target.value);
    setNoteArray(deleteElement)
  }

  const createNote = (e) => {
    console.log(noteId)
    e.preventDefault();
    setNoteArray([...noteArray, { id: noteId, title: noteTitle, body: noteBody, colour:selectedColour }]);
    setFormVisible(false)
    setNoteId(noteId + 1);
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
      { formVisible && <div className="form">
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
      </div>}
      <div className='noteSection'>
      {noteArray.map((value, key) => {
        return (
          <div>
            <Note key={key} title={value.title} body={value.body} colour={value.colour}/>
            <button onClick={deleteNote} value={value.id}>Delete</button>
            <button>Edit</button>
          </div>
        );
       })}
      </div>
    </div>
  );
}

export default AddNote;
