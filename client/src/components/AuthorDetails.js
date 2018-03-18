import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class AuthorDetails extends Component{
  constructor(props){
    super();
    // debugger;
    this.state = {
      author: this.props
    }
  } //constructor

  render(){

    if( !this.state ){
      return <em>Loading...</em>;
    }
    // debugger;
    return(
      <div>{this.props.match.params.author}</div>
    )
  }

}
