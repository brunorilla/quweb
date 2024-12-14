import {useState} from 'react';
import {SimpleGrid, Button, Select} from '@chakra-ui/react';
import JokeCard from './JokeCard';

interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

interface JokesListProps {
    jokes: Joke[];
}

const JokesList = ({jokes}: JokesListProps) => {
    const [sortBy, setSortBy] = useState<'id' | 'type'>('id');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const sortedJokes = [...jokes].sort((a, b) => {
        if (sortBy === 'id') return a.id - b.id;
        return a.type.localeCompare(b.type);
    });

    const paginatedJokes = sortedJokes.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'id' | 'type')}
                mb={4}
            >
                <option value="id">Sort by ID</option>
                <option value="type">Sort by Type</option>
            </Select>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={4}>
                {paginatedJokes.map((joke) => (
                    <JokeCard key={joke.id} setup={joke.setup} punchline={joke.punchline}/>
                ))}
            </SimpleGrid>
            <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                mt={4}
                isDisabled={currentPage === 1}
            >
                Previous
            </Button>
            <Button
                onClick={() =>
                    setCurrentPage((prev) =>
                        prev < Math.ceil(jokes.length / itemsPerPage) ? prev + 1 : prev
                    )
                }
                mt={4}
                ml={4}
            >
                Next
            </Button>
        </>
    );
};

export default JokesList;