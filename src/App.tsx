import { useState } from 'react'; // Fixes 'useState'
import DroneDashboard from './DroneDashboard'; // Fixes 'DroneDashboard'
import LoginPage from './LoginPage'; // Fixes 'LoginPage'
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {isAuthenticated ? (
        <DroneDashboard onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}

export default App;