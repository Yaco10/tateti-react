import { useState } from "react"

export function Board() {
    const [state,setState] = useState("X")
    const [winner,setWinner] = useState(false)
    const [board,setBoard] = useState([
        ["","",""],
        ["","",""],
        ["","",""],
    ]) 

    function handleClick(coord){
        coord = coord.split(" ")
        if(board[coord[0]][coord[1]] == ""){
            board[coord[0]][coord[1]] = state
            setState(state == "X" ? "O" : "X")
            if(win()){
                setWinner(true)  
                return 
            }
            
        }
    }

    function win() {
        // Verificar filas
        for (let i = 0; i < 3; i++) {
            if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return true; // Ganó en la fila i
            }
        }
    
        // Verificar columnas
        for (let j = 0; j < 3; j++) {
            if (board[0][j] !== "" && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
                return true; // Ganó en la columna j
            }
        }
    
        // Verificar diagonal principal
        if (board[0][0] !== "" && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return true; // Ganó en la diagonal principal
        }
    
        // Verificar diagonal secundaria
        if (board[0][2] !== "" && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return true; // Ganó en la diagonal secundaria
        }
    
        return false; // No hay ganador
    }
    

    return(
    <div className="board">
        {
            board.map((row,ejey) => {
                return(
                            row.map((cell,ejex) => {
                                return(
                                    <button key={ejex} onClick={() => handleClick(`${ejey} ${ejex}`)} className="btn">{cell}</button>
                                )
                            })
                )
            })
        }
        {
         winner && ( <div className="Win">
                        <div >Ganador: {state}</div>
                    </div> )
        
        }
        
    </div>
    )
}



