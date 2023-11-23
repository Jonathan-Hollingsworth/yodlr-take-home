import React, {useState, useEffect} from "react";
import YodlrApi from "./api";

function Admin() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function getData() {
          let users = await YodlrApi.getUsers()
          setUsers(users)
        }
        getData();
      }, []);
    return (
        <div>
          {users.map(user => (
            <section key={user.id}>
              <h2>{user.firstName} {user.lastName}</h2>
              <h3>{user.email}</h3>
              <h4>Current Status: {user.state}</h4>
            </section>
          ))}
        </div>
      );
}

export default Admin;