import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Grid, Box } from '@mui/material';
import { TopNavBar } from './components/TopNavBar';
import { FixInputPanel } from './components/FixInputPanel';
import { FixOutputPanel } from './components/FixOutputPanel';

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
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <TopNavBar toggleTheme={toggleTheme} />
        <Box sx={{ flexGrow: 1, p: 3, overflow: 'hidden' }}>
          <Grid container spacing={3} sx={{ height: '100%' }}>
            <Grid item xs={12} md={4}>
              <FixInputPanel />
            </Grid>
            <Grid item xs={12} md={8}>
              <FixOutputPanel />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;