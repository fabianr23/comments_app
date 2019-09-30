import React, { Component } from "react";
import { profile } from "../profile.js";

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
      error: "",

      comment: {
        name: profile.name + " " + profile.last_name,
        message: ""
      }
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  /**
   * Form submit handler
   */
  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "Primero escribe un mensaje!" });
      return;
    }

    // clear error
    this.setState({ error: ""});

    // persist the comments on server
    console.dir(this.state);
    let { comment } = this.state;
    // fetch("http://localhost:7777", {
    //   method: "post",
    //   body: JSON.stringify(comment)
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     if (res.error) {
    //       this.setState({ loading: false, error: res.error });
    //     } else {
          // add time return from api and push comment to parent state
          //comment.time = res.time;
          this.props.addComment(comment);

          // clear the message box
          this.setState({
            comment: { ...comment, message: "" }
          });

          console.dir(this.state)
      //   }
      // })
      // .catch(err => {
      //   this.setState({
      //     error: "Something went wrong while submitting form.",
      //     loading: false
      //   });
      // });
  }

  /**
   * Simple validation
   */
  isFormValid() {
    return this.state.comment.message !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>

          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder="Escribe aqui tu estado"
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading} className="btn btn-primary">
              Publicar
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}