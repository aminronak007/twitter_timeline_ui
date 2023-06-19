import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TweetModal from "../menubar/tweetModal";
import Activity from "../profile/activity";
import { Tweet } from "../styles/home";
import { ProfileCorner, Header } from "../styles/common";
import axios from "axios";

const Home = () => {
  const theme = useSelector((state) => state.theme);
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const getTweets = () => {
    axios.get(process.env.REACT_APP_SERVER_URL).then((response) => {
      setTweets(response.data);
      setLoading(false);
    });
  };

  const filterData = (startDate, endDate) => {
    setStartDate(startDate);
    setEndDate(endDate);
    let start = new Date(startDate);
    let end = new Date(endDate);

    if (startDate && endDate) {
      let data = tweets.filter((item) => {
        let date = new Date(item.publishedDate);
        if (
          date.getTime() >= start.getTime() &&
          date.getTime() <= end.getTime()
        ) {
          return item;
        }
      });
      setTweets(data);
    }
  };

  const onStartChange = (date, dateString) => {
    filterData(dateString, endDate);
  };

  const onEndChange = (date, dateString) => {
    filterData(startDate, dateString);
  };
  useEffect(() => {
    if (!startDate && !endDate) {
      getTweets();
    }
  }, [tweets?.length]);

  return (
    <ProfileCorner border={theme.border}>
      <Header border={theme.border} bg={theme.bg} color={theme.color}>
        <h2>Home</h2>
      </Header>
      <Tweet border={theme.border}>
        <TweetModal rows={3} />
      </Tweet>
      <Activity
        loading={loading}
        tweets={tweets}
        feed
        onStartChange={onStartChange}
        onEndChange={onEndChange}
      />
    </ProfileCorner>
  );
};

export default Home;
