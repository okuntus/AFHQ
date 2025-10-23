import React from 'react';
import { Container, Box, Typography } from '@mui/material';

function ContactPage() {
	return (
		<Box sx={{ py: 8 }}>
			<Container maxWidth="lg">
				<Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Contact</Typography>
				<Typography>Contact us at info@ghaf.example or call +233 240-480-9600.</Typography>
			</Container>
		</Box>
	);
}

export default ContactPage;