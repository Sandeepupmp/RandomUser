import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserCard from "./Component/UserCard";

function App() {
  const [user, setUser] = useState(null);

  const fetchRandomUser = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching data: ", error));
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Random User</h1>
        {user && <UserCard user={user} />}
        <button onClick={fetchRandomUser}>Get New User</button>
      </div>
    </>
  );
}

export default App;
