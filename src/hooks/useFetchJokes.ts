import {useQuery} from '@tanstack/react-query';
import {fetchJokes} from '@/services';


/**
 * Custom hook to fetch jokes.
 *
 * @param {number} count - Number of jokes to fetch.
 */
export const useJokesQuery = (count: number) => {
    return useQuery({
        queryKey: ['jokes', count],
        queryFn: () => fetchJokes(count),
        staleTime: 1000 * 60,
    });
};