import React, {Component} from "react";

class Home extends Component{
    render(){
        return(
            <div className="container text-center">
                <div className="home">
                    <img src="https://raw.githubusercontent.com/Samu-Dev/projectC4-web/main/IMAGENES/recursos/Portada%20Para%20Facebook.jpg" class="img-fluid" alt=""/>
                    {/* <iframe width="720" height="480" src="https://www.youtube.com/embed/JtKUWdJgz3U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                </div>                
            </div>
            
        )
    }
}

export {Home};