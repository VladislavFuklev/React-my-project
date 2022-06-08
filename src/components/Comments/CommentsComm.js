import React from "react";
import "./Comments.scss";

export function CommentsComm() {
  return (
    <>
      <div className="comments-block">
        <div className="comments-title">Latest comments</div>

        <div className="comments-placeholder" >December 31, 2014</div>
        <div className="comments-text">
          <span>Sara</span> commented on Proin dui sodales imperdi sit
        </div>
        <div className="comments-placeholder" >December 31, 2014</div>
        <div className="comments-text">
          <span>Mark</span> commented on Proin dui sodales imperdi sit
        </div>
      </div>
    </>
  );
}
