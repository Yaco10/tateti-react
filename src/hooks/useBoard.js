import { useState } from "react";
import { useEffect } from "react";

export const useBoard = ({winsX, setWinsX, winsO, setWinsO}) => {
    const [state, setState] = useState("X");
    const [winner, setWinner] = useState(false);
    const [winnerLine, setWinnerLine] = useState(0)
    const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);


  function handleClick(coord) {
    const [row, col] = coord.split(" ").map(Number);
    
    if (board[row][col] !== "" || winner) return; // Evita sobreescribir o jugar si ya hay un ganador
    
    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((fila) => [...fila]); // Copia profunda
      newBoard[row][col] = state;
      return newBoard;
    });
  }
  

  useEffect(() => {
    if (winner) return;
  
    const result = win(board); // Guardamos el resultado de la función correctamente
  
    console.log("Resultado de win():", result); // Debug
  
    if (result.win) { 
      state === "X" ? setWinsX((prev) => prev + 1) : setWinsO((prev) => prev + 1); 
      setWinner(true);
      setWinnerLine(result.line);
      setTimeout(() => {
        //reset();
      }, 1500);
    } else {
      setState((prevState) => (prevState === "X" ? "O" : "X"));
    }
  }, [board,winner]);
  


  function win(board) {
    if (!board) return { win: false, line: null }; // Evita errores si `board` es undefined
  
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return { win: true, line: `row-${i}` }; // Indica la fila ganadora
      }
    }
  
    for (let j = 0; j < 3; j++) {
      if (board[0][j] !== "" && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
        return { win: true, line: `col-${j}` }; // Indica la columna ganadora
      }
    }
  
    if (board[0][0] !== "" && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return { win: true, line: "diag-main" }; // Diagonal principal
    }
  
    if (board[0][2] !== "" && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return { win: true, line: "diag-sec" }; // Diagonal secundaria
    }
  
    return { win: false, line: null }; // No hay ganador
  }
  
  
  



  function reset() {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner(false);
  }
  return { state, winner,winnerLine, board, handleClick, reset };
}

