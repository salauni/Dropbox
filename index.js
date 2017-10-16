
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './index.css';
//import App from './App';
//import Appi from './home';
import App2 from './home';
import sal2 from './sal';


//import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';
// Import custom components

import Car from './car.component.jsx'



import registerServiceWorker from './registerServiceWorker';



//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Appi />, document.getElementById('root'));

//ReactDOM.render(<App2 />, document.getElementById('root'));

registerServiceWorker();





/*

import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm/LoginForm';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <LoginForm />
  </Provider>,
  document.getElementById('root')
);
*/



/*

render(
    <Router >
        
        <Route path="/" component={Car}/>
        
    </Router>,
    document.getElementById('root')
);
*/

ReactDOM.render(
  

  <HashRouter>
    
<Route path="/" component={App2}/>



    </HashRouter>,
 document.getElementById('root')   
);

