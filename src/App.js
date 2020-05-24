import React from "react";

import "./App.css";

function App() {
  return (
    <div className="main-container">
      <h1>Chamla</h1>
      <h2>Liste</h2>
      <ul>
        <li>
          item 1 <button>x</button>
        </li>
        <li>
          item 2 <button>x</button>
        </li>
        <li>
          item 3 <button>x</button>
        </li>
      </ul>
      <form>
        <input type="text" placeholder="Add List Item"></input>
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default App;
