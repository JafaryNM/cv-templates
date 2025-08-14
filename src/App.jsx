import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-primary">Hello Bootstrap in React!</h1>
        <button className="btn btn-success">Click Me</button>
      </div>
    </>
  );
}

export default App;
