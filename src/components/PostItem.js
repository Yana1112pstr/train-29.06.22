import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

  // const {id, name, description} = props;

  return (
    <li className="post">
      <div className="post__content">
        <h2>{props.number}.{props.props.name}</h2>
        <p>{props.props.description}</p>
      </div>

      <div>
        <MyButton onClick={() => props.remove(props.props)}>
          Delete
        </MyButton>
      </div>
    </li>
  )

}

export default PostItem;

