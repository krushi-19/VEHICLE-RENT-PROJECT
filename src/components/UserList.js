import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from './service/apiService';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    loadUsers();
  }, []);

  const handleDelete = async (userMail) => {
    try {
      await deleteUser(userMail);
     
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (userId) => {
    navigate(`/users/${userId}/edit`);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.fullName} - {user.email}
            <button onClick={() => handleEdit(user.id)}>Edit</button>
            <button onClick={() => handleDelete(user.email)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
