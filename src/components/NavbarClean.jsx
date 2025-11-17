import { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Box, Button, Container,
  Drawer, List, ListItemButton, ListItemText, Menu, MenuItem, Tooltip, Divider, useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon, Email as EmailIcon, Phone as PhoneIcon, LocationOn as LocationOnIcon,
  Facebook as FacebookIcon, Instagram as InstagramIcon, Twitter as TwitterIcon, YouTube as YouTubeIcon
} from '@mui/icons-material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AFLogo from '../assets/logo-long.png';



//beginning of main webpage
export default function NavbarClean() {
  const [open, setOpen] = useState(false);
  const [aboutAnchor, setAboutAnchor] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  // Responsive breakpoint hook
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const handleNavigate = (to) => {
    navigate(to);
    setOpen(false);
    setAboutAnchor(null);
  };

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Events', to: '/events' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <Box component="header">
      {/* --- Top Info Bar --- */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: '#e8f6fbe6',
          color: '#0f1720b1',
          zIndex: (theme) => theme.zIndex.drawer + 2,
          width: {xs: '94%', sm: '90%', md: '85%'},
          left: '50%',
          transform: 'translateX(-50%)',
          mt: 1,
          borderRadius: 11,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 32, sm: 36 },
              px: 2,
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            {/* Contact Info */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                gap: { sm: 2, md: 3 },
                flexWrap: 'wrap',
              }}
            >
              <Box
                component="a"
                href="mailto:info@ghaf.example"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'inherit', textDecoration: 'none' }}
              >
                <EmailIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption" sx={{ fontWeight: 600, fontSize: { sm: '0.75rem', md: '0.8rem' } }}>
                  info@ghaf.example
                </Typography>
              </Box>
              <Box
                component="a"
                href="tel:+2332404809600"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'inherit', textDecoration: 'none' }}
              >
                <PhoneIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption" sx={{ fontWeight: 600, fontSize: { sm: '0.75rem', md: '0.8rem' } }}>
                  +233 240-480-9600
                </Typography>
              </Box>
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {[{
                icon: <FacebookIcon fontSize="small" />,
                color: '#3b5998',
                link: 'https://www.facebook.com/GhanaAirForce'
              },
              {
                icon: <InstagramIcon fontSize="small" />,
                color: '#d62976',
                link: 'https://www.instagram.com/GhanaAirForce'
              },
              {
                icon: <TwitterIcon fontSize="small" />,
                color: '#1DA1F2',
                link: 'https://twitter.com/GhanaAirForce'
              },
              {
                icon: <YouTubeIcon fontSize="small" />,
                color: '#FF0000',
                link: 'https://www.youtube.com/GhanaAirForce'
              }].map((social, i) => (
                <Tooltip key={i} title={social.link.split('.')[1]}>
                  <IconButton component="a" href={social.link} size="small" sx={{ color: social.color }}>
                    {social.icon}
                  </IconButton>
                </Tooltip>
              ))}
              <Tooltip title="Location">
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
                  <LocationOnIcon sx={{ fontSize: 16 }} />
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    Burma Camp, Accra
                  </Typography>
                </Box>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* --- Main Navigation Bar --- */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: '#49ace6d7',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: { xs: '94%', sm: '90%', md: '85%' },
          left: '50%',
          transform: 'translateX(-50%)',
          mt: { xs: 8, sm: 9, md: 10, lg: 6.5 },
          borderRadius: 11,
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 56, md: 72 } }}>
            {/* Logo and Title */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: 12 }}>
                <Box
                  component="img"
                  src={AFLogo}
                  alt="Ghana Air Force Logo"
                  sx={{ width: { xs: 32, sm: 40, md: 48 }, height: 'auto' }}
                />
              
                <Typography
                  variant="h6"
                  sx={{
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '2rem' },
                  }}
                >
                  Ghana Air Force
                </Typography>
              </NavLink>
            </Box>

            {/* Desktop Navigation */}
            {isDesktop ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.to}
                    onClick={() => handleNavigate(item.to)}
                    sx={{
                      textTransform: 'none',
                      color: '#ffffff',
                      borderBottom: location.pathname === item.to ? '2px solid #fff' : 'none',
                      px: 2,
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  onClick={() => handleNavigate('/join')}
                  variant="contained"
                  sx={{
                    bgcolor: '#fff',
                    color: '#2E8BC0',
                    textTransform: 'none',
                    borderRadius: 5,
                    px: 3,
                    '&:hover': { bgcolor: '#e0e0e0' },
                  }}
                >
                  Join Us
                </Button>
              </Box>
            ) : (
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* --- Drawer for Mobile --- */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: { xs: '75vw', sm: 300 }, bgcolor: '#f9f9f9' },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
          <Box component="img" src={AFLogo} alt="Logo" sx={{ width: 36, mr: 1 }} />
          <Typography variant="subtitle1" sx={{ color: '#2E8BC0', fontWeight: 600 }}>
            Ghana Air Force
          </Typography>
        </Box>
        <Divider />
        <List>
          {[
            { label: 'Home', to: '/' },
            { label: 'Profile', to: '/about/profile' },
            { label: 'Management', to: '/about/management' },
            { label: 'Gallery', to: '/about/gallery' },
            { label: 'News & Events', to: '/about/news-events' },
            { label: 'Events', to: '/events' },
            { label: 'Contact', to: '/contact' },
          ].map((item) => (
            <ListItemButton key={item.to} onClick={() => handleNavigate(item.to)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption">info@ghaf.example</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <PhoneIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption">+233 240-480-9600</Typography>
          </Box>
        </Box>
      </Drawer>

      {/* --- Spacer to push page content below navbar --- */}
      <Toolbar sx={{ minHeight: { xs: 88, sm: 100, md: 108 } }} />
    </Box>
  );
}
