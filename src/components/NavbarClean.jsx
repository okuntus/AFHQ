import { useState } from 'react';
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
Tooltip,
Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YoutubeIcon from '@mui/icons-material/YouTube';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import AFLogo from '../assets/logo-long.png';

export default function NavbarClean() {
const [open, setOpen] = useState(false);
const [aboutAnchor, setAboutAnchor] = useState(null);

const navItems = [
{ label: 'Home', to: '/' },
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
        {/* first navbar wiht social media icons, location, email address and contact number*/}
      <AppBar position="static" elevation={0} sx={{ bgcolor: '#e8f6fb', color: '#0f1720b1' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 34, px: { xs: 1, sm: 2 } }}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: {xs: 'none', sm: 'flex', md: 'flex', lg: 'flex'}, gap: 3, alignItems: 'center' }}>
                <Tooltip title="Email">
                  <Box  component="a"
                        href="mailto:info@ghaf.example"
                        sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'inherit', textDecoration: 'none' }}>
                      <EmailIcon fontSize="small" />
                      <Typography variant="caption" sx={{ fontWeight: 600 }}>
                        info@ghaf.example
                      </Typography>
                  </Box>
                </Tooltip>
                <Tooltip title="Phone Number">
                  <Box component="a" href="tel:+2332404809600"
                        sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'inherit', textDecoration: 'none' }}>
                    <PhoneIcon fontSize="small" />
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      +233 240-480-9600
                    </Typography>
                  </Box>
                </Tooltip>
              </Box>

              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Tooltip title="Facebook">
                    <IconButton component="a" href="https://www.facebook.com/GhanaAirForce" size="small" sx={{ color: '#3b5998' }}>
                      <FacebookIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Instagram">
                    <IconButton component="a" href="https://www.instagram.com/GhanaAirForce" size="small" sx={{ color: '#d62976' }}>
                      <InstagramIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Twitter">
                    <IconButton component="a" href="https://twitter.com/GhanaAirForce" size="small" sx={{ color: '#1DA1F2' }}>
                      <TwitterIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="YouTube">
                    <IconButton component="a" href="https://www.youtube.com/GhanaAirForce" size="small" sx={{ color: '#FF0000' }}>
                      <YoutubeIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Location">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: 1 }}>
                      <LocationOnIcon fontSize="small" />
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                          Burma Camp, Accra
                        </Typography>
                    </Box>
                  </Tooltip>
              </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>


      {/* second navbar with logo and navigation links */}
      <AppBar position="sticky" elevation={2} sx={{ bgcolor: '#2E8BC0', fontFamily: 'Playfair' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ position: 'relative', minHeight: 72 }}>
            <Box display="grid" gridTemplateColumns={{ xs: 'auto 1fr auto' }} alignItems="center" width="100%">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <Box component="img" src={AFLogo} alt="Ghana Air Force" sx={{ width: { xs: 32, sm: 40, md: 48 }, height: 'auto', borderRadius: 1, mr: 1.5 }} />
                </NavLink>
                <Typography variant="h6" component="div" sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem', lg: '2rem' } }}>
                  Ghana Air Force
                </Typography>
              </Box>

            
            {/* navigating through the links for small screens */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Box sx={{ display: { xs: 'none', sm: 'flex', lg: 'none' }, gap: 1.5, alignItems: 'center' }}>
                  {navItems.map((item) => {
                    return (
                      <Button key={item.to}
                              component={NavLink}
                              to={item.to}
                              color="inherit"
                              onClick={(e) => { e.preventDefault(); navigate(item.to); }}
                              sx={{ textTransform: 'none', color: '#fff' }}>
                                {item.label}
                      </Button>
                    );
                  })}
                  

                    <Button color="inherit"
                            onClick={(e) => { e.preventDefault(); handleAboutOpen(e); }}
                            sx={{ textTransform: 'none', color: '#fff' }}>
                              About
                    </Button>

                    <Menu anchorEl={aboutAnchor} open={Boolean(aboutAnchor)} onClose={handleAboutClose}>
                      <MenuItem component={NavLink} to="/about/profile" onClick={handleAboutClose}>Profile</MenuItem>
                      <MenuItem component={NavLink} to="/about/management" onClick={handleAboutClose}>Management</MenuItem>
                      <MenuItem component={NavLink} to="/about/gallery" onClick={handleAboutClose}>Gallery</MenuItem>
                      <MenuItem component={NavLink} to="/about/news-events" onClick={handleAboutClose}>News & Events</MenuItem>
                  </Menu>
                </Box>

                <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                  <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>


            {/* navigation for lg screens */}
            <Box sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 3 }}>
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Events', to: '/events' },
                { label: 'Contact', to: '/contact' }].map((item) => (
                <Button
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  color="inherit"
                  onClick={(e) => { e.preventDefault(); navigate(item.to); }}
                  sx={{ textTransform: 'none',
                  color: '#fff',
                  borderBottom: location.pathname === item.to ? '2px solid #fff' : 'none',
                  borderRadius: 2,
                  px: 2
                  }}>

                    {item.label}
                </Button>
              ))}

                <Button
                  component={NavLink} to="/join"
                  variant="contained"
                  onClick={(e) => { e.preventDefault(); navigate('/join'); }}
                  sx={{ bgcolor: '#fff',
                  color: '#2E8BC0',
                  textTransform: 'none',
                  borderRadius: 3,
                  px: 3 }}>

                  Join Us
                </Button>
            </Box>
          </Toolbar>
        </Container>

            
            

            {/* Drawer for mobile navigation */}
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              {/* logo and title in app drawer */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
                  <Box component="img" src={AFLogo} alt="Ghana Air Force" sx={{ width: { xs: 32, sm: 40, md: 48 }, height: 'auto', p: 1 }} />
                </NavLink>
                <Typography variant="subtitle1" component="h6" sx={{ display: 'flex', alignItems: 'center', color: '#2E8BC0', fontWeight: 600, ml: 0, p: 1 }}>
                  Ghana Air Force
                </Typography>
              </Box>
              <Divider sx={{py: 1}} />

              <Box sx={{ width: 'drawerWidth' }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                <List>
                    <ListItemButton component={NavLink} to="/" onClick={(e) => { e.preventDefault(); navigate('/'); setOpen(false); }}>
                      <ListItemText primary="Home" primaryTypographyProps={{ noWrap: true }} />
                    </ListItemButton>

                    <ListItemButton component={NavLink} to="/about/profile" onClick={(e) => { e.preventDefault(); navigate('/about/profile'); setOpen(false); }}>
                      <ListItemText primary="Profile" primaryTypographyProps={{ noWrap: true }} />
                    </ListItemButton>

                    <ListItemButton component={NavLink} to="/about/management" onClick={(e) => { e.preventDefault(); navigate('/about/management'); setOpen(false); }}>
                      <ListItemText primary="Management" primaryTypographyProps={{ noWrap: true }} />
                  </ListItemButton>

                    <ListItemButton component={NavLink} to="/about/gallery" onClick={(e) => { e.preventDefault(); navigate('/about/gallery'); setOpen(false); }}>
                      <ListItemText primary="Gallery" primaryTypographyProps={{ noWrap: true }} />
                    </ListItemButton>

                    <ListItemButton component={NavLink} to="/about/news-events" onClick={(e) => { e.preventDefault(); navigate('/about/news-events'); setOpen(false); }}>
                      <ListItemText primary="News & Events" primaryTypographyProps={{ noWrap: true }} />
                    </ListItemButton>

                    <ListItemButton component={NavLink} to="/events" onClick={(e) => { e.preventDefault(); navigate('/events'); setOpen(false); }}>
                      <ListItemText primary="Events" primaryTypographyProps={{ noWrap: true }} />
                    </ListItemButton>

                    <ListItemButton component={NavLink} to="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); setOpen(false); }}>
                      <ListItemText primary="Contact" primaryTypographyProps={{ noWrap: true }} />
                    </ListItemButton>
                  </List>
                </Box>

                {/* contact info in app drawer */}
                <Box sx={{ p: 2, borderTop: '1px solid #ccc' }}>
                     <Box sx={{ display: {xs: 'block', sm: 'block'}, alignItems: 'center'}}>
                      <Box  component="a"
                          href="mailto:info@ghaf.example"
                          sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'inherit', textDecoration: 'none' }}>
                        <EmailIcon fontSize="smaller" />
                        <Typography variant="caption" sx={{ fontWeight: 300 }}>
                          info@ghaf.example
                        </Typography>
                      </Box>
                      <Box component="a" href="tel:+2332404809600"
                            sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'inherit', textDecoration: 'none' }}>
                        <PhoneIcon fontSize="smaller" />
                        <Typography variant="caption" sx={{ fontWeight: 300, py: 1}}>
                          +233 240-480-9600
                        </Typography>
                      </Box>
                  </Box>
                </Box>
            </Drawer>
      </AppBar>
  </Box>
);}
