import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Author from './Author'

export default class Quotes extends Component{
  constructor(props){
    super(props);

    this.state = {
      quotes: null
    }
  }

  componentDidMount() {
    axios.get('/quotes')
    .then( results => this.setState({quotes: results.data}) )
    // .then( results => console.log(results.data))
    .catch( console.error );
    // debugger;
  }


  quoteArray(){
    const quotesFull = this.state.quotes.map(function(quote){

      const quoteWords = quote.contents
      const author_id = quote.author_id

      return [quoteWords, author_id]
    })

    const index = Math.floor(Math.random()*quotesFull.length)
    console.log(index);
    console.log(quotesFull[index]);

    return quotesFull[index]
  }


  render(){
    if( !this.state.quotes ){
      return <em>Loading...</em>;
    }


    const quote = this.quoteArray()
    const author = quote[1]
    const authorURL = `/author/${author}`

    return(
      <div>

        <div>{quote[0]}</div>
        <Link to= {
          {
            pathname: authorURL
          }
          }>
          <div><Author authorName={author}/></div>
        </Link>


      </div>
    )



  }
}
