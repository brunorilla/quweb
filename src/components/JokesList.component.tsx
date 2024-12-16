import { useState } from "react";
import {SimpleGrid, Spinner, Input, Button, Text, Box} from "@chakra-ui/react";
import { BasicSelect, JokeCard } from "@/components";
import styled from "styled-components";
import { useJokesQuery } from "@/hooks";


export const JokesList = () => {
    const [sortBy, setSortBy] = useState<"id" | "type">("id");
    const [currentPage, setCurrentPage] = useState(1);
    const [jokeCount, setJokeCount] = useState(10);
    const [fetchCount, setFetchCount] = useState(10);
    const itemsPerPage = 5;

    const { data: jokes = [], isLoading } = useJokesQuery(fetchCount);

    const sortedJokes = [...jokes].sort((a, b) => {
        if (sortBy === "id") return a.id - b.id;
        return a.type.localeCompare(b.type);
    });

    const paginatedJokes = sortedJokes.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const sortOptions: { value: "id" | "type"; label: string }[] = [
        { value: "id", label: "Sort by ID" },
        { value: "type", label: "Sort by Type" },
    ];

    const handleSelect = (value: string) => {
        setSortBy(value as "id" | "type");
    };

    const handleJokeCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(1000, Math.max(1, parseInt(e.target.value) || 0));
        setJokeCount(value);
    };

    const handleFetchJokes = () => {
        if (jokeCount > 250) {
            alert("The maximum number of jokes to fetch is 250 to prevent issues.");
        } else {
            setFetchCount(jokeCount);
            setCurrentPage(1);
        }
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <BasicSelect
                options={sortOptions}
                onSelect={handleSelect}
                placeholder="Sort by"
            />

            <Input
                type="number"
                placeholder="Number of jokes"
                maxW="200px"
                value={jokeCount}
                onChange={handleJokeCountChange}
                mb={4}
            />

            <Button
                onClick={handleFetchJokes}
                colorScheme="blue"
                mb={4}
            >
                Fetch Jokes
            </Button>

            <Box height="20px" mb={4}>
                {jokeCount > 250 && (
                    <Text color="red.500" fontSize="sm">
                        Maximum jokes allowed is 250. Adjust the input value.
                    </Text>
                )}
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                {paginatedJokes.map((joke) => (
                    <JokeCard key={joke.id} setup={joke.setup} punchline={joke.punchline} />
                ))}
            </SimpleGrid>

            <StyledButton
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
            >
                Previous
            </StyledButton>
            <StyledButton
                onClick={() =>
                    setCurrentPage((prev) =>
                        prev < Math.ceil(jokes.length / itemsPerPage) ? prev + 1 : prev
                    )
                }
                disabled={currentPage === Math.ceil(jokes.length / itemsPerPage)}
            >
                Next
            </StyledButton>
        </>
    );
};

const StyledButton = styled.button<{ disabled?: boolean }>`
    padding: 8px 16px;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    background-color: ${(props) => (props.disabled ? "#555555" : "#1a1a1a")};
    color: white;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) => (props.disabled ? "#555555" : "#333333")};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(26, 26, 26, 0.5);
    }

    margin-top: 16px;
    margin-left: 16px;
`;