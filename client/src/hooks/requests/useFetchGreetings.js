import React, { useEffect, useState } from "react";

const useTestBackend = () => {
  const [greetings, setGreetings] = useState("");
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((res) => setGreetings(res.message));
  }, []);
  return { greetings };
};

export default useTestBackend;
