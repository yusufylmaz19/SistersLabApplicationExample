"use client";
import Post from "@/app/components/post";
import React, { useState } from "react";

export default function Abort() {
  const [show, setShow] = useState(false);
  const showPost = () => {
    // toggles posts onclick of button
    setShow(!show);
  };
  return (
    <div>
      <button onClick={showPost}>Show Posts</button>
      <a href="/useEffect/fetchExample">tıkla</a>
      {show && <Post />}
    </div>
  );
}
