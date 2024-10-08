import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Gestures from "../Components/Gestures";

function PlayerVSPlayer() {
  const [turnP, setturnP] = useState(true);
  const [p1, setP1] = useState(null);
  const [p2, setP2] = useState(null);
  const [winner, setWinner] = useState();

  const checkWinner = (p1Choice, p2Choice) => {
    if (p1Choice === p2Choice) {
      setWinner("It's a tie!");
    } else if (
      (p1Choice === "rock" && p2Choice === "scissors") ||
      (p1Choice === "scissors" && p2Choice === "paper") ||
      (p1Choice === "paper" && p2Choice === "rock")
    ) {
      setWinner("Player 1 Wins!");
    } else {
      setWinner("Player 2 Wins!");
    }
  };

  useEffect(() => {
    if (p1 && p2) {
      checkWinner(p1, p2);
    }
  }, [p1, p2]);

  const selected = (item) => {
    if (turnP) {
      setP1(item);
    } else {
      setP2(item);
    }
    setturnP(!turnP);
  };

  const resetGame = () => {
    setP1(null);
    setP2(null);
    setWinner(null);
    setturnP(true);
  };

  return (
    <div>
      <Link className="link-remove" to="/rockpaperscissor">
        <IoMdArrowRoundBack className="back-button" />
      </Link>
      <h1 className="main-heading-rps">Player V/S Player</h1>
      <Gestures selected={selected} />
      <div className="comment-box">
        {winner ? winner : turnP ? "Player 1 TURN" : "Player 2 TURN"}
      </div>
      {p1 && p2 && (
        <button onClick={resetGame} className="button-box">
          Play Again
        </button>
      )}
    </div>
  );
}

export default PlayerVSPlayer;
