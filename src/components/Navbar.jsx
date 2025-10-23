import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import AFLogo from '../assets/AFLogo.jpg';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutAnchor, setAboutAnchor] = useState(null);

  const navItems = [
    { label: 'Home', to: '/' },
    // About handled by dropdown below
    { label: 'Events', to: '/events' },
    { label: 'Contact', to: '/contact' },
  ];

  const toggleDrawer = (next) => () => setOpen(next);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutOpen = (e) => setAboutAnchor(e.currentTarget);
  const handleAboutClose = () => setAboutAnchor(null);

  return (
    <Box component="header">
      {/* Top thin info bar */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: '#e8f6fb', color: '#0f1720' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 34, px: { xs: 1, sm: 2 } }}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Box
                  component="a"
                  href="mailto:info@ghaf.example"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'inherit', textDecoration: 'none' }}
                >
                  <EmailIcon fontSize="small" />
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    info@ghaf.example
                  </Typography>
                </Box>

                <Box
                  component="a"
                  href="tel:+2332404809600"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'inherit', textDecoration: 'none' }}
                >
                  <PhoneIcon fontSize="small" />
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    +233 240-480-9600
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  Burma Camp, Accra
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main navbar row */}
      <AppBar position="sticky" elevation={2} sx={{ bgcolor: '#2E8BC0' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ position: 'relative', minHeight: 72 }}>
            <Box
              display="grid"
              gridTemplateColumns={{ xs: 'auto 1fr auto', md: 'auto 1fr auto' }}
              alignItems="center"
              width="100%"
            >
              {/* Left: Logo + Title (moved to far left) */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: { xs: 1, sm: 0 } }}>
                <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <Box
                    component="img"
                    src={AFLogo}
                    alt="Ghana Air Force"
                    sx={{ width: { xs: 32, sm: 40, md: 48 }, height: 'auto', borderRadius: 1, mr: 1.5 }}
                  />
                </NavLink>

                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontFamily:
                      'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                    letterSpacing: 0.2,
                    fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem', lg: '1.8rem' },
                  }}
                >
                  Ghana Air Force
                </Typography>
              </Box>

              {/* Center spacer */}
              <Box />

              {/* Right: Nav links + mobile menu */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                {/* Desktop links (sm and up, hide on xs; hidden on lg because right-side nav shows at lg) */}
                <Box sx={{ display: { xs: 'none', sm: 'flex', lg: 'none' }, gap: 1.5, alignItems: 'center' }}>
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <Button
                        key={item.to}
                        component={NavLink}
                        to={item.to}
                        color="inherit"
                        onClick={(e) => {
                          // programmatic navigate fallback in case clicks are swallowed by overlays
                          e.preventDefault();
                          navigate(item.to);
                        }}
                        sx={{
                          textTransform: 'none',
                          whiteSpace: 'nowrap',
                          color: '#fff',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: 8,
                            right: 8,
                            bottom: -8,
                            height: 3,
                            background: isActive ? '#fff' : 'transparent',
                            transition: 'background 200ms ease',
                            borderRadius: 2,
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    );
                  })}

                  {/* About dropdown button */}
                 <Button
  color="inherit"
  onClick={(e) => {
    e.preventDefault(); // stop default navigation
    handleAboutOpen(e);
  }}
  sx={{ textTransform: 'none', color: '#fff' }}
>
  About
</Button>

                  <Menu anchorEl={aboutAnchor} open={Boolean(aboutAnchor)} onClose={handleAboutClose}>
                    <MenuItem component={NavLink} to="/about/profile" onClick={handleAboutClose}>
                      Profile
                    </MenuItem>
                    <MenuItem component={NavLink} to="/about/management" onClick={handleAboutClose}>
                      Management
                    </MenuItem>
                    <MenuItem component={NavLink} to="/about/gallery" onClick={handleAboutClose}>
                      Gallery
                    </MenuItem>
                    <MenuItem component={NavLink} to="/about/news-events" onClick={handleAboutClose}>
                      News & Events
                    </MenuItem>
                  </Menu>
                </Box>

                {/* Mobile menu button (xs) */}
                <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                  <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>

            {/* Absolute CTA on the far right (lg+) */}
            <Box
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                gap: 3,
                '& .MuiButton-root': {
                  fontSize: { lg: '0.95rem' },
                },
              }}
            >
              {[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Events', to: '/events' }, { label: 'Contact', to: '/contact' }].map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Button
                    key={item.to}
                    component={NavLink}
                    to={item.to}
                    color="inherit"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.to);
                    }}
                    sx={{
                      textTransform: 'none',
                      whiteSpace: 'nowrap',
                      color: '#fff',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 8,
                        right: 8,
                        bottom: -8,
                        height: 3,
                        background: isActive ? '#fff' : 'transparent',
                        transition: 'background 200ms ease',
                        borderRadius: 2,
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}

              <Button
                component={NavLink}
                to="/contact"
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/contact');
                }}
                sx={{
                  bgcolor: '#fff',
                  color: '#2E8BC0',
                  whiteSpace: 'nowrap',
                  textTransform: 'none',
                  borderRadius: 3,
                  px: 3,
                  py: 1,
                }}
              >
                Get Involved
              </Button>
            </Box>
          </Toolbar>
        </Container>

        {/* Drawer (mobile menu) */}
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 260 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
              {/* include About sub-links inside the drawer as nested items */}
              <ListItemButton
                component={NavLink}
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                  setOpen(false);
                }}
              >
                <ListItemText primary="Home" primaryTypographyProps={{ noWrap: true }} />
              </ListItemButton>
              <ListItemButton
                component={NavLink}
                to="/about/profile"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/about/profile');
                  setOpen(false);
                }}
              >
                <ListItemText primary="Profile" primaryTypographyProps={{ noWrap: true }} />
              </ListItemButton>
              <ListItemButton
                component={NavLink}
                to="/about/management"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/about/management');
                  setOpen(false);
                }}
              >
                <ListItemText primary="Management" primaryTypographyProps={{ noWrap: true }} />
              </ListItemButton>
              <ListItemButton
                component={NavLink}
                to="/about/gallery"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/about/gallery');
                  setOpen(false);
                }}
              >
                <ListItemText primary="Gallery" primaryTypographyProps={{ noWrap: true }} />
              </ListItemButton>
              <ListItemButton
                component={NavLink}
                to="/about/news-events"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/about/news-events');
                  setOpen(false);
                }}
              >
                <ListItemText primary="News & Events" primaryTypographyProps={{ noWrap: true }} />
              </ListItemButton>
              <ListItemButton
                component={NavLink}
                to="/events"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/events');
                  setOpen(false);
                }}
              >
                <ListItemText primary="Events" primaryTypographyProps={{ noWrap: true }} />
              </ListItemButton>
              <ListItemButton
                component={NavLink}
                to="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/contact');
                  setOpen(false);
                }}
              >
                <ListItemText primary="Contact" primaryTypographyProps={{ noWrap: true }} />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
}

