import { HomePage } from './pages/HomePage/HomePage';
import './App.css';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
