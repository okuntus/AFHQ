import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Button, Paper, Box, Divider, Card, CardContent } from '@mui/material';
import Gallery from './Gallery';
import Image from '@mui/icons-material/Image';
import EventIcon from '@mui/icons-material/Event';
import FlightIcon from '@mui/icons-material/Flight';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Hero from '../assets/LE-visit.jpg';
import Hero1 from '../assets/breast.jpg';
import Hero2 from '../assets/VBTeam.jpg';
import Casa from '../assets/casa.jpg';
import Mi from '../assets/MI.jpg';
import Falcon from '../assets/falcon.jpg';
import Z9 from '../assets/z9.jpg';
import K8 from '../assets/k8.jpg';
import AFLogo from '../assets/logo-long.png';



// --- Simple Custom Carousel ---
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
      caption: "GHAF male and female team VolleyBall teams emerged champions of the maiden 'De Tour Du Accra'",
    },
  ];

  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

 

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 250, md: 400 },
        overflow: 'hidden',
        borderRadius: 3,
        mb: 6,
      }}
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            backgroundImage: `url(${slide.image})`,
            //try different options
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            inset: 0,
            opacity: index === current ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}>
          <Box
            sx={{
              position: "absolute",
              bottom: 30,
              left: 30,
              background: "#00000075",
              color: "#fff",
              px: 3,
              py: 1.5,
              borderRadius: 2,
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontWeight: 600,
              textShadow: "1px 1px 3px #00000099",
              maxWidth: "80%",
            }}
          >
            {slide.caption}
          </Box>
        </Box>
      ))}


      //slide controls
      <Button
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          background: '#00000066',
          color: 'white',
          minWidth: 0,
          borderRadius: '50%',
          width: 40,
          height: 40,
          '&:hover': { background: '#00000099' },
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

        //slide indicators
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


// --- News Headlines Component ---
const NewsHeadlines = () => {
  const headlines = [
    "Air Force male and female volley team wins another trophy",
    "Ghana Air Force holds annual Tech fair",
    "Govt and GHAF in talks to purchase new aircrafts",
    "End of Year celebration schedule for early 2026",
    "Air Force Handball qualify for the finals"
  ];

  return (
    <Card sx={{ p: 2, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={2}>
        Latest Headlines
      </Typography>
      <Divider sx={{ mb: 2 }} />
      {headlines.map((h, i) => (
        <Typography key={i} sx={{ mb: 1.5 }}>
          • {h}
        </Typography>
      ))}
    </Card>
  );
};


// --- Featured Article Card Component ---
const ContentCard = ({ title, description, image, category, date, author }) => (
  <Paper
    elevation={3}
    sx={{
      p: 2,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      textAlign: 'left',
      borderRadius: 4,
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #49ade640 0%, #ffffff99 100%)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 8px 24px #00000026',
      border: '1px solid #ffffff4d',
      transition: 'all 0.35s ease',
      '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0 12px 30px #00000040',
      },
    }}
  >
    <Box component="img" src={image} alt={title}
      sx={{
        height: 200,
        width: '100%',
        objectFit: 'cover',
        mb: 2,
        borderRadius: 2,
      }}
    />

    {category && (
      <Box
        sx={{
          display: 'inline-block',
          bgcolor: '#2E8BC0',
          color: '#fff',
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          fontSize: '0.75rem',
          fontWeight: 700,
          mb: 1,
          width: 'fit-content',
        }}
      >
        {category}
      </Box>
    )}

    <Typography
      variant="h6"
      gutterBottom
      sx={{
        color: '#2E8BC0',
        fontWeight: 700,
        letterSpacing: 0.3,
        mb: 1,
      }}
    >
      {title}
    </Typography>

    {(date || author) && (
      <Typography
        variant="caption"
        sx={{
          color: '#999',
          mb: 1,
          display: 'block',
          fontSize: '0.8rem',
        }}
      >
        {date && <span>{date}</span>}
        {date && author && <span> • </span>}
        {author && <span>by {author}</span>}
      </Typography>
    )}

    <Typography
      variant="body2"
      sx={{
        color: '#0f1720cc',
        flexGrow: 1,
        lineHeight: 1.6,
        mb: 2,
      }}
    >
      {description}
    </Typography>

    <Button
      variant="outlined"
      size="small"
      sx={{
        alignSelf: 'flex-start',
        color: '#2e8bc0',
        textTransform: 'none',
        borderRadius: 5,
        px: 2,
        py: 1,
        boxShadow: '0 3px 10px #2e8bc04d',
        '&:hover': {
          bgcolor: '#3786baff',
          color: '#fff',
          boxShadow: '0 5px 18px #2e8bc080',
        },
      }}
    >
      Read More →
    </Button>
  </Paper>
);


// --- Stats/Metrics Card Component ---
const MetricCard = ({ icon: Icon, number, label, description }) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      p: 3,
      textAlign: 'center',
      borderRadius: 3,
      background: 'linear-gradient(135deg, #49ade640 0%, #ffffff99 100%)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 8px 24px #00000026',
      transition: 'all 0.35s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 32px #00000040',
      },
    }}
  >
    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
      <Icon sx={{ fontSize: 48, color: '#2E8BC0' }} />
    </Box>
    <Typography 
      variant="h4" 
      sx={{ 
        fontWeight: 700, 
        color: '#2E8BC0', 
        mb: 1,
        fontSize: { xs: '2rem', md: '2.5rem' },
      }}
    >
      {number}
    </Typography>
    <Typography 
      variant="h6" 
      sx={{ 
        fontWeight: 600, 
        color: '#0f1720', 
        mb: 1,
        fontSize: { xs: '1rem', md: '1.1rem' },
      }}
    >
      {label}
    </Typography>
    <Typography 
      variant="body2" 
      sx={{ 
        color: '#666',
        fontSize: '0.9rem',
        lineHeight: 1.5,
      }}
    >
      {description}
    </Typography>
  </Card>
);


// --- Aircraft Card Component (Grid-based display) ---
const AircraftCard = ({ name, type, role, image }) => (
  <Paper
    elevation={3}
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      borderRadius: 3,
      background: 'linear-gradient(135deg, #49ade640 0%, #ffffff99 100%)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 8px 24px #00000026',
      border: '1px solid #ffffff4d',
      transition: 'all 0.35s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 32px #00000040',
      },
    }}
  >
    <Box
      component="img"
      src={image}
      alt={name}
      sx={{
        width: '100%',
        height: 200,
        objectFit: 'cover',
      }}
    />

    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Box
        sx={{
          display: 'inline-block',
          bgcolor: '#2E8BC0',
          color: '#fff',
          px: 2,
          py: 0.5,
          borderRadius: 2,
          fontSize: '0.75rem',
          fontWeight: 700,
          mb: 2,
          width: 'fit-content',
        }}
      >
        {type}
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: '#0f1720',
          mb: 1,
          fontSize: { xs: '1.1rem', md: '1.3rem' },
        }}
      >
        {name}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: '#2E8BC0',
          fontWeight: 600,
          mb: 1.5,
          fontSize: '0.9rem',
        }}
      >
        Role: {role}
      </Typography>

      {/* <Typography
        variant="body2"
        sx={{
          color: '#0f1720cc',
          lineHeight: 1.6,
          mb: 2,
          flexGrow: 1,
        }}
      >
        {description}
      </Typography> */}

      {/* <Box sx={{ mb: 2 }}>
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            color: '#666',
            mb: 0.5,
            fontWeight: 600,
          }}
        >
          Specifications:
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#0f1720cc',
            lineHeight: 1.8,
            display: 'block',
          }}
        >
          {specs}
        </Typography>
      </Box> */}

      <Button
        variant="outlined"
        size="small"
        sx={{
          alignSelf: 'flex-start',
          color: '#2e8bc0',
          textTransform: 'none',
          borderRadius: 5,
          px: 2,
          py: 0.8,
          boxShadow: '0 3px 10px #2e8bc04d',
          '&:hover': {
            bgcolor: '#3786baff',
            color: '#fff',
            boxShadow: '0 5px 18px #2e8bc080',
          },
        }}
      >
        Learn More →
      </Button>
    </Box>
  </Paper>
);


// --- Main Homepage Component ---
const HomePage = () => {

  // Data for the articles
  const moreArticles = [
    {
      title: 'Our Mission & Vision',
      description: "To protect Ghana's airspace and support national development through air power. We are committed to excellence in air operations and personnel development.",
      image: AFLogo,
      category: 'About',
      date: 'Nov 17, 2025',
      author: 'Ghana Air Force'
    },
    {
      title: 'Advanced Aviation Training Program',
      description: "Discover our comprehensive pilot training curriculum designed to meet international standards. Graduates serve with distinction across multiple mission profiles.",
      image: AFLogo,
      category: 'Training',
      date: 'Nov 10, 2025',
      author: 'Training Command'
    },
    {
      title: 'Fleet Modernization Initiative',
      description: "The Ghana Air Force is investing in state-of-the-art aircraft and equipment to enhance operational capabilities. Recent acquisitions strengthen our rapid response and transport capacity.",
      image: AFLogo,
      category: 'News',
      date: 'Nov 5, 2025',
      author: 'Operations Division'
    },
    {
      title: 'Community Outreach & Service',
      description: "Beyond defense, the Ghana Air Force actively engages in humanitarian operations, disaster relief, and community development across the nation.",
      image: AFLogo,
      category: 'Community',
      date: 'Oct 28, 2025',
      author: 'Public Relations'
    },
    {
      title: 'Career Opportunities in the Air Force',
      description: "Join a team of dedicated professionals. Explore pilot, engineer, technician, and administrative roles. Competitive benefits and growth opportunities await.",
      image: AFLogo,
      category: 'Careers',
      date: 'Oct 20, 2025',
      author: 'Human Resources'
    },
    {
      title: 'International Partnerships & Cooperation',
      description: "The GHAF collaborates with allied air forces globally, participating in joint exercises and knowledge-sharing initiatives to strengthen defense capabilities.",
      image: AFLogo,
      category: 'News',
      date: 'Oct 15, 2025',
      author: 'Foreign Relations'
    },
  ];

  // Data for stats/metrics
  const metrics = [
    {
      icon: FlightIcon,
      number: '25+',
      label: 'Aircraft',
      description: 'Modern fleet across multiple mission types'
    },
    {
      icon: GroupIcon,
      number: '2,400+',
      label: 'Personnel',
      description: 'Dedicated men and women in service'
    },
    {
      icon: SchoolIcon,
      number: '75+',
      label: 'Training Hours',
      description: 'Advanced pilot certification annually'
    },
    {
      icon: TrendingUpIcon,
      number: '67',
      label: 'Years',
      description: 'Of continuous service since 1957'
    },
  ];

  // Data for aircraft
  const aircraftData = [
    {
      name: 'CASA C-295m',
      type: 'Transport',
      role: 'Transport & Cargo',
      // description: 'Multi-purpose medium transport aircraft for strategic and tactical airlift operations.',
      // specs: 'Speed: 540 km/h | Range: 5,200 km | Capacity: 71 passengers',
      image: Casa,
    },
    {
      name: 'FALCON EXE',
      type: 'Private Jet',
      role: 'Air Defense',
      // description: 'Advanced fighter-bomber with superior maneuverability and combat capabilities.',
      // specs: 'Speed: Mach 2.0 | Range: 3,500 km | Armament: Full combat suite',
      image: Falcon,
    },
    {
      name: 'HONGHU K8',
      type: 'Trainer',
      role: 'Pilot Training',
      // description: 'Modern turboprop trainer aircraft for advanced pilot certification programs.',
      // specs: 'Speed: 600 km/h | Range: 1,800 km | Capacity: Instructor + Student',
      image: K8,
    },
    {
      name: 'Z9-EH',
      type: 'Helicopter',
      role: 'Multi-Purpose',
      // description: 'Advanced helicopter for transport, rescue, and tactical operations.',
      // specs: 'Speed: 330 km/h | Range: 1,200 km | Capacity: 27 passengers',
      image: Z9,
    },
    {
      name: 'MI-171SH',
      type: 'Helicopter',
      role: 'Heavy Lift & Transport',
      // description: 'Heavy-lift helicopter for cargo transport and personnel deployment.',
      // specs: 'Speed: 260 km/h | Range: 900 km | Capacity: 35 passengers',
      image: Mi,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6, mt: 0}}>

      {/* Carousel and headlines in a Grid Layout*/}
      <Grid container spacing={4} sx={{ mb: 1 }}>
        <Grid  item xs={12} sm={12} md={6} lg={6}>
          <SimpleCarousel />
        </Grid>
        <Grid size={4} item xs={12} md={3} sx={{py:0}} >
          <NewsHeadlines />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />


            {/* Featured Articles Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" textAlign='center' gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
          ⭐ Featured Articles
        </Typography>
        <Container maxWidth="lg" disableGutters>
          <Grid container spacing={3} justifyContent="center">
            {moreArticles.map((article, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} item key={index}>
                <ContentCard 
                  title={article.title} 
                  description={article.description} 
                  image={article.image}
                  category={article.category}
                  date={article.date}
                  author={article.author}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


      {/* --- Horizontal Separator --- */}
      <Divider sx={{ my: 6 }} />


      
      {/* Our Assets - Multi-Column Grid */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" textAlign='center' gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
          ✈️ Aircraft Fleet
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          {aircraftData.map((aircraft, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} item key={index}>
              <AircraftCard 
                name={aircraft.name}
                type={aircraft.type}
                // description={aircraft.description}
                role={aircraft.role}
                // specs={aircraft.specs}
                image={aircraft.image}
              />
            </Grid>
          ))}
        </Grid>
      </Box>


      {/* --- Horizontal Separator --- */}
      <Divider sx={{ my: 6 }} />


      {/* Stats/Metrics Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" textAlign='center' gutterBottom sx={{ fontWeight: 600, mb: 4, color: '#0f1720' }}>
          📊 By The Numbers
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {metrics.map((metric, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} item key={index}>
              <MetricCard 
                icon={metric.icon}
                number={metric.number}
                label={metric.label}
                description={metric.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>


      {/* --- Horizontal Separator --- */}
      <Divider sx={{ my: 6 }} />
      

      {/* Gallery & Upcoming Events Section */}
      <Grid container spacing={6} sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
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
            <Typography variant="h6" >
              Gallery Placeholder
            </Typography>
            <Button variant="text" sx={{ mt: 1 }} >View All Photos</Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} ml={15} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
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
            </Paper>
            <Paper elevation={1} sx={{ p: 2, mb: 1.5, display: 'flex', alignItems: 'center' }}>
              <EventIcon color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">Developer Workshop: Hooks</Typography>
                <Typography variant="body2" color="text.secondary">November 5th, 2025 - 9:00 AM EST</Typography>
              </Box>
            </Paper>
            <Paper elevation={1} sx={{ p: 2, mb: 1.5, display: 'flex', alignItems: 'center' }}>
              <EventIcon color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">Developer Workshop: Hooks</Typography>
                <Typography variant="body2" color="text.secondary">November 5th, 2025 - 9:00 AM EST</Typography>
              </Box>
            </Paper>
            <Paper elevation={1} sx={{ p: 2, mb: 1.5, display: 'flex', alignItems: 'center' }}>
              <EventIcon color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">Developer Workshop: Hooks</Typography>
                <Typography variant="body2" color="text.secondary">November 5th, 2025 - 9:00 AM EST</Typography>
              </Box>
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
