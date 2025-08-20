import { useState } from "react";

function App() {
  const [response, setResponse] = useState("");

  const handleClick = async () => {
    try {
      const res = await fetch("https://3af7852d2e7c.ngrok-free.app/testme?name=HarryPoter");
      const text = await res.text();
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
