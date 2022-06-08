import React from "react";
import "./Comments.scss";

export function CommentsLinks() {
  return (
    <>
      <div className="comments-block">
          <div className="comments-title" >Shortcut links</div>
        <ul className="comments-list comments-text">
            <li> <a className="comments-text" href="#/" >Velit mauris venenatis neque</a> </li>
            <li> <a className="comments-text" href="#/" >Entum feuis velit sed venenatis</a> </li>
            <li> <a className="comments-text" href="#/" >Aliquam massa vitae fini</a> </li>
            <li> <a className="comments-text" href="#/" >Egestas quam neque ut</a> </li>
        </ul>
      </div>
    </>
  );
}
