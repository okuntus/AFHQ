import React from 'react';
import { Container, Typography, Box, Avatar, Grid } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function AboutPage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'secondary.main' }}>
          About Us
        </Typography>
        <Avatar sx={{ bgcolor: 'secondary.main', width: 56, height: 56, mx: 'auto', mb: 2 }}>
          <InfoIcon />
        </Avatar>
        <Typography variant="body1" color="text.primary" paragraph>
          My News Site was founded with a mission to deliver timely, accurate, and engaging news to our readers.
          We believe in the power of information to inspire, educate, and connect communities.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'text.primary' }}>
          Our Vision
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          To be the most trusted and comprehensive source of news and analysis, fostering a well-informed society.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, color: 'text.primary' }}>
          Our Team
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ color: 'secondary.main' }}>Jane Doe</Typography>
              <Typography variant="body2" color="text.secondary">Editor-in-Chief</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                With over 15 years in journalism, Jane leads our editorial team with a passion for truth.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ color: 'secondary.main' }}>John Smith</Typography>
              <Typography variant="body2" color="text.secondary">Lead Developer</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                John ensures our platform is robust, fast, and user-friendly, bringing the news to you seamlessly.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AboutPage;