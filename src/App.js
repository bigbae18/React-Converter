import './App.css';
import Converter from './components/Converter/Converter';

const App = () => {
  return (
    <div className="app-container">
      <header className="header-container">
        <h1>Temperature Converter between Celsius and Fahrenheit</h1>
      </header>
      <Converter />
    </div>
  );
}

export default App;
