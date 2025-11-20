import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Box, Button, Container,
  Drawer, List, ListItemButton, ListItemText, Tooltip, Divider, useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon, Email as EmailIcon, Phone as PhoneIcon, LocationOn as LocationOnIcon,
  Facebook as FacebookIcon, Instagram as InstagramIcon, Twitter as TwitterIcon, YouTube as YouTubeIcon
} from '@mui/icons-material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AFLogo from '../assets/logo-long.png';

export default function NavbarClean() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  // Responsive breakpoint
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const handleNavigate = (to) => {
    navigate(to);
    setOpen(false);
  };

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Events', to: '/events' },
    { label: 'Contact', to: '/contact' },
  ];

  // Handle scroll for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box component="header" sx={{width: '100%'}}>
      {/* --- combined sticky header --- */}
      <AppBar
        sx={{
            position: 'fixed',
            width: { xs: '94%', sm: '90%', md: '85%' },
            zIndex: (theme) => theme.zIndex.appBar + 10,
            }}
      />

            {/* --- Top Info Bar --- */}           
            <AppBar
              position="static"
              elevation={0}
              sx={{
              bgcolor: '#e8f6fbe6',
              color: '#0f1720b1',
              px: 1,
              }}
            >  

        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: sticky ? 48 : 80,
              justifyContent: 'space-between',
            }}
          >
            {/* Contact Info */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                gap: 3,
              }}
            >
              <Box
                component="a"
                href="mailto:info@ghaf.example"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'inherit', textDecoration: 'none' }}
              >
                <EmailIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption" fontWeight={600}>
                  info@ghaf.example
                </Typography>
              </Box>

              <Box
                component="a"
                href="tel:0240480960"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'inherit', textDecoration: 'none' }}
              >
                <PhoneIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption" fontWeight={600}>
                  +233 240 480 960
                </Typography>
              </Box>
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
              {[
                { icon: <FacebookIcon fontSize="small" />, color: '#3b5998', label: 'Facebook', link: 'https://www.facebook.com/GhanaAirForce' },
                { icon: <InstagramIcon fontSize="small" />, color: '#d62976', label: 'Instagram', link: 'https://www.instagram.com/GhanaAirForce' },
                { icon: <TwitterIcon fontSize="small" />, color: '#1DA1F2', label: 'Twitter', link: 'https://twitter.com/GhanaAirForce' },
                { icon: <YouTubeIcon fontSize="small" />, color: '#FF0000', label: 'YouTube', link: 'https://www.youtube.com/GhanaAirForce' },
              ].map((social, i) => (
                <Tooltip key={i} title={social.label}>
                  <IconButton component="a" href={social.link} size="small" sx={{ color: social.color }}>
                    {social.icon}
                  </IconButton>
                </Tooltip>
              ))}

              <Tooltip title="Location">
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
                  <LocationOnIcon sx={{ fontSize: 16 }} />
                  <Typography variant="caption" fontWeight={600}>
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
        position="stactic" elevation={0}
        sx={{
          bgcolor: 'Transparent #49ace6d7',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: sticky ? 60 : 80 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: 12 }}>
                <Box
                  component="img"
                  src={AFLogo}
                  alt= 'Ghana Air Force Logo4'
                  sx={{ width: sticky ? 28 : 48, transition: '0.3s' }} />

                <Typography
                  variant="h6"
                  sx={{
                    ml: 1,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: sticky ? '1rem' : '1.6rem',
                    transition: '0.3s',
                    display: { xs: 'none', sm: 'block'}
                  }}
                >
                  Ghana Air Force
                </Typography>
              </NavLink>
            </Box>

            {/* Desktop Navigation */}
            {isDesktop ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.to}
                    onClick={() => handleNavigate(item.to)}
                    sx={{
                      textTransform: 'none',
                      color: '#ffffff',
                      borderBottom: location.pathname === item.to ? '2px solid #fff' : 'none',
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

      {/* --- Mobile Drawer --- */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 20 }}
        ModalProps={{ BackdropProps: { sx: { zIndex: (theme) => theme.zIndex.drawer + 19 } } }}
        PaperProps={{ sx: { width: { xs: '75vw', sm: 300 }, zIndex: (theme) => theme.zIndex.drawer + 21 } }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
          <Box component="img" src={AFLogo} alt="Logo" sx={{ width: 36, mr: 1 }} />
          <Typography variant="subtitle1" sx={{ color: '#2E8BC0', fontWeight: 600 }}>
            Ghana Air Force
          </Typography>
        </Box>

        <Divider />

        <List>
          {[
            { label: 'Home', to: '/' },
            { label: 'About', to: '/about' },
            { label: 'Events', to: '/events' },
            { label: 'News & Events', to: '/news-events' },
            { label: 'Gallery', to: '/gallery' },
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
            <Typography variant="caption">+233 240 480 960</Typography>
          </Box>
        </Box>
      </Drawer>

      {/* Spacer to avoid overlap */}
      <Box sx={{ height: sticky ? 90 : 150 }} />
    </Box>
  );
}
