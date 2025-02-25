import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { useBoard } from "./hooks/useBoard";

function App() {
  const [winsX, setWinsX] = useState(0);
  const [winsO, setWinsO] = useState(0);
  const { state, winner, board, handleClick, reset } = useBoard({winsX, setWinsX,winsO, setWinsO});

  return (
    <>
        {winner && <div className="winner-text">Ganador: {state}</div>}

      <Board
         board={board}
         handleClick={handleClick}
         reset={reset}
      />
      <div className="winners-text-container">
        <div className="count-win-text">Partidas Ganadas X: {winsX}</div>
        <div className="count-win-text">Partidas Ganadas O: {winsO}</div>
      </div>
    </>
  );
}

export default App;
