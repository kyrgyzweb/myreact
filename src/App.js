import logo from './logo.svg';
import './App.css';
import Greeting from './Greetings';
import Example from './r/Example1';

function App() {
  return (
    <div>
      <h1>Bismillah</h1>
      <Greeting name="Abdullah" signedIn={true}/>
      <Example />
    </div>
    
  );
}

export default App;
