import React from "react";
import "./nacBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social Media</span>
        </Link>
        <HomeOutlinedIcon style={{ fontSize: "32px" }} />
        <ModeNightOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      <div className="right">
        <ChatBubbleOutlineOutlinedIcon />
        <MarkunreadOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/3807747/pexels-photo-3807747.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Its_prince</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
