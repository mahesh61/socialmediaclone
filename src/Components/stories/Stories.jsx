import React, { useState } from "react";
import "./stories.scss";

const Stories = () => {
  const storiesList = [
    {
      name: "Mr_mark",
      img: "https://images.pexels.com/photos/4195400/pexels-photo-4195400.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: "",
    },
    {
      name: "kamsing",
      img: "https://images.pexels.com/photos/6954103/pexels-photo-6954103.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: "",
    },
    {
      name: "samking96",
      img: "https://images.pexels.com/photos/4195400/pexels-photo-4195400.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: "",
    },
    {
      name: "Alone_lover.",
      img: "https://images.pexels.com/photos/4195400/pexels-photo-4195400.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: "",
    },
    {
      name: "Bad_Boy",
      img: "https://images.pexels.com/photos/6954103/pexels-photo-6954103.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: "",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src="https://images.pexels.com/photos/3807747/pexels-photo-3807747.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <span>Its_prince</span>
        <button>+</button>
      </div>
      {storiesList.map((story) => (
        <div className="story">
          <img src={story.img} />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
