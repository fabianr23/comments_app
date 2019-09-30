import React, { Component } from "react";
import { profile } from "../profile.js";
import ResponseComment from "./ResponseComment";
import ResponseForm from "./ResponseComponent";

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      likes : 2
    };
    this.addComment = this.addComment.bind(this);
    this.addLike = this.addLike.bind(this);
  }

  addComment(comment) {
    console.dir(this.state)
    this.state.response.push(comment);
    this.setState({
      response: this.state.response
    });
  }

  addLike(){
    this.state.likes += 1;
    this.setState({
      likes: this.state.likes
    });
  }
  
  render() {
    return (
      <article className="comment-card white-container flex-layout">
        <figure className = "profile-pic">
          <img
            className="rounded"
            src={`https://icon-library.net/images/no-profile-pic-icon/no-profile-pic-icon-12.jpg`}
            alt={this.props.comment.name}
          />
        </figure>

        <div className="profile-info">
        <h2 className="title">{this.props.comment.name}</h2>
          <small className="time-publish">time</small>
          <p>{this.props.comment.message}</p>
        </div>
        <section className="responses">
          <div className="counter-response">
            <div className="likes-container flex-layout">
              <button onClick={this.addLike} aria-label="click to add a like"></button>
              <span className="count-likes"> {this.state.likes} </span>
            </div>
            <span className="counter">{this.state.response.length}</span>{" "}
            Comentario{this.state.response.length > 1 ? "s" : ""}
          </div>
          {
           (this.state.response.length > 0) ? (this.state.response.map((response, index) => (
              <ResponseComment key={index} response={response} />
            ))) : null
          }
          <section className="response-form message-box">
            <ResponseForm addComment={this.addComment}/>
          </section>
        </section>
      </article>
    );
  }
}