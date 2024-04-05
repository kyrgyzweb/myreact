import './App.css';
import { comments } from './r1/commentData';
import Card from './r1/Card';

function App() {
  
  return (
    <div>
      {
        comments.map(comment => 
          <Card commentObject={comment} />
          )
      }
    </div>
    
  );
}

export default App;
