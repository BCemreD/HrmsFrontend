import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Dashboard from './layout/Dashboard';
import { Button, Segment } from 'semantic-ui-react'
import Navi from './layout/Navi';
import { Container, Header } from 'semantic-ui-react'
function App() {
  return (
    <div className="App">
     <Container className="main">
       <Navi/>
     </Container>
     <Container className="main"></Container>
     <Button className="main">
     <Dashboard/>
     </Button>
    </div>
  );
}

export default App;