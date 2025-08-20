import { useState } from "react";

function App() {
  const [response, setResponse] = useState("");

  const handleClick = async () => {
    try {
      const res = await fetch("https://298d3a18ed5f.ngrok-free.app/testme?name=HarryPotter");
      const text = await res.json();
      setResponse(text);
    } catch (err) {
      setResponse("Error: " + err.message);
    }
  };

  return (
    <>
      <h2>Hello</h2>
      <button onClick={handleClick}>Click</button>
      <p>{response}</p>
    </>
  );
}

export default App;
