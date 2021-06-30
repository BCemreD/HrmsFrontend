import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Dashboard from './layout/Dashboard';
import { Button, Segment } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Button className="main">
     <Dashboard/>
     </Button>
    </div>
  );
}

export default App;