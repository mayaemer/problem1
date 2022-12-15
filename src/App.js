import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Note from "./components/Note";

function App() {
  // colour select options
  const colours = [
    { value: "#b3f0ff", text: "Blue" },
    { value: "#ffcce6", text: "Pink" },
    { value: "#ffbb99", text: "Peach" },
    { value: "#b3e6b3", text: "Green" },
  ];

  // declaring state variables
  const [createBtn, setCreateBtn] = useState(true);
  const [noteId, setNoteId] = useState(0);
  const [selectedColour, setSelectedColour] = useState(colours[0].value);
  const [noteBody, setNoteBody] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteArray, setNoteArray] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [editNoteId, setEditNoteId] = useState();
  const [editNoteTitle, setEditNoteTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [editColour, setEditColour] = useState("");

  // functionality when you click create button
  // sets note body to empty, title to empty note
  // hides create button, and edit form, shows create note form
  const create = () => {
    setNoteBody("");
    setNoteTitle("Empty note");
    setCreateBtn(false);
    setFormVisible(true);
    setEditVisible(false);
  };

  // functionality when you click delete button
  // removes note of button clicked from note array
  const deleteNote = (e) => {
    const deleteElement = noteArray.filter((note) => note.id != e.target.value);
    setNoteArray(deleteElement);
  };

  // functionality when you click edit button
  // hides create form, shows create button and edit form
  // filters through note array for note with id from clicked button
  // set the edit note element states
  const editNote = (e) => {
    setFormVisible(false);
    setCreateBtn(true);
    setEditVisible(true);

    const editElement = noteArray.filter((note) => note.id == e.target.value);
    setEditNoteId(editElement[0].id);
    setEditNoteTitle(editElement[0].title);
    setEditBody(editElement[0].body);
    setEditColour(editElement[0].colour);
  };

  // functionality when save button clicked
  // hide edit form
  // update the note in the notearray with new values
  const save = (e) => {
    e.preventDefault();
    setEditVisible(false);

    const updatedNote = noteArray.map((note) => {
      if (note.id == e.target.value) {
        return {
          ...note,
          title: editNoteTitle,
          body: editBody,
          colour: editColour,
        };
      }
      return note;
    });

    setNoteArray(updatedNote);
  };

  // when you click add button
  // add values in a map to note array
  // hide form, show crate button
  // increment the note id
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

  // set note title state when title section in form is changed
  const getTitle = (e) => {
    setNoteTitle(e.target.value);
  };

  // set note body state when body section in form is changed
  const getNote = (e) => {
    setNoteBody(e.target.value);
  };

  // set note colour state when colour section in form is changed
  const getColour = (e) => {
    setSelectedColour(e.target.value);
  };

  // set edit note title state when edit title section in form is changed
  const editTitle = (e) => {
    setEditNoteTitle(e.target.value);
  };

  // set edit note body state when edit body section in form is changed
  const handleEditBody = (e) => {
    setEditBody(e.target.value);
  };

  // set edit note colour state when edit colour section in form is changed
  const handleEditColour = (e) => {
    setEditColour(e.target.value);
  };

  return (
    <div className="App">
      {/* button to show create note form */}
      {createBtn && (
        <Button id="btn" variant="secondary" onClick={create}>
          Create Note
        </Button>
      )}

      {/* form to create note, set to visible and note visible using
      formVisible use state  */}
      {formVisible && (
        <div className="form">
          <h4>Create note</h4>
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
            <Button id="btn" variant="secondary" onClick={createNote}>
              Add
            </Button>
          </Form>
        </div>
      )}

      {/* form to edit selected note, set to visible, or not visible using editVisible state */}
      <div className="editNote">
        {editVisible && (
          <div className="form">
            <h4>Edit your selected note</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={editNoteTitle}
                  onChange={editTitle}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  value={editBody}
                  rows={3}
                  onChange={handleEditBody}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select value={editColour} onChange={handleEditColour}>
                  {colours.map((colour) => (
                    <option key={colour.value} value={colour.value}>
                      {colour.text}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Button
                id="btn"
                variant="secondary"
                onClick={save}
                value={editNoteId}
              >
                Save
              </Button>
            </Form>
          </div>
        )}
      </div>

      {/* section where notes are added,
maps through note array, returning a note for each item in array*/}
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
              <Button
                id="btn"
                variant="secondary"
                onClick={deleteNote}
                value={value.id}
              >
                Delete
              </Button>
              <Button
                id="btn"
                variant="secondary"
                onClick={editNote}
                value={value.id}
              >
                Edit
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
