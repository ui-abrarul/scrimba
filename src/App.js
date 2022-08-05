import Header from "./components/header/Header";
import './App.css'
import Meme from "./components/meme/Meme";
import Things from "./components/things/Things";
import Usestate from "./components/useState/Usestate";
import ComplexObject from "./components/complexObjects/ComplexObject";
import Boxes from "./components/boxes/Boxes";

function App() {
  return (
    <div className="App">
    <Header/>
    <Meme/>
    <Things/>
    <Usestate/>
    <ComplexObject/>
    <Boxes/>
    </div>
  );
}

export default App;
