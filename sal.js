
import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import ReactDOM from 'react-dom';

import { render } from 'react-dom';

class NewComponent1 extends React.Component {
    
      
    render() {
      return (
  
        
        <div {...this.props}>
          This is the register page

          <input type="text" placeholder="username" style={{display:'flex',height:35, width:260}}/>

          <input type="password" placeholder="password" style={{display:'flex',height:35, width:260}}/>
            <input type="text" placeholder="email" style={{display:'flex',height:35, width:260}}/>
            <input type="text" placeholder="age" style={{display:'flex',height:35, width:260}}/>
            <input type="text" placeholder="Interests" style={{display:'flex',height:35, width:260}}/>
        </div>)}};





class Button1 extends React.Component {
    render() {
      
      return (
        <div >
          <div id="test" >
            
          <h4>Register</h4>
            <button {...this.props}>
          
          Register
        </button>
            
        </div>
        </div>
      );
    }  
  }






  class sal2 extends React.Component {
    constructor() {
      super();
      
      this.state = {
        clicked: false
      };
      
      this.handleClick44 = this.handleClick44.bind(this);
    }
    
    handleClick44() {
        this.setState({
          clickey: true
        });
      }
    
    render() {
      return (
        <div style={{justifyContent:'center', display:'flex'}}>
          
          
          

         
        </div>
      );
    }
  };


  export default sal2;

  





