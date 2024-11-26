import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark' depending on preference
    primary: {
      main: '#2196f3', // Soft coral/pink as primary color
    },
    secondary: {
      main: '#6a9c8e', // A calming teal for secondary
    },
    background: {
      default: '#f0f4f8', // Lighter background with soft blue/gray tone
      paper: '#ffffff',  // Clean white background for cards, dialogs, etc.
    },
    text: {
      primary: '#333', // Dark text for readability
      secondary: '#555', // Slightly lighter text for less important content
    },
    error: {
      main: '#f44336', // Red for errors
    },
    warning: {
      main: '#ff9800', // Orange for warning
    },
    info: {
      main: '#2196f3', // Blue for information
    },
    success: {
      main: '#4caf50', // Green for success
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Font style (you can change this)
    h1: {
      fontWeight: 700,
      color: '#222',
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
    // You can customize more typography settings here
  },
});

export default theme;
