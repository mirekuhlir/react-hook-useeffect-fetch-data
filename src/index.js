import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.login}</p>
        </div>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Users />, rootElement);
