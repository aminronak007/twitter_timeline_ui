import React, { useState } from "react";
import { useSelector } from "react-redux";
import UploadButton from "../uploadButton";
import { Flex, Button } from "../styles/modal";

const TweetModal = (props) => {
  const [text, setText] = useState("");
  const [isTweetDisabled, setIsTweetDisabled] = useState(true);
  const theme = useSelector((state) => state.theme);
  const { rows } = props;

  return (
    <React.Fragment>
      <Flex bg={theme.bg} color={theme.color}>
        <div>
          <img width="49px" height="49px" style={{ borderRadius: "50%" }} />
        </div>
        <div style={{ width: "100%" }}>
          <textarea
            rows={rows || 5}
            placeholder="What's happening?"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              e.target.value
                ? setIsTweetDisabled(false)
                : setIsTweetDisabled(true);
            }}
          ></textarea>
          <Flex style={{ alignItems: "center", justifyContent: "flex-end" }}>
            <div>
              <label htmlFor="photo">
                <UploadButton />
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*,video/*"
                style={{ display: "none" }}
              />
            </div>
            <div>
              <Button
                disabled={isTweetDisabled}
                defaultBg={theme.defaultBg}
                darkBg={theme.darkBg}
              >
                Tweet
              </Button>
            </div>
          </Flex>
        </div>
      </Flex>
    </React.Fragment>
  );
};

export default TweetModal;
