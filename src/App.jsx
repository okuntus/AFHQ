import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Profile from './pages/Profile';
import Management from './pages/Management';
import Gallery from './pages/Gallery';
import NewsEvents from './pages/NewsEvents';



// Import Components
import Navbar from './components/navbar';
import Footer from './components/Footer';

// Import Pages
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import JoinUsPage from './pages/JoinUsPage';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', // White for primary elements (e.g., AppBar background)
    },
    secondary: {
      main: '#2E8BC0', // Sea Blue for accents (buttons, links, text) - using a common blue shade
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
      'Inter',
      'system-ui',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: { fontFamily: 'Playfair Display, serif', fontWeight: 700 },
    h2: { fontFamily: 'Playfair Display, serif', fontWeight: 700 },
    h3: { fontFamily: 'Playfair Display, serif', fontWeight: 600 },
    h4: { fontFamily: 'Playfair Display, serif', fontWeight: 600 },
    button: { textTransform: 'none' },
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
              <Route path="/join" element={<JoinUsPage />} />
              <Route path="/about/profile" element={<Profile />} />
              <Route path="/about/management" element={<Management />} />
              <Route path="/about/gallery" element={<Gallery />} />
              <Route path="/about/news-events" element={<NewsEvents />} />  
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;