import Modal from "./Modal";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Click The Show Modal button to start</h2>
      <Modal>
        <h1>Title!</h1>
        <p>Text!</p>
      </Modal>
    </div>
  );
}
