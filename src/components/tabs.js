import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Tab } from "./styles/profile";

const Tabs = (props) => {
  // TabList -> [{path,name,title}]
  const { tabList } = props;
  const theme = useSelector((state) => state.theme);
  const { activity } = useParams();
  const activeStyle = {
    borderBottom: "2px solid rgb(29,161,242)",
    color: "rgb(29,161,242)",
  };

  return (
    <Tab border={theme.border}>
      {tabList.map((tab) => {
        return (
          <Link
            key={tab.name}
            to="/profile"
            replace={true}
            style={
              activity === tab.name ||
              (activity == undefined && tab.name === "tweets")
                ? activeStyle
                : {}
            }
          >
            <div>{tab.title}</div>
          </Link>
        );
      })}
    </Tab>
  );
};

export default Tabs;
