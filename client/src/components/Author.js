import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Author extends Component{
  constructor(props){
    super(props);

    this.state = {
      author: props.authorName,
      fullName: null
    }
  }

  componentDidMount(){
    // debugger;
    const url = `/authors/${this.props.authorName}`
    axios.get(url)
    .then( results => this.setState({fullName: results.data.name}) )
    // debugger;
  }


  render(){

    if( !this.state.fullName ){
      return <em>Loading...</em>;
    }

    return <div>{this.state.fullName}</div>
  }
} // export
