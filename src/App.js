import React from "react";

import "./App.css";

function App() {
  const state = {
    clients: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
    ],
  };

  return (
    <div className="main-container">
      <h1>Chamla</h1>
      <h2>Liste</h2>
      <ul>
        {state.clients.map((client) => (
          <li>
            {client.name} <button>x</button>
          </li>
        ))}
      </ul>
      <form>
        <input type="text" placeholder="Add List Item"></input>
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default App;
