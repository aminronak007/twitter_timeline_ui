import React, { useEffect } from "react";
import Icon from "../icon";
import { Text } from "../styles/profile";
import { ActivityBox, ActivityIcon } from "../styles/common";

const Like = (props) => {
  const { tweet, idx, likeList, setLikeList } = props;
  const likePath = [
    "M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z",
  ];

  const handleLike = async (e, idx) => {
    e.preventDefault();
    if (!likeList.includes(idx)) {
      likeList.push(idx);
    } else {
      let array = removeItemOnce(likeList, idx);
      setLikeList(array);
    }
    localStorage.setItem("tweets", JSON.stringify(likeList));
    getLikedList();
  };

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const getLikedList = () => {
    setLikeList(JSON.parse(localStorage.getItem("tweets")));
  };

  useEffect(() => {
    getLikedList();
  }, [likeList?.length]);

  return (
    <ActivityBox
      onClick={(event) => handleLike(event, idx)}
      disabled={false}
      hoverColor="rgb(224,36,94)"
      hoverBg="rgba(224,36,94,0.1)"
    >
      <ActivityIcon>
        <Icon
          d={likePath}
          width="18.75px"
          height="18.75px"
          fill={
            likeList && likeList?.length > 0 && likeList.includes(idx)
              ? "rgb(224, 36, 94)"
              : "rgb(101, 119, 134)"
          }
        />
      </ActivityIcon>
      <Text
        color={
          parseInt(tweet.likes) > 0 ? "rgb(224, 36, 94)" : "rgb(101, 119, 134)"
        }
      >
        {tweet?.likes}
      </Text>
    </ActivityBox>
  );
};

export default Like;
