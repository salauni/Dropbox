import React, {Component} from 'react';
import './App.css';
import * as API from './api/API';
import ImageGridList from "./ImageGridList";
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Dropzone from 'react-dropzone';

//import React, {Component} from 'react';



import App from './App.js'
import sal2 from './sal.js'
import NewComponent1 from './sal.js'
import onClick44 from './sal'
import Button1 from './sal'
import './index.js'

/*
function Wel(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function Appi() {
    return (
      <div>
        <Wel name="Sara" />
        <Wel name="Cahal" />
        <Wel name="Edite" />


        <form action="/App">
        <div id="button"><a href="./App.js">Log In</a></div>
</form>

      </div>
    );
  }
 
  export default Appi;

*/







  
  class NewComponent extends React.Component {
    handleFileUpload = (event) => {
      
              const payload = new FormData();
      
              payload.append('FileUploaded', event.target.files[0]);
              
      
              API.uploadFile(payload)
                  .then((status) => {
                      if (status === 204) {
                          API.getImages()
                              .then((data) => {
                                  this.setState({
                                      images: data
                                      
                                  });
                              });
                      }
                  });
                  console.log("uploaded a file");
      
          };



          constructor() {
            super();
            this.state = {
                images: []
            };
        }
    
        componentDidMount() {
            API.getImages()
                .then((data) => {
                    console.log("the data is",data);
                    console.log("uploaded a file");
                    this.setState({
                        images: data
                    });
                });
        };



    render() {
      return (

        /*
        <div {...this.props}>
          new component
        </div>
        */

<div >

  
<Typography 
    align={'left'}
    type="display1"
>

     Drop Box By Salauni Patel
    <div>

      
    <Dropzone
    accept="image/png"
  >
    {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
      if (isDragActive) {
        return " authorized";
      }
      if (isDragReject) {
        return " not authorized";
        alert("uploaded a file");
      }
      return acceptedFiles.length || rejectedFiles.length
        ? `Successfully Uploaded ${acceptedFiles.length} file(s)`
        : "Drag ang drop your files!";
        <p>uploaded {acceptedFiles.length} in your DropBox</p>
       

        
    }}
  </Dropzone>
  
  </div>
</Typography>

<TextField
    className={'class="bg-primary"'}
    type="file"
    name="mypic"
    onChange={this.handleFileUpload}
/>
<ImageGridList images={this.state.images}/>


</div>
      );
    }  
  }



  
  class Button extends React.Component {


    constructor() {
      super();
      this.state = {
          username: null

      };
      this.publish=this.publish.bind(this);
      this.handleUsername=this.handleUsername.bind(this);
  }

handleUsername({target}){
  this.setState({

    [target.name]:target.value
  });
  console.log(target.name)
}


handlesub(e){
  console.log("Form Submitted");
  console.log("The Submitted username is ",this.refs.username.value);
  console.log("The Submitted password is ",this.refs.passwd.value);
  e.preventDefault();
}

publish(){
  console.log(this.state.username);
}


    render() {
      
      return (
        <div >
          
          <div id="test" >
            <h4>Login Form</h4>


            <form onSubmit={this.handlesub.bind(this)}>

            <input type="text"  name="username" ref="username" placeholder="Enter user name" style={{display:'flex',height:35, width:260}} value={this.state.username} onChange={this.handleUsername}/>
            <div>
            <input type="password"  ref="passwd" placeholder="Enter Password" style={{display:'flex',height:35, width:260}}/>
            </div>

            <div>
        <button {...this.props}>
          
          Login
        </button>
        

       

        </div>
        
</form>
        
        </div>
        </div>
      );
    }  
  }
  












 





  class App2 extends React.Component {
    constructor() {
      super();
      
      this.state = {
        clicked: false,
        
      };
      
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState({
        clicked: true
      });
    }
  
 
 
  
    

    render() {
      
      return (
        <div style={{justifyContent:'center', display:'flex'}}>
          
          <Button onClick={this.handleClick} style={{display:'flex',height:35, width:260}}/>

          {this.state.clicked ? <NewComponent /> : null}
          
          <Button1 onClick={this.handleClick44} style={{display:'flex',height:35, width:260}}/>
          {this.state.clickey ? <sal2 /> : null}

          <div>

          

          

          </div>
          
          
          
        </div>
        
      );
    }
  };

 
  //React.render( <App2 />,document.getElementById("root"));

  export default App2;
