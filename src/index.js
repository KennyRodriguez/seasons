import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './loader.js'
class App extends React.Component{
   
    state = {lat:null, errMsg: ''};

    componentDidMount(){
        //it is reccomended to load data in compdidmount b/c it allows us to spread it out
        //this code is clearer
       window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({lat : position.coords.latitude}),
        (err) => this.setState({errMsg:err.message})
        );
    }
   
    renderContent(){
        if(this.state.errMsg && !this.state.lat)  
        {
            return <div> Error: {this.state.errMsg}</div>
        }
        if(!this.state.errMsg && this.state.lat)
        {
            return (
            <div>
            <SeasonDisplay 
            lat = {this.state.lat}/>
            </div>
                );
        }
        else
        {
            return <div><Loader message = "Waiting..." /></div>
        }

    }

    render(){
       return (
            <div className = "border red">{this.renderContent()}</div>
       );
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));


//for example, make an api that lists cool shit to do today based on ur location / 
//an api is just a tool to transmit data
//api w/ anime reccomendations

































