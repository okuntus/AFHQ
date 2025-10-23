import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
	return (
		<Box component="footer" sx={{ bgcolor: '#f5f7fa', py: 4, mt: 6 }}>
			<Container maxWidth="lg" sx={{ textAlign: 'center' }}>
				<Typography variant="body2" color="textSecondary">
					© {new Date().getFullYear()} Ghana Air Force. All rights reserved. &nbsp;
					<Link href="/contact" underline="hover">Contact</Link>
				</Typography>
			</Container>
		</Box>
	);
}

export default Footer;