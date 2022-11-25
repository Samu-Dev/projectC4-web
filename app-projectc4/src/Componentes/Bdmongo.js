import React,{ useState,useEffect } from "react"
import { Recetas } from "./Recetas"
import axios from "axios";


const Bdmongo=()=>{
    
    const [recetas,setRecetas]=useState([])
    useEffect(()=>{
        axios.get('https://code-kitchen.onrender.com/recetas')
            .then(res=>setRecetas(res.data))
            .catch(e => ({e}))
    })
    
    let mostrar=recetas.map((receta)=>{
        return(
            <Recetas 
                key={String(receta._id)}
                id = {String(receta._id)}
                nombre={receta.nombre} 
                categoria={receta.categoria} 
                ingredientes={receta.ingredientes} 
                imagen={receta.imagen} 
                porciones={receta.porciones}
                instrucciones={receta.instrucciones}
                idUsuario={window.localStorage.getItem('id')}
                usuario = {window.localStorage.getItem('nombres')}    
            />
        );
    })
    
    return(
        <div className="row">
            {mostrar}
        </div>
    )
}

export  {Bdmongo}