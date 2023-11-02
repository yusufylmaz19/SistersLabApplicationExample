"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <div>{count} defa render oldum</div>;
}
