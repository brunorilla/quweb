import {Box} from '@chakra-ui/react';
import {JokesList} from '@/components';

const Home = () => {

    return (
        <Box p={8}>
            <JokesList/>
        </Box>
    );
};

export default Home;