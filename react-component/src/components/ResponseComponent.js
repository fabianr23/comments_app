import React, { Component } from "react";
import { profile } from "../profile.js";

export default class ResponseForm extends Component {
  constructor(props) {
    super(props);
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
      this.setState({ error: "Escribe tu respuesta!" });
      return;
    }

    // clear error
    this.setState({ error: ""});

    console.dir(this.state);
    let { comment } = this.state;
    this.props.addComment(comment);

    // clear the message box
    this.setState({
      comment: { ...comment, message: "" }
    });
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
              placeholder="Responder a este comentario..."
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading} className="btn btn-primary">
              Responder
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}