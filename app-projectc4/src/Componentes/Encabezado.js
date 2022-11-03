import React,{Component} from "react";

class Encabezado extends Component{
    render() {
        return(
            <div>
                <img className= "mx-auto d-block mp-3 mt-3 mb-3" src={process.env.PUBLIC_URL+"./recursos/trueke1.png"} height="200" width="auto" alt=""/>
            </div>
        );
    }
}

export {Encabezado};