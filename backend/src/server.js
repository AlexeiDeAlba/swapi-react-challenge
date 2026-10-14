import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// ---------------------------------------------------
// INTERVIEWER SETUP: Health check endpoint
// ---------------------------------------------------
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// ---------------------------------------------------
// CANDIDATE TODO: Starships endpoint
// ---------------------------------------------------
app.get('/api/starships', async (req, res) => {
  // TODO: Candidate implementation
  // 1. Fetch data from https://swapi.dev/api/starships
  // 2. Handle pagination if time allows
  // 3. Return the data to the frontend
  // 4. Handle external API errors
  
  res.status(501).json({ error: 'Not implemented' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
