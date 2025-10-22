import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Profile from './pages/Profile';
import Management from './pages/Management';
import Gallery from './pages/Gallery';
import NewsEvents from './pages/NewsEvents';

function App() {
  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/about/profile" element={<Profile />} />
      <Route path="/about/management" element={<Management />} />
      <Route path="/about/gallery" element={<Gallery />} />
      <Route path="/about/news-events" element={<NewsEvents />} />
    </Routes>
  );
}

export default App;

