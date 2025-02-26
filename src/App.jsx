import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { useBoard } from "./hooks/useBoard";

function App() {
  const [winsX, setWinsX] = useState(0);
  const [winsO, setWinsO] = useState(0);
  const { state, winner,winnerLine, board, handleClick, reset } = useBoard({winsX, setWinsX,winsO, setWinsO});
  function resetStats() {
    setWinsX(0);
    setWinsO(0);
  }

  return (
    <>
     {winner && <div className="winner-text">Ganador: {state}</div>}
      <Board
         board={board}
         handleClick={handleClick}
         winner={winner}
         winnerLine={winnerLine}
      />
      <div className="winners-text-container">
        <div className="count-win-text">Partidas Ganadas X: {winsX}</div>
        <div className="count-win-text">Partidas Ganadas O: {winsO}</div>
      </div>
      <div>
        <button onClick={() => resetStats()}>Reset</button>
      </div>
    </>
  );
}

export default App;
