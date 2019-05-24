import React from 'react';
import './App.css';
import Posts from './pages/Posts';
import PostForm from './pages/PostForm';

import {connect} from 'react-redux';

const routesMap = {
  "POST_FORM": PostForm,
  "POSTS": Posts
}

const App = (props) => {

  console.log(props.route);
  const Component = routesMap[props.route];

  return (
    
    <Component />

  );
}

const mapStateToProps = (state) => {
  return {
    route: state.location.type
  }
}

export default connect(mapStateToProps)(App);
