'use client'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress sx={{ color: '#b82925' }}/>
    </Box>
  );
}