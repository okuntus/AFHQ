import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', // White for primary elements (e.g., AppBar background)
    },
    secondary: {
      main: '#007bff', // Sea Blue for accents (buttons, links, text) - using a common blue shade
    },
    background: {
      default: '#f0f8ff', // Very light blue/almost white background
      paper: '#FFFFFF', // White for cards, paper-like elements
    },
    text: {
      primary: '#333333', // Dark gray for general text
      secondary: '#555555', // Lighter gray for secondary text
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets CSS and applies basic Material UI styles */}
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, py: 4 }}> {/* Main content area */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;