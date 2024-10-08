import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

function Caards({ name, desc, pic, path }) {
  return (
    <Card
      className="card-compo"
      hoverable
      style={{
        width: 300,
        height: 520,
      }}
      cover={<img alt="No img found" src={pic} />}
    >
      <Meta title={name} description={desc} />
      <h6 className="play-button">
        <Link className="link-remove" to={path}>
          Play Now
        </Link>
      </h6>
    </Card>
  );
}

export default Caards;
