import Form from "react-bootstrap/Form";
import { useState } from "react";


function AddNote() {

  const [colour, setColour] = useState('');

  const createNote = () => {};

  const getData = (e) => {
    this.setColour(e.target.value)
  };

  console.log(colour)
  
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your title:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your note:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select a colour:</Form.Label>
          <Form.Select onChange={this.getData}>
            <option>Blue</option>
            <option>Peach</option>
            <option>Green</option>
            <option>Pink</option>
          </Form.Select>
        </Form.Group>
        <button onClick={createNote}>Add</button>
        </Form>
    );
  }
  
  export default AddNote;
  
