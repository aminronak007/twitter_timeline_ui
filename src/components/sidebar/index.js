import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SideBarBox, Header, Users, UserFlex, Button } from "../styles/sidebar";

const SideBar = () => {
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.profile.user);

  return (
    <React.Fragment>
      <SideBarBox tweetHov={theme.tweetHov}>
        <Header color={theme.color} border={theme.border}>
          <h2>Who to follow</h2>
        </Header>
        <Users>
          <Link to="/" key={user.id}>
            <UserFlex color={theme.color} border={theme.border}>
              <img src={user.avatar} />
              <div></div>
              <div style={{ marginLeft: "auto" }}>
                <Button onClick={(e) => handleFollow(e, idx)}>Follow</Button>
              </div>
            </UserFlex>
          </Link>
        </Users>
      </SideBarBox>
    </React.Fragment>
  );
};

export default SideBar;
