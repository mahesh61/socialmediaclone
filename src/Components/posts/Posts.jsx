import React from "react";
import Post from "./Post";
import "./posts.scss";

const Posts = () => {
  const Posts = [
    {
      id: 1,
      userName: "jamesMoon",
      user: "https://images.pexels.com/photos/1251848/pexels-photo-1251848.jpeg?auto=compress&cs=tinysrgb&w=600",
      post: "https://images.pexels.com/photos/3367850/pexels-photo-3367850.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Remember that happiness is a way of travel – not a destination",
    },
    {
      id: 2,
      userName: "Dilo Ki Rani",
      user: "https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=600",
      post: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "",
    },
    {
      id: 3,
      userName: "Girlyapa",
      user: "https://images.pexels.com/photos/1251850/pexels-photo-1251850.jpeg?auto=compress&cs=tinysrgb&w=600",
      post: "https://images.pexels.com/photos/1036804/pexels-photo-1036804.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "",
    },
    {
      id: 1,
      userName: "Girlyapa",
      user: "https://images.pexels.com/photos/1251850/pexels-photo-1251850.jpeg?auto=compress&cs=tinysrgb&w=600",
      post: "https://images.pexels.com/photos/3783527/pexels-photo-3783527.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "",
    },
    {
      id: 5,
      userName: "Cuddle Bear",
      user: "https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&w=600",
      post: "https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "",
    },
    {
      id: 6,
      userName: "Anonymouse",
      user: "https://images.pexels.com/photos/3466163/pexels-photo-3466163.jpeg?auto=compress&cs=tinysrgb&w=600",
      post: "https://images.pexels.com/photos/4145033/pexels-photo-4145033.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "",
    },
    {
      id: 7,
      userName: "Sparky",
      user: "https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&w=600",
      post: "https://images.pexels.com/photos/8691568/pexels-photo-8691568.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "",
    },
    {
      id: 8,
      userName: "Batman",
      user: "https://images.pexels.com/photos/3206078/pexels-photo-3206078.jpeg?auto=compress&cs=tinysrgb&w=600",
      post: "https://images.pexels.com/photos/4308102/pexels-photo-4308102.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "",
    },
    {
      id: 9,
      userName: "Gym Freak",
      user: "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600",
      post: "https://images.pexels.com/photos/4559589/pexels-photo-4559589.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "",
    },
    {
      id: 10,
      userName: "Disco Cop",
      user: "https://images.pexels.com/photos/1835016/pexels-photo-1835016.jpeg?auto=compress&cs=tinysrgb&w=600",
      post: "https://images.pexels.com/photos/4260757/pexels-photo-4260757.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "",
    },
  ];
  return (
    <div className="posts">
      {Posts.map((p) => (
        <Post item={p} key={p.id} />
      ))}
    </div>
  );
};

export default Posts;
