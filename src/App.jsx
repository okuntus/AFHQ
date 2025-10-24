<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';



// Import Components
import Navbar from './components/navbar';
import Footer from './components/Footer';

// Import Pages
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import JoinUsPage from './pages/JoinUsPage';
import Profile from './pages/Profile';
import Management from './pages/Management';
import Gallery from './pages/Gallery';
import NewsEvents from './pages/NewsEvents';


// Define your custom theme
=======
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/NavbarClean';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import JoinUsPage from './pages/JoinUsPage';
import Profile from './pages/Profile';
import Management from './pages/Management';
import Gallery from './pages/Gallery';
import NewsEvents from './pages/NewsEvents';

// Define a simple theme for consistent look
>>>>>>> e1567fe9a4da494086793042594a2a407989bd68
const theme = createTheme({
  palette: {
    primary: { main: '#2E8BC0' },
  },
  typography: { button: { textTransform: 'none' } },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
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
              <Route path="/profile" element={<Profile />} />
              <Route path="/management" element={<Management />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news-events" element={<NewsEvents />} />  
            </Routes>
          </Box>
          <Footer />
=======
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
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
>>>>>>> e1567fe9a4da494086793042594a2a407989bd68
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;

