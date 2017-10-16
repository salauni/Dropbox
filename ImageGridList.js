import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {GridList, GridListTile} from 'material-ui/GridList';

const styles = theme => ({
    root: {
        
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'scroll',
        background: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 300,
    },
    subheader: {
        width: '10%',
    },
});

class ImageGridList extends Component {

    

    static propTypes = {
        classes: PropTypes.object.isRequired,
        images: PropTypes.array.isRequired
    };

     myclick() {
        alert("User Activity Log: Uploaded 2 file successfully");
        alert.ImageGridList;
        
       
    }

    render(){

        

        const classes = this.props;

        return (

            
            <div className={classes.root}>
                <button onClick={this.myclick}>Recent Activity</button>
                    

                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue-grey.css"/>
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                    

                    

<div class="w3-card-2 w3-round">
                  
        <div class="w3-white">
                        
          
        <button onclick="myFunction('Demo2')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Files</button>
        
        <button onclick={this.myclick} class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-calendar-check-o fa-fw w3-margin-right"></i> Activity log</button>
        
        <button onclick="myFunction('Demo3')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-users fa-fw w3-margin-right"></i> My groups</button>
           
           
            <div id="Demo3" class="w3-hide w3-container">
         
         <div class="w3-row-padding">


        <div className={"w3-card-2 w3-round w3-gray"}>
                <div className={"w3-container"}>
                     

                           

                            <div>

                            
                            
                            <p><i className={"fa fa-dropbox fa-fw w3-card-right w3-card-4"}></i>My Profile</p>
                            
                            
                                <p className={"w3-centre"}><img src={require('./profpic.jpg')} class={"w-circle"} styles={"height:1px;width:1px"} alt={"Avatar"}/></p>
                            
                            <p><i className={"fa fa-pencil fa-fw w3-margin-right w3-text-theme"}></i>Salauni Patel</p>
                            <p><i className={"fa fa-pencil fa-fw w3-margin-right w3-text-theme"}></i>Software Engineer</p>
                            <p><i className={"fa fa-pencil fa-fw w3-margin-right w3-text-theme"}></i>salauni@gmail.com</p>
                            <p><i className={"fa fa-home fa-fw w3-margin-right w3-text-theme"}></i> California, USA</p>
                            <p><i className={"fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"}></i> February 2, 1995</p>

                            <p><i className={"fa  fa-fw w3-margin-centre w3-text-theme"}></i> ..........All Uploaded Files.......... </p>

                            

                            </div>
                </div>
        </div>



         <GridList cellHeight={110} className={classes.gridList} cols={4}>
                        {this.props.images.map(tile => (
                            <GridListTile key={tile.img} cols={1}>
                                Uploaded File on Date{Date.now()}
                                <img src={'http://localhost:3001/'+tile} alt={'Uploaded on'+Date.now()}/>
                                
                            </GridListTile>
                        ))}
                    </GridList>

         
        
          
          </div>
          </div>
        </div>      
      </div>

      

                    
            </div>

            
        );
    }


}


export default withStyles(styles)(ImageGridList);