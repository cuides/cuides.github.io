// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline, Box } from '@mui/material';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const theme = createTheme({
  typography: {
    allVariants: {
      color: '#2e7d32', // Verde
    },
  },
  palette: {
    primary: {
      main: '#2e7d32',
    },
    secondary: {
      main: '#81c784',
    },
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavigationBar />
        <Box component="main" sx={{ flex: 1 }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
