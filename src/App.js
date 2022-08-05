import Header from "./components/header/Header";
import './App.css'
import Meme from "./components/meme/Meme";
import Things from "./components/things/Things";
import Usestate from "./components/useState/Usestate";

function App() {
  return (
    <div className="App">
    <Header/>
    <Meme/>
    <Things/>
    <Usestate/>
    </div>
  );
}

export default App;
