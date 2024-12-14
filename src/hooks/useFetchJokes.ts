import {useQuery} from '@tanstack/react-query';
import {fetchJokes} from '../services/jokesService';

export const useFetchJokes = () => {
    return useQuery(['jokes'], fetchJokes);
};