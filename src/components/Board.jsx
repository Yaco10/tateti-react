import { useState } from "react";

export function Board({ board, handleClick, reset }) {

  return (
    <div className="board">
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
