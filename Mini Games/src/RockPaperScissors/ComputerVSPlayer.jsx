import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Gestures from "../Components/Gestures";

function ComputerVSPlayer() {
  const [uChoice, setUChoice] = useState(null);
  const [cChoice, setCChoice] = useState(null);
  const [winner, setWinner] = useState("Make your move!!");

  const checkWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  };

  const selected = (item) => {
    setUChoice(item);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setCChoice(randomChoice);
  };

  useEffect(() => {
    if (uChoice && cChoice) {
      const result = checkWinner(uChoice, cChoice);
      setWinner(result);
    }
  }, [uChoice, cChoice]);

  return (
    <>
      <Link className="link-remove" to="/rockpaperscissor">
        <IoMdArrowRoundBack className="back-button" />
      </Link>
      <h1 className="main-heading-rps">Computer V/S Player</h1>
      <Gestures selected={selected} />
      <div className="comment-box">
        <div>{winner}</div>
        {uChoice && cChoice && (
          <p>
            You chose: <strong>{uChoice}</strong>, Computer chose:{" "}
            <strong>{cChoice}</strong>
          </p>
        )}
      </div>
    </>
  );
}

export default ComputerVSPlayer;
