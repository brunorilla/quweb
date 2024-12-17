import {Box, Flex, Heading} from '@chakra-ui/react';
import {AnimatedIcon, JokesList} from '@/components';


const Home = () => {
    return (
        <Box p={8} textAlign="center">
            <Flex justify="center" align="center" mb={8} gap={4}>
                <Heading as="h1" size="2xl" color="blackAlpha.900">
                    Laugh Maker
                </Heading>
                <AnimatedIcon/>
            </Flex>
            <JokesList />
        </Box>
    );
};

export default Home;