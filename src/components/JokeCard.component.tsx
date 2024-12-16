import {Box, Text} from '@chakra-ui/react';

interface JokeCardProps {
    setup: string;
    punchline: string;
}

export const JokeCard = ({setup, punchline}: JokeCardProps) => (
    <Box borderWidth="1px" borderRadius="lg" p={4} shadow="md">
        <Text fontWeight="bold">{setup}</Text>
        <Text mt={2}>{punchline}</Text>
    </Box>
);

