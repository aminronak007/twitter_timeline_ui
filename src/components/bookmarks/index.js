import React from "react";
import { useSelector } from "react-redux";
import { ProfileCorner, Header } from "../styles/common";

const BookMarks = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <ProfileCorner border={theme.border}>
      <Header
        bg={theme.bg}
        color={theme.color}
        para={theme.para}
        border={theme.border}
      >
        <h2>Bookmarks</h2>
      </Header>
      <h2 style={{ textAlign: "center", color: theme.color }}>Coming soon!</h2>
    </ProfileCorner>
  );
};

export default BookMarks;
