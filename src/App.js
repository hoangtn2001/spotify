import './App.css';
import { LeftContainer } from './components/LeftContainer';
import { MainContainer } from './components/MainContainer';
import { RightMenu } from './components/RightMenu';

function App() {
  return (
    <div className="App">
      <LeftContainer />
      <MainContainer />
      <RightMenu />
      <div className="background"></div> 
    </div>
  );
}

export default App;
