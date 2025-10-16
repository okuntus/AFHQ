import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import EventIcon from '@mui/icons-material/Event'; // Example icon

function EventsPage() {
  const events = [
    { id: 1, title: 'Annual Tech Conference', date: 'October 26, 2025', location: 'Virtual' },
    { id: 2, title: 'Local Community Meetup', date: 'November 15, 2025', location: 'City Hall' },
    { id: 3, title: 'Charity Run for Education', date: 'December 2, 2025', location: 'Central Park' },
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'secondary.main' }}>
          Upcoming Events
        </Typography>
        <Typography variant="body1" color="text.primary" paragraph>
          Stay updated with our exciting lineup of events.
        </Typography>
      </Box>

      <List sx={{ bgcolor: 'background.paper', borderRadius: 2, p: 2 }}>
        {events.map((event) => (
          <ListItem key={event.id} divider>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>
                <EventIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ color: 'text.primary' }}>
                  {event.title}
                </Typography>
              }
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.secondary">
                    Date: {event.date}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2" color="text.secondary">
                    Location: {event.location}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default EventsPage;