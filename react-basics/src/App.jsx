import { useState } from "react";
import "./App.css";

// Main component. Every React app starts from a function like this.
function App() {
  // useState gives the component "memory".
  // count = current value, setCount = the function that changes it.
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");

  // Event handler functions (called when buttons are clicked)
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0); // BONUS: reset button

  // Runs every time the user types in the input box
  const handleNameChange = (event) => setUserName(event.target.value);

  // Even/odd check: % gives the remainder after dividing by 2
  const isEven = count % 2 === 0;

  return (
    <div className="app">
      <h1>My First React App</h1>

      <p className="about">
        Hi, I'm Favour, an accounting graduate learning frontend development.
        I'm building my skills one project at a time, and this is my first
        interactive React app.
      </p>

      {/* COUNTER SECTION */}
      <section className="card">
        <h2>Counter</h2>
        <p className="count">{count}</p>

        <div className="buttons">
          <button onClick={decreaseCount}>Decrease</button>
          <button onClick={increaseCount}>Increase</button>
          <button className="reset" onClick={resetCount}>Reset</button>
        </div>

        {/* Conditional rendering: show one message or the other */}
        <p className="message">{isEven ? "Even number" : "Odd number"}</p>
      </section>

      {/* NAME / GREETING SECTION */}
      <section className="card">
        <h2>Say Hello</h2>
        <input
          type="text"
          placeholder="Type your name"
          value={userName}
          onChange={handleNameChange}
        />

        {/* Only shows when the input is NOT empty (&& = "if true, then show") */}
        {userName !== "" && (
          <p className="greeting">
            Hello, {userName}! Welcome to my React app.
          </p>
        )}
      </section>

      {/* BONUS: footer with the current year */}
      <footer>&copy; {new Date().getFullYear()} My First React App</footer>
    </div>
  );
}

export default App;
