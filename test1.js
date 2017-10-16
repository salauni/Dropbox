import React from 'react';

import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { render } from 'react-dom';

class test1 extends React.Component {

    render(){
        return(<div>Drop test 1111


            <button >
                
            <Link to="/test2" className="btn btn-link">
                  Register
                </Link>
            </button>
        </div>)
        
    }

};


export default test1;