import React, { Component } from 'react';
import {
  Container,
  Header,
  Button,
  Loader
} from 'semantic-ui-react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getPostData, setLoading } from '../actions/index'
import { withRouter } from 'react-router-dom';

class Posts extends Component {

  constructor(props) {
    super(props)
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData = () => {
    this.props.setLoading()
    this.props.getPostData()
  }

  render() {
    console.log("Props", this.props);
    return (
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Semantic UI Loading indicator using reducers</Header>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>
          A text container is used for the main container, which is useful for single column layouts.
                </p>
        <Button primary onClick={this.fetchData}>Fetch</Button>
        <br />
        <br />
        {this.props.loading === true ? <Loader active inline='centered' /> : ''}
        {this.props && this.props.postlist && this.props.postlist.slice(0,10).map((item, i) =>
          <li key={i}>{item.title}</li>
        )}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPostData,
    setLoading
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts))
