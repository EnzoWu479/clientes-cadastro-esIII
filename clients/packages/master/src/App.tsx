import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { AppRoutes } from './routes';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '@ecommerce/ui';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AppRoutes />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
