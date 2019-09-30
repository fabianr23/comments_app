import React from "react";
import Comment from "./Comment";

export default function CommentList(props) {
  console.dir(props)
  return (
    <section className="comment-list flex-layout">

      {props.comments.length === 0 ? (
        <p className="alert-info">
          Se el primero en comentar! 
        </p>
      ) : null}

      {
        (props.comments.length > 0) ? (props.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))) : null
      }
    </section>
  );
}