import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'secondary.main' }}>
          Welcome to My News Site
        </Typography>
        <Typography variant="body1" color="text.primary" paragraph>
          Your source for the latest updates and engaging stories. Stay informed with our diverse content.
        </Typography>
      </Box>

      <Card sx={{ mb: 4, bgcolor: 'background.paper' }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Latest Headlines
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Here you would display a list of recent news articles. Each could be a Card or a ListItem.
          </Typography>
          <Button variant="contained" color="secondary" component={Link} to="/events">
            Check Our Events
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, bgcolor: 'background.paper' }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Featured Article
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            A compelling piece of content highlighting a key story. This could include an image and more detailed text.
          </Typography>
          <Button variant="outlined" color="secondary">
            Read More
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default HomePage;