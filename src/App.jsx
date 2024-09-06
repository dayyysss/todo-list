import { ThemeProvider } from "./components/theme-provider";
import TodoPage from "./components/TodoPage";

function App() {
  return (
    <ThemeProvider>
      <TodoPage />
    </ThemeProvider>
  );
}

export default App;
