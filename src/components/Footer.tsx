import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';

export const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box 
      component="footer" 
      sx={{ 
        width: '100%',
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: 1,
        borderColor: 'divider'
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Created by{' '}
        <Link 
          href="https://vrushankpatel.github.io" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ 
            color: theme.palette.mode === 'dark' ? '#00cccc' : '#008B8B',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          Vrushank Patel
        </Link>
      </Typography>
    </Box>
  );
}; 