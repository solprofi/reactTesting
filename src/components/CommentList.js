import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments = () => (
    this.props.comments.map((comment, index) => (
      <li key={index}>
        {comment}
      </li>
    ))
  );

  render() {
    return (
      <div>
        <h3>Comment List</h3>
        {this.renderComments()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);
