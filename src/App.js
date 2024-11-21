import "./App.css";
import Navbar from "./Components/Navbar";
import Player from "./Components/Player";
import SideSection from "./Components/SideSection";
import MainWindow from "./Components/MainWindow";

function App() {
  return (
    <>
      <Navbar />
      <SideSection />
      <MainWindow />
      <Player />
    </>
  );
}

export default App;
