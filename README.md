# Starship Explorer

## 1. INTERVIEWER SETUP

This repository contains a fullstack boilerplate (React + Express) for a coding interview.

### Installation

To install dependencies for both the frontend and backend, run from the root directory:

```bash
npm run install:all
```

### Running the application

To start both the frontend and backend concurrently, run from the root directory:

```bash
npm run dev
```

### Verification

Once started, verify the setup by visiting:

- Backend Health Check: [http://localhost:3001/health](http://localhost:3001/health) (should return `{"status":"ok"}`)
- Frontend Application: [http://localhost:5173](http://localhost:5173) (should display the React boilerplate)

---

## 2. CANDIDATE TASK

Build a small React application that allows users to explore starships.

### Backend

Implement:

`GET /api/starships`

The endpoint should retrieve starships from:

`https://swapi.dev/api/starships`

The React application must NOT call SWAPI directly.

The Express backend should retrieve the data and expose it to the frontend.

Handle failures from the external API appropriately.

### Frontend

Use the backend endpoint to retrieve and display starships.

For each starship display:

- Name
- Model
- Manufacturer
- Cost

The UI should provide:

- Loading state
- Error state
- Empty state

### Data processing

Display:

- Number of starships returned
- Average cost of starships with a known numeric cost

SWAPI may contain values such as:

"unknown"

"not available"

These values should not break the calculation.

### If time allows

Implement Next and Previous navigation using the pagination information provided by SWAPI.

Do not call SWAPI directly from React.
