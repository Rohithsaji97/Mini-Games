import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Games from "./Sources/Games";
import TicTacToe from "./Sources/TicTacToe";
import RockPaperScissor from "./Sources/RockPaperScissor";
import PlayerVSPlayer from "./RockPaperScissors/PlayerVSPlayer";
import ComputerVSPlayer from "./RockPaperScissors/ComputerVSPlayer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/games" element={<Games />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/rockpaperscissor" element={<RockPaperScissor />} />
          <Route path="/pvp" element={<PlayerVSPlayer />} />
          <Route path="/cvp" element={<ComputerVSPlayer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
