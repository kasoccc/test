import { useState } from "react";

function App() {
  const [response, setResponse] = useState("");

  const handleClick = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/hi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "hi" }),
      });
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
