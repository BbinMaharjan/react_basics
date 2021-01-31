import React from "react";
import Avatar from "react-avatar";

const Image = (props) => {
  return (
    <Avatar
      name={props.name}
      size='100'
      textSizeRatio={1.5}
      round={true}
      style={{ padding: "10px 500px" }}></Avatar>
  );
};

export default Image;
