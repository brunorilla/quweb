import axios from 'axios';

const API_BASE_URL = 'https://official-joke-api.appspot.com/jokes';

/**
 * Fetch jokes from the API.
 *
 * @param {number} count - Number of jokes to fetch.
 * @returns {Promise<any[]>} - List of jokes.
 */
export const fetchJokes = async (count: number) => {
    const { data } = await axios.get(`${API_BASE_URL}/random/${count}`);
    return data;
};