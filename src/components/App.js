import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends Component {
  renderAuthButton = () => {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sing Out</ button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sing In</ button>
      );
    }
  }

  renderHeader = () => (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post a Comment</Link>
        </li>
        <li>
          {this.renderAuthButton()}
        </li>
      </ul>
    </nav>
  );

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox} />
        <Route exact path='/' component={CommentList} />
      </div >
    );
  }

}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, actions)(App);