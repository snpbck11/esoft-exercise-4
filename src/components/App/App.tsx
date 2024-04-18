import "./App.css";
import CountdownTimer from "../CountdownTimer/Countdowntimer";
import UserList from "../UserList/UserList";
import WindowSize from "../WindowSize/WindowSize";

function App() {


  return (
    <div className="container">
      <CountdownTimer />
      <UserList />
      <WindowSize />
    </div>
  );
}

export default App;
