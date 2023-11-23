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
              <ul>
                <li>Current Status: {user.state}</li>
              </ul>
            </section>
          ))}
        </div>
      );
}

export default Admin;