import React, { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Button, Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import hero1 from '../assets/hero.jpg';
import hero2 from '../assets/hero.jpg';
import hero3 from '../assets/hero.jpg';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slides = [
  { title: 'Chief of Air Staff visit to all bases', subtitle: 'The video background has a parallax effect. This is fluid and full-width.', image: hero1 },
  { title: 'Maiden visit of COAS to Air Force HQ', subtitle: 'We host events and community outreach programs throughout the year.', image: hero2 },
  { title: 'Breast cancer screening held by Air Wives Association', subtitle: 'Become part of the team — participate or volunteer today.', image: hero3 },
];

function HomePage() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <Box>
      {/* Carousel hero */}
      <Box sx={{ position: 'relative', width: '100%', height: { xs: 300, md: 420 }, overflow: 'hidden' }}>
        {slides.map((s, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${s.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'opacity 600ms ease',
              opacity: i === index ? 1 : 0,
            }}
            aria-hidden={i === index ? 'false' : 'true'}
          />
        ))}

        {/* overlay */}
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(6,10,14,0.45), rgba(6,10,14,0.45))' }} />

        {/* Controls and content */}
        <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
          <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff', py: 6 }}>
            <Box>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
                {slides[index].title}
              </Typography>
              <Typography variant="body2" sx={{ maxWidth: 640, mx: 'auto' }}>
                {slides[index].subtitle}
              </Typography>
            </Box>
          </Box>

          {/* Prev/Next buttons */}
          <IconButton aria-label="Previous slide" onClick={goPrev} sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: '#fff' }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton aria-label="Next slide" onClick={goNext} sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', color: '#fff' }}>
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Dots */}
          <Box sx={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 1 }}>
            {slides.map((_, i) => (
              <Box
                key={i}
                onClick={() => setIndex(i)}
                sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: i === index ? 'secondary.main' : 'rgba(255,255,255,0.6)', cursor: 'pointer' }}
                aria-label={`Go to slide ${i + 1}`}
                role="button"
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Features row - three columns centered */}
      <Box sx={{ py: 8, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ fontSize: 36, color: 'secondary.main', mb: 2 }}>⚓</Box>
                <Typography variant="h6" gutterBottom>
                  Cras pretium diam ut metus
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pro Line HTML5 Template is brought to you by Template. This layout uses Bootstrap v4.3.1 to make it easy to modify this template in any HTML editor for your site.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ fontSize: 36, color: 'secondary.main', mb: 2 }}>⚙️</Box>
                <Typography variant="h6" gutterBottom>
                  Cras pretium diam ut metus
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phasellus tristique, sapien non mattis pellentesque, felis turpis placerat turpis, nec viverra quam nisi at velit. Pellentesque iaculis convallis egestas.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ fontSize: 36, color: 'secondary.main', mb: 2 }}>🎯</Box>
                <Typography variant="h6" gutterBottom>
                  Cras pretium diam ut metus
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sed interdum, purus vulputate congue luctus, lorem massa dapibus mi, sed condimentum nibh lorem quis lorem. Nulla sed erat dignissim, tincidunt arcu ac, egestas turpis.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;