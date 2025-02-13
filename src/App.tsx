import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Grid, Box } from '@mui/material';
import { TopNavBar } from './components/TopNavBar';
import { FixInputPanel } from './components/FixInputPanel';
import { FixOutputPanel } from './components/FixOutputPanel';
import { Footer } from './components/Footer';

function App() {
  // Get initial theme from localStorage or default to 'light'
  const [mode, setMode] = React.useState<'light' | 'dark'>(() => {
    const savedMode = localStorage.getItem('themeMode');
    return (savedMode === 'light' || savedMode === 'dark') ? savedMode : 'light';
  });

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh',  // Changed from minHeight to height
        overflow: 'hidden'  // Add this to prevent scrolling
      }}>
        <TopNavBar toggleTheme={toggleTheme} />
        <Box sx={{ 
          flexGrow: 1, 
          p: 3, 
          display: 'flex',
          overflow: 'hidden',
          height: 'calc(100% - 64px)'  // Subtract header height
        }}>
          <Grid 
            container 
            spacing={3} 
            sx={{ 
              flexGrow: 1,
              margin: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <Grid item xs={12} md={4} sx={{ height: '100%' }}>
              <FixInputPanel />
            </Grid>
            <Grid item xs={12} md={8} sx={{ height: '100%' }}>
              <FixOutputPanel />
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;