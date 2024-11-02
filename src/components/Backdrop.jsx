import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const SimpleBackdrop = () => {
  return (
    <div style={{ height: '100vh' }}>
      
      <Box sx={{ display: 'flex', color: '#b82925'}}>
        <CircularProgress sx={{margin: '50vh auto'}}  color="inherit" />
      </Box>
    </div>
  );
}

export default SimpleBackdrop;