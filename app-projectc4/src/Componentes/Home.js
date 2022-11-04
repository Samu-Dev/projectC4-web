import React, {Component} from "react";

class Home extends Component{
    render(){
        return(
            <div className="container text-center">
                <h1 className="text-dark"> BIENVENIDOS </h1>
                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JtKUWdJgz3U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>                
            </div>
            
        )
    }
}

export {Home};