
import { Container, Box, Typography, Button } from '@mui/material';

function HomePage() {
	return (
		<Box sx={{ py: 8 }}>
			<Container maxWidth="lg">
				<Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>Welcome to the Ghana Air Force</Typography>
				<Typography sx={{ mb: 4 }}>Learn more about our mission, events and how to get involved.</Typography>
				<Button href="/about" variant="contained" sx={{ bgcolor: '#2E8BC0', color: '#fff' }}>About Us</Button>
			</Container>
		</Box>
	);
}

export default HomePage;