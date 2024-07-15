import React, { useState, useEffect } from 'react';
import { getUserById, updateUser } from './service/apiService';
import { useParams, useNavigate } from 'react-router-dom';


const UserUpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    // idProof: null,
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(id);
        setFormData(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const inputValue = type === 'file' ? files[0] : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formDataWithFile = new FormData();
    // for (const key in formData) {
    //   formDataWithFile.append(key, formData[key]);
    // }

    try {
      await updateUser(id, formData);
      navigate('/users');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <div>
          <label htmlFor="idProof">ID Proof</label>
          <input
            type="file"
            id="idProof"
            name="idProof"
            accept=".pdf,.jpg,.png"
            onChange={handleInputChange}
          />
        </div> */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UserUpdateForm;
