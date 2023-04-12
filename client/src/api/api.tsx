import axios from 'axios';

export const getTasks = async () => {
    try {
        const response = await axios.get('http://localhost:4000/data.json');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

