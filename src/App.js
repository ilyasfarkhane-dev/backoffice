import { CssBaseline, ThemeProvider } from '@mui/material';
import './styles.css';
import { useRoutes } from 'react-router-dom';
import Router from './routes/Router';
import Toaster from 'react-hot-toast';
import { baselightTheme } from './theme/DefaultColors';

function App() {
  const routing = useRoutes(Router);
  const theme = baselightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Toaster
        position="top-right" // Options: 'top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'
        duration={4000} // Duration in milliseconds
      />
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
}

export default App;
