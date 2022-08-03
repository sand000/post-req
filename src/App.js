import logo from './logo.svg';
import './App.css';
import Tasks from './Components/Tasks';
import AddNewTask from './Components/AddNewTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Tasks/>
       {/* <AddNewTask/> */}
      </header>
    </div>
  );
}

export default App;
