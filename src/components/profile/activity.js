import React, { useState } from "react";
import { useSelector } from "react-redux";
import Like from "./like";
import Retweet from "./retweet";
import Comment from "./comment";
import Share from "./share";
import { PeopleFlex, TweetDetails, User, UserImage } from "../styles/profile";
import moment from "moment";
import Loading from "../loading";
import { DatePicker, Row, Col } from "antd";
import { Text } from "../styles/profile";

const Activity = (props) => {
  const { tweets, loading, onStartChange, onEndChange } = props;
  const [likeList, setLikeList] = useState([]);
  const theme = useSelector((state) => state.theme);

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div style={{ padding: 10 }}>
            <Text>
              <strong> Date Range Filter</strong>
            </Text>
            <Row>
              <Col span={12}>
                <DatePicker placeholder="Start Date" onChange={onStartChange} />
              </Col>
              <Col span={12}>
                <DatePicker placeholder="End Date" onChange={onEndChange} />
              </Col>
            </Row>
          </div>
          {!tweets?.length ? (
            <div style={{ textAlign: "center", padding: "40px 0px" }}>
              <h3
                style={{
                  fontSize: "19px",
                  fontWeight: 700,
                  color: theme.color,
                }}
              >
                No Tweets to show.
              </h3>
              <p>If tweets are available, they’ll show up here.</p>
            </div>
          ) : (
            tweets &&
            tweets.map((tweet, idx) => {
              return (
                <PeopleFlex
                  hover
                  border={theme.border}
                  tweetHov={theme.tweetHov}
                  key={`Tweets_id_${idx}`}
                >
                  <User>
                    <UserImage src={tweet?.imageUrl} />
                  </User>
                  <div style={{ width: "80%" }}>
                    <TweetDetails color={theme.color}>
                      <p
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          maxWidth: "18%",
                        }}
                      >
                        @{tweet?.author}
                      </p>
                      <span>{moment(tweet?.publishedDate).format("ll")}</span>
                    </TweetDetails>
                    <div
                      style={{
                        color: theme.color,
                        wordBreak: "break-word",
                      }}
                    >
                      {tweet?.text}
                    </div>

                    <TweetDetails style={{ justifyContent: "space-between" }}>
                      <Comment tweet={tweet} idx={idx} />

                      <Retweet tweet={tweet} idx={idx} />
                      <Like
                        tweet={tweet}
                        idx={idx}
                        setLikeList={setLikeList}
                        likeList={likeList}
                      />
                      <Share tweet={tweet} idx={idx} />
                    </TweetDetails>
                  </div>
                </PeopleFlex>
              );
            })
          )}
        </>
      )}
    </React.Fragment>
  );
};

export default Activity;
