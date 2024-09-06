import { ThemeProvider } from "./components/theme-provider";
import TodoPage from "./components/TodoPage";
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <ThemeProvider>
       <Toaster toastOptions={{ position: 'top-right', className: 'toast' }} />
      <TodoPage />
    </ThemeProvider>
  );
}

export default App;
