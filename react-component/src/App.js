import React, { Component } from "react";
import { profile } from "./profile.js";
import './App.scss';
import CommentList from "./components/CommentList";
import CommentForm from "./components/FormComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //comments: []
      comments: [{'name': 'Siberian', 'message': 'Comment by default ...'}]
    };

    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments
    });
  }

  componentDidMount() {

    // get all the comments -- used to do the load from an API
    // fetch("http://localhost:7777")
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       comments: res
    //     });
    //   })
    //   .catch(err => {
    //   });
  }

  render() {
    return (
      <main className="App container">
        <header className="App-header">
          <h1 className="App-title">
            Domicilios Test
          </h1>
          <span className="hello-user">
            Hola {profile.name}!
          </span>
        </header>

        <section className="row container-comments">
          <aside className="message-box white-container">
            <CommentForm addComment={this.addComment}/>
            {/* Comment Form Component */}
          </aside>
          <section className="container-list">
            <CommentList
              comments={this.state.comments}
            />
            {/* Comment List Component */}
          </section>
        </section>
      </main>
    );
  }
}

export default App;