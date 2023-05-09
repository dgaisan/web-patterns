import Table from "react-bootstrap/Table";

export default function UserTable({ users = [] }) {
    console.log("rendering UserTable");
    console.log(users);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.email}>
            <td>{index + 1}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
