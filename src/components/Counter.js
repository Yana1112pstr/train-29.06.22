import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";

const Counter = () => {
  const [likes, setLikes] = useState(0);

  function onIncrement() {
    setLikes(likes + 1);
  }

  function onDecrement() {
    setLikes(likes - 1);
  }
  return (<div className="counter">
    <MyButton onClick={onDecrement}>Decrement</MyButton>
    <span style={{ padding: '10px' }}>{likes}</span>
    <MyButton onClick={onIncrement}>Increment</MyButton>
  </div>)
}

export default Counter;