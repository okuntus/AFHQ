import React from 'react';
import { Container, Box, Typography } from '@mui/material';

function EventsPage() {
	return (
		<Box sx={{ py: 8 }}>
			<Container maxWidth="lg">
				<Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Events</Typography>
				<Typography>Check back for upcoming events and programmes.</Typography>
			</Container>
		</Box>
	);
}

export default EventsPage;