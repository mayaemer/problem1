import "./App.css";
import Form from "react-bootstrap/Form";

function App() {
  const create = () => {};

  return (
    <div className="App">
      <div id="create">
        <button onClick="create">Create Note</button>
      </div>
      <div id="createForm">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your title:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your note:</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select a colour:</Form.Label>
            <Form.Select>
              <option>Blue</option>
              <option>Peach</option>
              <option>Green</option>
              <option>Pink</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default App;
