import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import UserTable from "./components/UserTable";
import mockedUsers from "./data/userMock";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // TODO fetch users from the backend
    setUsers(mockedUsers);
  }, []);

  return (
    <div className="App">
      <div className="mainControls">
        <Button variant="outline-primary">Show All Users</Button>
        <Button variant="outline-primary">Create New User</Button>
        <br />
        { users && <UserTable users={users} /> }
      </div>
    </div>
  );
}

export default App;
