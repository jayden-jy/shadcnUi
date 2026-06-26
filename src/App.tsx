import { AppFooter, AppHeader } from "./components/common";
import { ThemeProvider } from "./components/theme-provider";
import HookDashboard from "./pages/HookDashboard";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
        <AppHeader />
        <div className="container">
          <HookDashboard />
        </div>
        <AppFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
