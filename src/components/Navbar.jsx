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
	Grid,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YoutubeIcon from '@mui/icons-material/YouTube';
import { NavLink, useLocation } from 'react-router-dom';
import AFLogo from '../assets/logo-long.png';


// Simple responsive navbar using MUI
export default function Navbar() {
	const [open, setOpen] = useState(false);

	const navItems = [
		{ label: 'Home', to: '/' },
		{ label: 'About', to: '/about' },
		{ label: 'Events', to: '/events' },
		{ label: 'Contact', to: '/contact' },
	];

	const toggleDrawer = (next) => () => setOpen(next);

	const location = useLocation();

	// active/inactive styles handled inline based on location.pathname

	return (
			<Box component="header">
				{/* Top thin info bar */}
				<AppBar position="static" elevation={0} sx={{ bgcolor: '#cee3f9d0', color: '#0f1720af' }}>
					<Container maxWidth="lg">
						<Toolbar disableGutters sx={{ minHeight: 34, px: { xs: 1, sm: 2 } }}>
							<Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
								<Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
									<Box component="a" href="mailto:info@ghaf.example" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'inherit'}}>
										<EmailIcon fontSize="smaller" />
										<Typography variant="caption" sx={{ fontWeight: 600 }}>info@ghaf.example</Typography>
									</Box>

									<Box component="a" href="tel:+2332404809600" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'inherit', textDecoration: 'none' }}>
										<PhoneIcon fontSize="smaller" />
										<Typography variant="caption" sx={{ fontWeight: 600 }}>+233 240-480-9600</Typography>
									</Box>
								</Box>

                        {/* Adding social media icons */}
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                          <Tooltip title="Facebook">
                            <IconButton component="a" href="https://www.facebook.com/GhanaAirForce" size="small" sx={{color: '#3b5998ff', '&:hover':{color: '#1877F2'}}}>
                              <FacebookIcon fontSize='smaller' />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Instagram">
                            <IconButton component="a" href="https://www.instagram.com/GhanaAirForce" color="inherit" size="small" sx={{color: '#d62976ff', '&:hover':{color: '#E1306C'}}}>
                              <InstagramIcon fontSize='smaller' />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Twitter">
                            <IconButton component="a" href="https://twitter.com/GhanaAirForce" size="small" sx={{color: '#55aceeff', '&:hover':{color: '#1DA1F2'}}}>
                              <TwitterIcon fontSize='smaller' />
                            </IconButton>
                          </Tooltip>
						  <Tooltip title="YouTube">
							<IconButton component="a" href="https://www.youtube.com/GhanaAirForce" color="inherit" size="small" sx={{color: '#FF0000', '&:hover':{color: '#c4302b'}}}>
							  <YoutubeIcon fontSize='smaller' />
							</IconButton>
						  </Tooltip>
                        </Box>

								<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
									<LocationOnIcon fontSize="smaller" />
									<Typography variant="caption" sx={{ fontWeight: 600 }}>Burma Camp, Accra</Typography>
								</Box>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>

				{/* Main navbar row */}
				<AppBar position="sticky" elevation={2} sx={{ bgcolor: '#2E8BC0' }}>
					<Container maxWidth="lg">
						<Toolbar disableGutters sx={{ position: 'relative', minHeight: 72 }}>
							<Grid container alignItems="center">
								<Grid item xs={2} sm={2} md={2} />

								<Grid item xs={8} sm={8} md={8} sx={{ textAlign: 'center', position: 'relative' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                      <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Box component="img" src={AFLogo} alt="Ghana Air Force" sx={{ width: { xs: 32, sm: 40, md: 48 }, height: 'auto', mr: 1.5 }} />
                      </NavLink>

                          <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <Typography
                              variant="h6"
                              component="div"
                              sx={{
                                position: 'relative',
                                color: '#ffffff',
                                fontWeight: 700,
                                fontFamily: 'Playfair Display, serif',
                                letterSpacing: 0.2,
                                fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem', lg: '1.8rem' },
                              }}
                            >
                              Ghana Air Force
                            </Typography>
                        </NavLink>
                      </Box>
								</Grid>

                <Grid item xs={2} sm={2} md={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  {/* Desktop links (sm and up) on the right (hidden on lg because we show them in absolute CTA area) */}
                  <Box sx={{ display: { xs: 'none', sm: 'flex', lg: 'none' }, gap: 1.5, alignItems: 'center' }}>
                    {navItems.map((item) => {
                      const isActive = location.pathname === item.to;
                        return (
                          <Button
                            key={item.to}
                            component={NavLink}
                            to={item.to}
                            color="inherit"
                            fontFamily= 'Playfair Display, serif'
                            sx={{
                              textTransform: 'none',
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
                    </Box>

                  {/* Mobile menu (xs) stays on the right */}
                  <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                    <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                      <MenuIcon />
                    </IconButton>
                  </Box>
                </Grid>

							{/* Absolute CTA on the far right (lg+) */}
							<Box sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 2 }}>
								{navItems.map((item) => {
									const isActive = location.pathname === item.to;
									return (
										<Button
											key={item.to}
											component={NavLink}
											to={item.to}
											color="inherit"
											sx={{
												textTransform: 'none',
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

								<Button component={NavLink} to="/join" variant="contained"
                  sx={{ bgcolor: '#ffffff',
                        color: '#2E8BC0',
                        textTransform: 'none',
                        borderRadius: 5, px: 3, py: 1 }}>
                    Join Us
                </Button>
							</Box>
							</Grid>
						</Toolbar>
					</Container>

					<Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
						<Box sx={{ width: 260 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
							<List>
								{navItems.map((item) => (
									<ListItemButton key={item.to} component={NavLink} to={item.to}>
										<ListItemText primary={item.label} />
									</ListItemButton>
								))}
							</List>
						</Box>
					</Drawer>
				</AppBar>
			</Box>
	);
}

