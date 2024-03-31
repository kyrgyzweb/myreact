import logo from './logo.svg';
import './App.css';
import Greeting from './Greetings';

function App() {
  return (
    <div>
      <h1>Bismillah</h1>
      <Greeting name="Abdullah" signedIn={true}/>
    </div>
    
  );
}

export default App;
