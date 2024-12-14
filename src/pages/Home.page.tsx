import { Box, Spinner } from '@chakra-ui/react';
import { useFetchJokes } from '../hooks/useFetchJokes';
import JokesList from '../components/JokesList';

const Home = () => {
    const { data: jokes, isLoading, isError } = useFetchJokes();

    if (isLoading) return <Spinner />;
    if (isError) return <Box>Error fetching jokes.</Box>;

    return (
        <Box p={8}>
            <JokesList jokes={jokes} />
        </Box>
    );
};

export default Home;