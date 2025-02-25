import { useState } from "react";
import { useEffect } from "react";

export const useBoard = ({winsX, setWinsX, winsO, setWinsO}) => {
    const [state, setState] = useState("X");
    const [winner, setWinner] = useState(false);
    const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);


  function handleClick(coord) {
    const [row,col] = coord.split(" ").map(Number);
    const newBoard = board.map((row) => [...row]);
    if (board[row][col] == "") {
        newBoard[row][col] = state;
    }
    setBoard(newBoard);
    console.log(board);
  }

  useEffect(() => {
    if (winner) return;


    if (win(board)) {
      state === "X" ? setWinsX(winsX + 1) : setWinsO(winsO + 1);
      setWinner(true);
      setTimeout(() => {
          reset();
      }, 1500)
    }
    else{
        setState((prevState) => (prevState === "X" ? "O" : "X"));
    }
  }, [board,winner,winsX,winsO]);


  function win() {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] !== "" &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      ) {
        return true; // Ganó en la fila i
      }
    }

    // Verificar columnas
    for (let j = 0; j < 3; j++) {
      if (
        board[0][j] !== "" &&
        board[0][j] === board[1][j] &&
        board[1][j] === board[2][j]
      ) {
        return true; // Ganó en la columna j
      }
    }

    // Verificar diagonal principal
    if (
      board[0][0] !== "" &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      return true; // Ganó en la diagonal principal
    }

    // Verificar diagonal secundaria
    if (
      board[0][2] !== "" &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      return true; // Ganó en la diagonal secundaria
    }

    return false; // No hay ganador
  }

  function reset() {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner(false);
  }
  return { state, winner, board, handleClick, reset };
}