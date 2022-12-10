import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Note from "./components/Note";

function App() {
  const [createBtn, setCreateBtn] = useState(true);

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
  const [formVisible, setFormVisible] = useState(false);

  const [editNoteArr, setEditNoteArr] = useState([]);

  const create = () => {
    setCreateBtn(false);
    setFormVisible(true);
  };

  const deleteNote = (e) => {
    const deleteElement = noteArray.filter((note) => note.id != e.target.value);
    setNoteArray(deleteElement);
  };

  console.log(editNoteArr);
  const editNote = (e) => {
    const editElement = noteArray.filter((note) => note.id == e.target.value);
    setEditNoteArr([
      ...editNoteArr,
      {
        id: editElement[0].id,
        title: editElement[0].title,
        body: editElement[0].body,
        colour: editElement[0].colour,
      },
    ]);

    setNoteTitle(editElement[0].title)
    setNoteBody(editElement[0].body)

  };

  const save = (e) => {
    e.preventDefault();

    const updatedNote = noteArray.map(note => {
      if (note.id == e.target.value){
        return {...note, title: noteTitle, body: noteBody, colour: selectedColour}
      }
      return note;
    })

    const removeEdit = editNoteArr.filter((edit) => edit.id != e.target.value);
    
    setEditNoteArr(removeEdit);
    setNoteArray(updatedNote);
  }

  const createNote = (e) => {
    e.preventDefault();
    setNoteArray([
      ...noteArray,
      { id: noteId, title: noteTitle, body: noteBody, colour: selectedColour },
    ]);
    setFormVisible(false);
    setCreateBtn(true);
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

  const test = (e) => {
    console.log("test");
  };

  return (
    <div className="App">
      {createBtn && <button onClick={create}>Create Note</button>}

      {formVisible && (
        <div className="form">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Enter your title:</Form.Label>
              <Form.Control type="text" onChange={getTitle} />
            </Form.Group>
            <Form.Group className="mb-3">
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
      )}

      <div className="noteSection">
        {noteArray.map((value, key) => {
          return (
            <div>
              <Note
                key={key}
                title={value.title}
                body={value.body}
                colour={value.colour}
              />
              <button onClick={deleteNote} value={value.id}>
                Delete
              </button>
              <button onClick={editNote} value={value.id}>
                Edit
              </button>
            </div>
          );
        })}
      </div>

      <div className="editNote">
        {editNoteArr.map((value, key) => {
          return (
            <div>
              <Form key={key}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" value={noteTitle} onChange={getTitle} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" value={noteBody} rows={3} onChange={getNote} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select value={selectedColour} onChange={getColour}>
                    {colours.map((colour) => (
                      <option key={colour.value} value={value.colour}>
                        {colour.text}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <button onClick={save} value={value.id}>Save</button>
              </Form>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
