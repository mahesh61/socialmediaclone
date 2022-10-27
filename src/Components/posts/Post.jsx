import React from "react";
import "./item.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useState } from "react";

const Post = (props) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(3);

  const liked = true;
  return (
    <div className="posts">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={props.item.user} alt="" />
            <div className="details">
              <Link style={{ textDecoration: "none", color: "inherit" }}>
                <span className="name">{props.item.userName}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreVertOutlinedIcon />
        </div>
        <div className="content">
          <p>{props.item.desc}</p>
          <img src={props.item.post} alt="" />
        </div>
        <div className="info">
          <div
            className="item"
            onClick={() => {
              setLike(!like);
              like ? setLikes(likes + 1) : setLikes(likes - 1);
            }}
          >
            {like ? (
              <FavoriteBorderOutlinedIcon />
            ) : (
              <FavoriteOutlinedIcon style={{ color: "#fb3958" }} />
            )}
            {likes} Likes
          </div>
          <div className="item">
            <CommentOutlinedIcon />
            15 comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
