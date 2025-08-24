import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string; // optional, since API doesn't provide this
  address?: {
    street: string;
    city: string;
    zipcode: string;
  };

}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data));
    }, []);

  return (
    <div>
      <h2>Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email} 
            {user.phone} - {user.address ? `${user.address.street}, ${user.address.city}, ${user.address.zipcode}` : "No address provided"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;








