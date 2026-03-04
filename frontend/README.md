# React Movie Tutorial

A modern React application for browsing and managing favorite movies, built with Vite.

## Features

- **Movie Browsing**: Browse popular movies from an API
- **Favorites Management**: Add and remove movies from your favorites
- **Responsive Design**: Works on desktop and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast HMR and builds

## Tech Stack

- **Frontend**: React 18+ with Vite
- **Styling**: CSS Modules
- **API**: TMDB (The Movie Database) API
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js
- npm
- TMDB API Key

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Configuration

Create a `.env` file in the root directory to store your API key:

```env
VITE_API_KEY=your_api_key_here
```

## Project Structure

```
frontend/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── services/     # API services
│   ├── css/          # Stylesheets
│   └── assets/       # Static assets
├── public/            # Public assets
└── index.html         # Entry HTML file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
