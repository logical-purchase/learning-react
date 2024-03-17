import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "ddlltt151",
    name: "David Samarripa",
    isFollowing: false,
  },
  {
    userName: "logical-purchase",
    name: "logical-purchase",
    isFollowing: true,
  },
  {
    userName: "elonmusk",
    name: "Elon Musk",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
