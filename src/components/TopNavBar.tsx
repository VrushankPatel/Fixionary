import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, useTheme, Box } from '@mui/material';
import { Sun, Moon } from 'lucide-react';

interface TopNavBarProps {
  toggleTheme: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({ toggleTheme }) => {
  const theme = useTheme();

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Fixionary
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {theme.palette.mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};