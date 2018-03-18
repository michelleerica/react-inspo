import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class AuthorDetails extends Component{
  constructor(props){
    super();
    // debugger;
    this.state = {
      author: null,
      authorName: null,
      quotes: null
    }
  } //constructor


  componentDidMount(){
    const num = parseInt(this.props.match.params.author)
    const url = `/authors/${num}`
    axios.get(url)
    .then( results => this.setState(
      {authorName: results.data.name,
      author:results.data.id,
      quotes:results.data.quotes}) )


  }

  // authorInfo(){
  //   const num = parseInt(this.props.match.params.author)
  //   this.setState({
  //     author: num
  //   })
  //   // debugger;
  // }

  // quoteArray(){
  //   let quotesFull = this.state.quotes.map(function(quote){
  //
  //     return (
  //     <div>
  //       quote.contents
  //     </div>
  //
  //     )
  //   })
  // }

  render(){

    if( !this.state.quotes ){
      return <em>Loading...</em>;
    }
    // this.authorInfo();
    debugger;

    const quotes = this.state.quotes.map(quote =>  <div>{quote.contents}</div>)


    return(
      <div>{this.state.author}
      {this.state.authorName}
      {quotes}
    </div>
    )
  }

}
