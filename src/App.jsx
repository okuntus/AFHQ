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
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;

