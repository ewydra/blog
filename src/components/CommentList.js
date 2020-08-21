import React from "react";

export default function CommentList({ commentList }) {
  return (
    commentList.map(({ id, title, text }) => (
      <div className="comment__wrapper" key={id}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    ))
  )
}
