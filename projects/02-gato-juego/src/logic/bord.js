import { WINNER_COMBOS } from "./constants"

export const checkWinnerFrom = (boardtoCheack) => {
    for (const combo of WINNER_COMBOS){
    const [a, b, c] = combo
    if(
      boardtoCheack[a] &&
      boardtoCheack[a] === boardtoCheack[b] &&
      boardtoCheack[a] === boardtoCheack[c]
    ){
      return boardtoCheack[a]
    }
  }
  // No hay ganador
  return null
}


export const checkEndGame = (newBoard) => {
  // Revisar si hay un empate
  // si no hay mas espacios vacios
  // En el tablero
  return newBoard.every((Square) => Square !== null)
}