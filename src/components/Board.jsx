import { useState } from "react";

export function Board({ board, handleClick, reset, winner, winnerLine }) {

  return (
    <div className="board">
      {winner && winnerLine && <div className={`winner-line ${winnerLine}`}></div>}
      {board.map((row, ejey) => {
        return row.map((cell, ejex) => {
          return (
            <button
              key={ejex}
              onClick={() => handleClick(`${ejey} ${ejex}`)}
              className="btn"
            >
              {cell}
            </button>
          );
        });
      })}
    </div>
  );
}
