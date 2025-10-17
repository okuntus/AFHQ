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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, non iure. Fugit dolores natus fuga placeat unde blanditiis perferendis autem earum, veritatis minus corporis facilis quo aliquid, iusto quod enim.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'text.primary' }}>
          Our Vision
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, non iure. Fugit dolores natus fuga placeat unde blanditiis perferendis autem earum, veritatis minus corporis facilis quo aliquid, iusto quod enim.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, color: 'text.primary' }}>
          Our Team
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ color: 'secondary.main' }}>Fella Okuntus</Typography>
              <Typography variant="body2" color="text.secondary">Editor-in-Chief</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet beatae dolorem velit alias facilis, at nihil iste itaque, omnis sunt maiores harum dolorum nobis. Officia dolorem provident molestiae temporibus?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ color: 'secondary.main' }}>Nii Fakye</Typography>
              <Typography variant="body2" color="text.secondary">Team Leader</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa culpa ratione distinctio quis, velit provident placeat! Ea dolore consectetur expedita suscipit, eos a eius doloremque, earum est facilis aperiam.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AboutPage;