import React, { Component } from 'react'

class CommentBox extends Component {

  state = {
    comment: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      comment: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          cols="30"
          rows="10"
          name='comment'
          value={this.state.comment}
          onChange={this.handleChange}
        ></textarea>
        <div>
          <button type='submit'>Submit a comment</button>
        </div>
      </form>

    )
  }
}

export default CommentBox;
