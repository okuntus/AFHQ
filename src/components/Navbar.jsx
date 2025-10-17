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
  Tooltip,
  Chip,
  Slide,
} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import AFLogo from '../assets/AFLogo.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// Responsive Navbar: desktop links + mobile drawer, CTA button, accessible labels
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: '' });
  const [copying, setCopying] = useState('');

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Events', to: '/events' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const toggleDrawer = (nextOpen) => () => {
    setOpen(nextOpen);
  };

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setSnack({ open: true, message: `${label} copied to clipboard` });
      setCopying(label);
      setTimeout(() => setCopying(''), 700);
    } catch {
      setSnack({ open: true, message: `Could not copy ${label}` });
    }
  };

  // Slide transition for Snackbar
  const SlideTransition = (props) => {
    return <Slide {...props} direction="up" />;
  };

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnack((s) => ({ ...s, open: false }));
  };

  const activeStyle = {
    textDecoration: 'none',
    color: '#0f1720',
    backgroundColor: '#eceff1',
    borderRadius: '3px',
    fontSize: '1.2rem',
    padding: '6px 12px',
    borderBottom: '2px solid #003',
  };

  const inactiveStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };


  return (
    <AppBar position="sticky" elevation={1} sx={{ bgcolor: '#94caf9ff', color: 'text.primary', borderColor: 'divider' }}>
      {/* Top row: centered logo + title */}
          <Toolbar sx={{ py: 2, position: 'relative' }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="center">
            <NavLink to="/" style={{ display: 'flex', justifyContent: "center", alignItems: 'left' }}>
              <Box component="img" src={AFLogo} alt="GHAF logo" sx={{ width: { xs: 36, sm: 48 }, height: { xs: 36, sm: 48 }, borderRadius: 1, mr: { xs: 1, sm: 2 } }} />
            </NavLink>
                <Grid item>
                  <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 'bolder',
                      fontFamily: 'Playfair Display, serif',
                      display: { xs: 'none', sm: 'inline' },
                      fontSize: { sm: '1.5rem', md: '1.75rem' },
                    }}
                  >
                    Ghana Air Force
                  </Typography>
                </NavLink>
              </Grid>
            </Grid>
    

          {/* Contact info on the right (desktop only) - moved out of the logo link */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnIcon fontSize="smaller" color="action" />
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>Burma Camp Accra, Ghana</Typography>
                <IconButton aria-label="copy location" size="small" onClick={() => copyToClipboard('Burma Camp Accra, Ghana', 'Location')} sx={{ transform: copying === 'Location' ? 'scale(0.85)' : 'scale(1)', transition: 'transform 140ms', ml: 1 }}>
                </IconButton>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon fontSize="smaller" color="action" />
              <Box>
                <Typography variant="caption" component="a" href="mailto:info@ghaf.example" sx={{ fontWeight: 600, color:'text.secondary',}}>info@ghaf.example</Typography>
                <IconButton aria-label="copy email" size="small" onClick={() => copyToClipboard('info@ghaf.example', 'Email')} sx={{ transform: copying === 'Email' ? 'scale(0.85)' : 'scale(1)', transition: 'transform 140ms', ml: 1 }}>
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* Compact contact icons for small screens (with tooltips) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'absolute', right: { xs: 8, sm: 96 }, top: '50%', transform: 'translateY(-50%)', alignItems: 'center', gap: 1 }}>
            <Tooltip title="Call us" placement="bottom">
              <IconButton aria-label="call" component="a" href="tel:+233000000000" size="small" sx={{ color: 'inherit' }}>
                <PhoneIcon fontSize="smaller" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Email us" placement="bottom">
              <IconButton aria-label="email" component="a" href="mailto:info@ghaf.example" size="small" sx={{ color: 'inherit' }}>
                <EmailIcon fontSize="smaller" />
              </IconButton>
            </Tooltip>
          </Box>


          {/* Adaptive CTA for small screens: icon linking to contact */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'absolute', right: { xs: 48, sm: 56 }, top: '50%', transform: 'translateY(-50%)' }}>
            <Tooltip title="Get Involved" placement="bottom">
              <IconButton component={NavLink} to="/contact" aria-label="Get Involved" color="inherit">
                <VolunteerActivismIcon />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Tablet: collapse contact block into a compact chip (visible at md only) */}
          <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'none' }, position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }}>
            <Chip
              component={NavLink}
              to="/contact"
              label="Contact"
              clickable
              size="small"
              sx={{ bgcolor: 'secondary.main', color: '#fff', '&:hover': { bgcolor: 'secondary.dark' } }}
              aria-label="Contact us"
            />
          </Box>
        </Container>
      </Toolbar>

      {/* Bottom row: constrained nav links centered with active highlight */}
      <Box sx={{ borderTop: 3, borderBottom: 3, borderColor: 'ButtonFace', bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'center', minHeight: 66, position: 'relative' }}>
            {/* Desktop links */}
            <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 8 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.to}
                    component={NavLink}
                    to={item.to}
                    color="inherit"
                    sx={{ textTransform: 'none', px: 2, py: 1 }}
                    style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                  >
                    {item.label}
                  </Button>
                ))}

                {/* Desktop CTA on the right of the nav row */}
                <Button
                  variant="contained"
                  component={NavLink}
                  to="/contact"
                  sx={{ ml: 2,
                    textTransform: 'none',
                    borderRadius: 3,
                    bgcolor: '#c5e0f8ff',
                    '&:hover': { bgcolor: '#9ccaff' },
                  }}
                >
                  Get Involved
                </Button>
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
            <Divider />
            <Box sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon fontSize="small" />
                    <Typography variant="body2" sx={{ cursor: 'pointer' }} onClick={() => copyToClipboard('+233 000 000 000', 'Phone')}>+233 000 000 000</Typography>
                    <IconButton aria-label="copy phone" size="small" onClick={() => copyToClipboard('+233 000 000 000', 'Phone')} sx={{ transform: copying === 'Phone' ? 'scale(0.85)' : 'scale(1)', transition: 'transform 140ms' }}>
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon fontSize="small" />
                    <Typography variant="body2" sx={{ cursor: 'pointer' }} onClick={() => copyToClipboard('info@ghaf.example', 'Email')}>info@ghaf.example</Typography>
                    <IconButton aria-label="copy email" size="small" onClick={() => copyToClipboard('info@ghaf.example', 'Email')} sx={{ transform: copying === 'Email' ? 'scale(0.85)' : 'scale(1)', transition: 'transform 140ms' }}>
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton component="a" href="#" aria-label="Facebook">
                  <FacebookIcon sx={{ color: '#1877F2' }} />
                </IconButton>
                <IconButton component="a" href="#" aria-label="Twitter">
                  <TwitterIcon sx={{ color: '#1DA1F2' }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
      {/* Snackbar for copy-to-clipboard feedback */}
      <Snackbar open={snack.open} autoHideDuration={3000} onClose={handleSnackClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} TransitionComponent={SlideTransition}>
        <MuiAlert onClose={handleSnackClose} severity="success" elevation={6} variant="filled" sx={{ width: '100%' }}>
          {snack.message}
        </MuiAlert>
      </Snackbar>
    </AppBar>
  );
}