import axios from 'axios';

const API_BASE_URL = 'https://official-joke-api.appspot.com/jokes';

export const fetchJokes = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/ten`);
    return data;
};