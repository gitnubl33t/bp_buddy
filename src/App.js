import "./App.css";
import buddyUrl, { ReactComponent as BuddyImg } from "./bp_buddy_bg_img.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={buddyUrl} alt="buddy" />
    </div>
  );
}

export default App;
