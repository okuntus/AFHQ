import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Button, Paper, Box, Divider } from '@mui/material';
import Image from '@mui/icons-material/Image';
import EventIcon from '@mui/icons-material/Event';
import Hero from '../assets/LE-visit.jpg';
import Hero1 from '../assets/breast.jpg';
import Hero2 from '../assets/induction-cas.jpg';
import Casa from '../assets/casa.jpg';
import Mi from '../assets/MI.jpg';
import Falcon from '../assets/falcon.jpg';
import Z9 from '../assets/z9.jpg';
import K8 from '../assets/k8.jpg';



// --- ✅ 1. Simple Custom Carousel (No MUI) ---
const SimpleCarousel = () => {
  const slides = [
    {
      image: Hero,
      caption: "CAS pays maiden visit Air Force Base Tamale",
    },
    {
      image: Hero1,
      caption: "Air Force Base Tamale and 6 Garrison holds Breast Cancer Awareness Day",
    },
    {
      image: Hero2,
      caption: "Induction Church Parade held for Air Vice Marshall Agyen-Frempong",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  //swipe handlers for touch devices
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const threshold = 50;
    if (distance > threshold) nextSlide();
    if (distance < -threshold) prevSlide();
    setTouchStartX(0);
    setTouchEndX(0);
  };


  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 250, md: 400 },
        overflow: 'hidden',
        borderRadius: 3,
        mb: 6,
        touchAction: 'pan-y',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >


      {/* Slides */}
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            height: 'auto',
            width: 'auto',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            inset: 0,
            opacity: index === current ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          {/* Overlaid Caption */}
          <Box
            sx={{
              position: "absolute",
              bottom: 30,
              left: 30,
              background: "rgba(0, 0, 0, 0.46)",
              color: "#fff",
              px: 3,
              py: 1.5,
              borderRadius: 2,
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontWeight: 600,
              textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
              maxWidth: "80%",
            }}
          >
            {slide.caption}
          </Box>
        </Box>
      ))}

      {/* Controls */}
      <Button
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.4)',
          color: 'white',
          minWidth: 0,
          borderRadius: '50%',
          width: 40,
          height: 40,
          '&:hover': { background: 'rgba(0,0,0,0.6)' },
        }}
      >
        ‹
      </Button>
      <Button
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.4)',
          color: 'white',
          minWidth: 0,
          borderRadius: '50%',
          width: 40,
          height: 40,
          '&:hover': { background: 'rgba(0,0,0,0.6)' },
        }}
      >
        ›
      </Button>

      {/* Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrent(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: index === current ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "background 0.5s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};



// --- ✅ 1. Simple Custom Carousel (No MUI) ---
const AssetCarousel = () => {
  const slides = [
    {
      image: Casa,
      caption: "CASA C-295m",
    },
    {
      image: Falcon,
      caption: "FALCON EXE",
    },
    {
      image: K8,
      caption: "HONGHU K8",
    },
    {
      image: Z9,
      caption: "Z9-EH",
    },
    {
      image: Mi,
      caption: "MI-171SH",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  //swipe handlers for touch devices
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const threshold = 50;
    if (distance > threshold) nextSlide();
    if (distance < -threshold) prevSlide();
    setTouchStartX(0);
    setTouchEndX(0);
  };


  return (
    <Box
      sx={{
        position: 'relative',
        width: '90%',
        height: { xs: 250, md: 400 },
        overflow: 'hidden',
        borderRadius: 1,
        mb: 6,
        mx: 'auto',
        touchAction: 'pan-y',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >


      {/* Slides */}
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            inset: 0,
            opacity: index === current ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          {/* Overlaid Caption */}
          <Box
            sx={{
              position: "absolute",
              bottom: 30,
              left: 30,
              background: "rgba(0, 0, 0, 0.36)",
              color: "#fff",
              px: 3,
              py: 1.5,
              borderRadius: 2,
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontWeight: 600,
              textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
              maxWidth: "80%",
            }}
          >
            {slide.caption}
          </Box>
        </Box>
      ))}

      {/* Controls */}
      <Button
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.4)',
          color: 'white',
          minWidth: 0,
          borderRadius: '50%',
          width: 40,
          height: 40,
          '&:hover': { background: 'rgba(0,0,0,0.6)' },
        }}
      >
        ‹
      </Button>
      <Button
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.4)',
          color: 'white',
          minWidth: 0,
          borderRadius: '50%',
          width: 40,
          height: 40,
          '&:hover': { background: 'rgba(0,0,0,0.6)' },
        }}
      >
        ›
      </Button>

      {/* Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrent(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: index === current ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "background 0.5s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};



// --- News Headlines Component (No change) ---
const NewsHeadlines = () => {
  const headlines = [
    "Ghana Air Force holds annual Tech fair",
    "Govt and GHAF in talks to purchase new aircrafts",
    "End of Year celebration schedule for early 2026",
    "Air Force volley team wins another trophy",
    "Air Force Handball qualify for the finals"
  ];

  return (
    <Paper elevation={3} sx={{ p: 2, Height: { xs: 'auto', md: 400 }, overflow: 'auto' }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
        📰 Latest Headlines
      </Typography>
      <Divider sx={{ mb: 2 }} />
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
          {headlines.map((headline, index) => (
            <Box 
              component="li" 
              key={index} 
              sx={{ 
                mb: 1.5, 
                pb: 1.5, 
                borderBottom: '1px solid #eee', 
                '&:last-child': { borderBottom: 'none', pb: 0 }
              }}
            >
              <Typography variant="subtitle1" component="a" href="#" 
                sx={{ 
                  textDecoration: 'none', 
                  color: 'text.primary', 
                  '&:hover': { color: 'primary.main', textDecoration: 'underline' } 
                }}
              >
                **{headline}**
              </Typography>
            </Box>
          ))}
        </Box>
      <Box textAlign="right" mt={2}>
         <Button size="small" variant="contained">View All News</Button>
      </Box>
    </Paper>
  );
};


// featured article component
const ContentCard = ({ title, description }) => (
  <Paper
    elevation={3}
    sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}
  >
    <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>{title}</Typography>
    <Typography variant="body2" color="text.secondary">{description}</Typography>
    <Button variant="text" size="small" sx={{ mt: 2 }}>Read More</Button>
  </Paper>
);



// --- Main Homepage Component ---
const HomePage = () => {

  // Data for the new 4th article
  const moreArticles = [
    {
      title: "The Rise of Accessibility",
      description: "Ensuring your interfaces meet all WCAG standards for a better user experience.",
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6, mt: 1}}>

      {/* Carousel and headlines in a Grid Layout*/}
      <Grid container spacing={4} sx={{ mb: 1 }}>
        <Grid size={8} item xs={12} md={9} >
          <SimpleCarousel />
        </Grid>
        <Grid size={4} item xs={12} md={3} sx={{py:0}} >
          <NewsHeadlines />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
      
      {/* our assets */}
      <Box sx={{ mb: 8 }}>
          {/* 💥 CHANGE HERE: News Headlines now takes 3/12 columns (25%) */}
          <Typography variant="h4" component="h2" textAlign='center' gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Our Assets
          </Typography>
          <Grid size={4} item xs={12} md={3}>
            <AssetCarousel />
          </Grid>
      </Box>

      {/* --- Horizontal Separator --- */}
      <Divider sx={{ my: 6 }} />

      {/* 2. Featured Articles Section: Responsive 4-Column Grid */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" textAlign='center' gutterBottom sx={{ fontWeight: 600 }}>
          ⭐ Featured Articles
        </Typography>
        <Grid container spacing={5} >
          {/* Article 1: 1/2 width on SM, 1/4 width on MD and up */}
          <Grid size={8} item xs={12} sm={6} md={3}> 
            <ContentCard
              title="State of React & MUI"
              description="A deep dive into the latest features and best practices for building complex UIs."
            />
          </Grid>
          {/* Article 2: 1/2 width on SM, 1/4 width on MD and up */}
          <Grid size={4} item xs={12} sm={6} md={3}>
            <ContentCard
              title="Next-Gen Theming"
              description="How to leverage the theme system for a truly consistent and accessible user experience."
            />
          </Grid>
          {/* Article 3: 1/2 width on SM, 1/4 width on MD and up */}
          <Grid size={4} item xs={12} sm={6} md={3}>
            <ContentCard
              title="Optimizing Performance"
              description="Tips and tricks for minimizing bundle size and improving initial load times."
            />
          </Grid>
          {/* New Article 4: 1/2 width on SM, 1/4 width on MD and up */}
          <Grid size={8} item xs={12} sm={6} md={3}>
            <ContentCard
              title={moreArticles[0].title}
              description={moreArticles[0].description}
            />
          </Grid>
        </Grid>
      </Box>

      {/* --- Horizontal Separator --- */}
      <Divider sx={{ my: 6 }} />

      {/* 3. Gallery & Upcoming Events Section (Side-by-Side) */}
      <Grid container spacing={6} sx={{ mb: 6 }}>
        {/* Gallery Placeholder: 6/12 columns on MD and up */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            🖼️ Image Gallery
          </Typography>
          <Paper
            square={false} 
            sx={{ 
              height: 400,
              width: 600, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              backgroundColor: '#f5f5f5', 
              color: '#9e9e9e',
              flexDirection: 'column'
            }} 
            elevation={1}
          >
            <Image sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="h6">
              Gallery Placeholder
            </Typography>
            <Button variant="text" sx={{ mt: 1 }}>View All Photos</Button>
          </Paper>
        </Grid>

        {/* Upcoming Events: 6/12 columns on MD and up (To the right of the gallery) */}
        <Grid item xs={12} md={6} ml={15}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            🗓️ Upcoming Events
          </Typography>
          <Box>
            <Paper elevation={1} sx={{ p: 2, mb: 1.5, display: 'flex', alignItems: 'center' }}>
              <EventIcon color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">MUI Community Meetup</Typography>
                <Typography variant="body2" color="text.secondary">October 20th, 2025 - Online</Typography>
              </Box>
              <Button size="small" variant="outlined" sx={{ ml: 'auto' }}>RSVP</Button>
            </Paper>
            <Paper elevation={1} sx={{ p: 2, mb: 1.5, display: 'flex', alignItems: 'center' }}>
              <EventIcon color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">Developer Workshop: Hooks</Typography>
                <Typography variant="body2" color="text.secondary">November 5th, 2025 - 9:00 AM EST</Typography>
              </Box>
              <Button size="small" variant="outlined" sx={{ ml: 'auto' }}>RSVP</Button>
            </Paper>
            <Paper elevation={1} sx={{ p: 2, mb: 1.5, display: 'flex', alignItems: 'center' }}>
              <EventIcon color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">Developer Workshop: Hooks</Typography>
                <Typography variant="body2" color="text.secondary">November 5th, 2025 - 9:00 AM EST</Typography>
              </Box>
              <Button size="small" variant="outlined" sx={{ ml: 'auto' }}>RSVP</Button>
            </Paper>
            <Paper elevation={1} sx={{ p: 2, mb: 1.5, display: 'flex', alignItems: 'center' }}>
              <EventIcon color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">Developer Workshop: Hooks</Typography>
                <Typography variant="body2" color="text.secondary">November 5th, 2025 - 9:00 AM EST</Typography>
              </Box>
              <Button size="small" variant="outlined" sx={{ ml: 'auto' }}>RSVP</Button>
            </Paper>
            <Box textAlign="right" mt={2}>
              <Button size="small" variant="text">View Calendar</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;