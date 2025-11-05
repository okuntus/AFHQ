import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Import Components
import Footer from './components/Footer';
import Navbar from './components/NavbarClean';

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
const theme = createTheme({
  palette: {
    primary: { main: '#2E8BC0' },
  },
  typography: { button: { textTransform: 'none' } },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', borderRadius: 5, overflow: 'hidden' }}>
          <Navbar/>
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
        </Box>
    </ThemeProvider>
  );
}

export default App;

