import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Quotes from './Quotes'


export default class HomePage extends Component{


  render(){

    return(
      <div>
        <h1> Quote </h1>
        <div><Quotes/></div>
        {/* <div>{quote[1]}</div> */}
        {/* <div>{quote[0]}</div> */}

      </div>
    )



  }
}
