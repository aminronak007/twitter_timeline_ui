import React from "react";
import { ActivityBox, ActivityIcon } from "../styles/common";
import share from "../../assets/Images/share.png";

const Share = (props) => {
  const { tweet } = props;
  return (
    <ActivityBox hoverColor="rgb(29,161,242)" hoverBg="rgba(29,161,242,0.1)">
      <ActivityIcon>
        <a href={tweet?.url} target="_blank">
          <img src={share} width="18" height="15" alt="share" />
        </a>
      </ActivityIcon>
    </ActivityBox>
  );
};

export default Share;
