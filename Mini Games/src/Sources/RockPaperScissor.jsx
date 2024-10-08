import React from "react";
import Caards from "../Components/Caards";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function RockPaperScissor() {
  const type2Player = [
    {
      img: "https://cdn.iconscout.com/icon/premium/png-256-thumb/player-match-1673227-1420277.png",
      title: "Computer VS Player",
      desc: "Computer vs Player game mode features a player competing against AI-controlled opponents, offering a more predictable and structured challenge.",
      path: "/cvp",
    },
    {
      img: "https://static.thenounproject.com/png/499972-200.png",
      title: "Player VS Player",
      desc: "Player vs Player game mode involves direct competition between players, where they face off against each other in real-time combat or challenges.",
      path: "/pvp",
    },
  ];
  return (
    <div>
      <Link className="link-remove" to="/games">
        <IoMdArrowRoundBack className="back-button" />
      </Link>
      <h1 className="main-heading">CHOOSE MODE</h1>
      <div className="game-box">
        {type2Player.map((each, index) => {
          return (
            <Caards
              key={index}
              desc={each.desc}
              name={each.title}
              pic={each.img}
              path={each.path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RockPaperScissor;
