import React from 'react';

import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { render } from 'react-dom';

class test2 extends React.Component {

    render(){
        return(<div>Drop test 2222


            <button >
                
            <Link to="/test1" className="btn btn-link">
                  Register
                </Link>
            </button>
        </div>)
        
    }

};


export default test2;