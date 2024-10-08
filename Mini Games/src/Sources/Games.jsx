import React from "react";
import Caards from "../Components/Caards";

function Games() {
  const miniGames = [
    {
      name: "Tic-Tac-Toe",
      desc: "Tic-Tac-Toe is a simple yet strategic two-player game where the goal is to align three marks in a row, column, or diagonal to win the game",
      img: "https://www.svgrepo.com/show/143264/tic-tac-toe-game.svg",
      path: "/tictactoe",
    },
    {
      name: "Rock Paper Scissors",
      desc: "Rock-Paper-Scissors is a decision making game where players choose one of three options, each defeating one option and losing to another.",
      img: "https://cdn-icons-png.flaticon.com/512/4144/4144475.png",
      path: "/rockpaperscissor",
    },
  ];

  return (
    <>
      <div>
        <h1 className="main-heading">MINI GAMES</h1>
      </div>
      <div className="game-box">
        {miniGames.map((each, index) => {
          return (
            <div key={index}>
              <Caards
                name={each.name}
                desc={each.desc}
                pic={each.img}
                path={each.path}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Games;
