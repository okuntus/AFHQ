import React from 'react';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Container,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import AFLogo from '../assets/AFLogo.jpg';

// Responsive Navbar: desktop links + mobile drawer, CTA button, accessible labels
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Events', to: '/events' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const toggleDrawer = (nextOpen) => () => {
    setOpen(nextOpen);
  };

  const activeStyle = {
    textDecoration: 'none',
    color: 'primary.contrastText',
    borderBottom: '2px solid',
    borderColor: 'secondary.main',
    fontSize: '1.5rem',
  };

  const inactiveStyle = {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '1.2rem',
  };

  return (
    <AppBar position="sticky" elevation={1} sx={{ bgcolor: '#94caf9ff', color: 'text.primary', borderColor: 'divider' }}>
      {/* Top row: centered logo + title */}
      <Toolbar sx={{ py: 3 }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Box component="img" src={AFLogo} alt="GHAF logo" sx={{ width: 48, height: 48, borderRadius: 1, mr: 2 }} />
                <Typography variant="h4" component="span" sx={{ color: 'text.primary', fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>
                  Ghana Air Force
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>

      {/* Bottom row: constrained nav links centered with active highlight */}
      <Box sx={{ borderTop: 3, borderBottom: 3, borderColor: 'ButtonFace', bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'center', minHeight: 66 }}>
            {/* Desktop links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 8, ml: 'auto', mr: 'auto' }}>
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  color="inherit"
                  sx={{ textTransform: 'none', px: 2, py: 1, }}
                  style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Mobile menu button on the right */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="open navigation menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>

        {/* Mobile Drawer remains unchanged */}
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 260 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box component="img" src={AFLogo} alt="GHAF logo" sx={{ width: 36, height: 36, borderRadius: 1 }} />
              <Typography variant="h6">GHAF</Typography>
            </Box>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItemButton
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  sx={{ textTransform: 'none' }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}
            </List>
            {/* <Box sx={{ p: 2 }}>
              <Button variant="contained" color="secondary" fullWidth component={NavLink} to="/contact">
                Get In Touch
              </Button>
            </Box> */}
          </Box>
        </Drawer>
      </Box>
    </AppBar>
  );
}