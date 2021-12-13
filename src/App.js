import './App.css';
import { BigMenu } from './components/BigMenu';
import { Header } from './components/Header';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Header />
      <BigMenu />
    </div>
  );
}

export default App;
