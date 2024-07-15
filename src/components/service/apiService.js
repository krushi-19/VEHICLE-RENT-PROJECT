export const API_URL = 'http://localhost:5001/api';

export const registerUser = async (formData) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // formData should be a FormData object with all the necessary fields and the file
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const fetchUsers = async () => {
    try {
        const response = await fetch(`${API_URL}/users`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const updateUser = async (userId, updatedData) => {
    try {
        const response = await fetch(`${API_URL}/user/edit`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),//Updated data is converted into string send to body
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

export const deleteUser = async (userMail) => {
    try {
        const response = await fetch(`${API_URL}/users/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                //''
            },
            body: JSON.stringify({email: userMail})

        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

export const getUserById = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/users/${userId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        throw error;
    }
};
