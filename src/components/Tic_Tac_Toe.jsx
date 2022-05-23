import React, { useState, useEffect } from "react";
import Square from "./Square";

const initialState = ["", "", "", "", "", "", "", "", ""];

const Tic_Tac_Toe = () => {
  const [gameState, setGameState] = useState(initialState);
  const [isExcahnce, setIsExcahnce] = useState(false);
  const [finalWinner, setFinalWinner] = useState("");

  const onSquareClick = (index) => {
    let string = Array.from(gameState);
    string[index] = isExcahnce ? "X" : "O";
    setGameState(string);
    setIsExcahnce(!isExcahnce);
  };

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setFinalWinner(winner);

      setGameState(initialState);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="winner">
        <h2 className={finalWinner !== "" ? "show" : "hide"}>
          "{finalWinner}" Won the Game
        </h2>
        <p className={finalWinner !== "" ? "show colour" : "hide"}>
          Click anywhere to play again
        </p>
      </div>
      <div className="row">
        <Square
          className="b-bottom-right"
          state={gameState[0]}
          onClick={() => {
            onSquareClick(0);
            setFinalWinner("");
          }}
        />
        <Square
          className="b-bottom-right"
          state={gameState[1]}
          onClick={() => {
            onSquareClick(1);
            setFinalWinner("");
          }}
        />
        <Square
          className="b-bottom"
          state={gameState[2]}
          onClick={() => {
            onSquareClick(2);
            setFinalWinner("");
          }}
        />
      </div>
      <div className="row">
        <Square
          className="b-bottom-right"
          state={gameState[3]}
          onClick={() => {
            onSquareClick(3);
            setFinalWinner("");
          }}
        />
        <Square
          className="b-bottom-right"
          state={gameState[4]}
          onClick={() => {
            onSquareClick(4);
            setFinalWinner("");
          }}
        />
        <Square
          className="b-bottom"
          state={gameState[5]}
          onClick={() => {
            onSquareClick(5);
            setFinalWinner("");
          }}
        />
      </div>
      <div className="row">
        <Square
          className="b-right"
          state={gameState[6]}
          onClick={() => {
            onSquareClick(6);
            setFinalWinner("");
          }}
        />
        <Square
          className="b-right"
          state={gameState[7]}
          onClick={() => {
            onSquareClick(7);
            setFinalWinner("");
          }}
        />
        <Square
          state={gameState[8]}
          onClick={() => {
            onSquareClick(8);
            setFinalWinner("");
          }}
        />
      </div>
      <button
        onClick={() => {
          setGameState(initialState);
          setFinalWinner("");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Tic_Tac_Toe;
