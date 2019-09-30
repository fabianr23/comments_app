import React from "react";

export default function ResponseComment(props) {
  const { name, message, time } = props.response;
  
  return (
    <section className="response-card flex-layout">
     <figure className = "profile-pic">
        <img
          className="rounded"
          src={`https://icon-library.net/images/no-profile-pic-icon/no-profile-pic-icon-12.jpg`}
          alt={name}
        />
      </figure>
      <article className="response-info">
        <div className="message-response flex-layout">
    	    <h2 className="title">{name}</h2>
          <p>{message}</p>
        </div>
  	    <small className="time-publish">time</small>
      </article>
    </section>
  );
}