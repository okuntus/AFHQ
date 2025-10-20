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
      {/* Top row: left logo, centered title, right contact/CTA */}
  <Toolbar sx={{ py: 2, position: 'relative' }}>
  <Container maxWidth="lg" disableGutters sx={{ position: 'relative',  px: { xs: 1, sm: 2 } }}>
          <Grid container alignItems="center" >
            {/* Left: logo */}
            <Grid item xs={2} sm={2} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Box component="img" src={AFLogo} alt="GHAF logo" sx={{ width: { xs: 36, sm: 48 }, height: { xs: 36, sm: 48 }, borderRadius: 1, mr: { xs: 1, sm: 4, md: 6, lg: 8 } }} />
              </NavLink>
            </Grid>

            {/* Center: title */}
            <Grid item xs={8} sm={8} md={8} sx={{ textAlign: 'center' }}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'text.primary',
                  fontWeight: 'bolder',
                  fontFamily: 'Playfair Display, serif',
                  display: { xs: 'none', sm: 'block' },
                  fontSize: { sm: '1.2rem', md: '1.5rem', lg: '2rem' },
                  zIndex: 10,
                }}
              >
                Ghana Air Force
              </Typography>
            </Grid>

            {/* Right: contact/CTA (mobile icons remain in-flow) */}
            <Grid item xs={2} sm={2} md={2} sx={{ position: 'absolute', left: '80%', gap: 2 }}>
              {/* Mobile compact icons + CTA icon remain here */}
              <Box sx={{ display: { xs: 'flex', md: 'flex', sm: 'flex', lg: 'none' }, ml: {xs: -4, md: 4, sm: -1}, alignItems: 'center', gap: 1 }}>
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
                <Tooltip title="Get Involved" placement="bottom">
                  <IconButton component={NavLink} to="/contact" aria-label="Get Involved" color="inherit" sx={{ ml: 1 }}>
                    <VolunteerActivismIcon fontSize="smaller" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>

            {/* Desktop: absolutely positioned address + CTA anchored to container right */}
              <Box sx={{ display: { xs: 'none', lg: 'flex' }, position: 'absolute', right: { lg: '-100px' }, top: '50%', transform: 'translateY(-50%)', alignItems: 'center', gap: 1, zIndex: 20 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon fontSize="smaller" color="action" />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>Burma Camp Accra, Ghana</Typography>
                  </Box>
                </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="smaller" color="action" />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="caption" component="a" href="mailto:info@ghaf.example" sx={{ fontWeight: 600, color: 'text.secondary' }}>info@ghaf.example</Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                component={NavLink}
                to="/contact"
                sx={{ ml: 1, textTransform: 'none', borderRadius: 5, bgcolor: '#c5e0f8ff', '&:hover': { bgcolor: '#9ccaff' } }}
              >
                Get Involved
              </Button>
            </Box>
          </Grid>
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