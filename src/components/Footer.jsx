import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main', // White background
        color: 'text.secondary',
        py: 3,
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0', // Light border
        mt: 'auto', // Pushes footer to the bottom
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} My News Site. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        <MuiLink href="#" color="inherit" sx={{ mx: 1 }}>
          Privacy Policy
        </MuiLink>
        <MuiLink href="#" color="inherit" sx={{ mx: 1 }}>
          Terms of Service
        </MuiLink>
      </Typography>
    </Box>
  );
}

export default Footer;