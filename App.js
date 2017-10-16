import React, {Component} from 'react';
import './App.css';
import * as API from './api/API';
import ImageGridList from "./ImageGridList";
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';



class App extends Component {

    handleFileUpload = (event) => {

        const payload = new FormData();

        payload.append('mypic', event.target.files[0]);
        

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
            <div >
                <Typography 
                    align={'left'}
                    type="display1"
                >
                
                     Drop Box By Salauni Patel
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

export default App;
