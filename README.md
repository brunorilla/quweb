# Jokes Project

## Prerequisites

- **Node.js** version **20** or higher
- **Yarn** installed globally

---

## Installation

1. **Clone the repository**  
   Use `git` to download the repository:

Follow these steps to get the project up and running:

2. **Install dependencies**  
   Run the following command to install the required dependencies:
   ```bash
   yarn
   ```

## Start the development server
3. Run the following command to start the project locally:
```bash
   yarn dev
```
##  Access the project
Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Features
- Fetch and display jokes from the Official Joke API.
- Sting: Sort jokes by ID or Type.
- Pagination: View jokes in pages of up to 6 jokes.
- Dynamic Fetching: Input the number of jokes to fetch (up to 250).
- Error Handling: Graceful fallback for errors during API calls.

## Acknowledgements
- Built with Vite
- Components: [Chakra UI](https://www.chakra-ui.com/docs/get-started/frameworks/vite)
- Official [Joke API](https://github.com/15Dkatz/official_joke_api/?tab=readme-ov-file)