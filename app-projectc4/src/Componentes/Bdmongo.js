import React,{ useState,useEffect } from "react"
import { Recetas } from "./Recetas"
import axios from "axios";


const Bdmongo=()=>{
    
    const [recetas,setRecetas]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/servicios/recetas')
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
                idUsuario={receta.idUsuario}
                usuario = 'Georgie'    
            />
        );
    })
    // <div>
            
    //         {todo.map(dato=>{
    //             return (
    //                 <Articulos nombre={dato.nombre} descripcion={dato.descripcion} cantidad={dato.cantidad} imagen={dato.imagen} valor={dato.valor} usuario={dato.usuario}/>
    //                 // <article className="coaster-card">
    //                 //     <h1>{eachtodo.nombre}</h1>
    //                 // </article>
    //             )
    //         })}
    //     </div>

    
    //console.log(todo)
    return(
        <div className="row">
            {mostrar}
        </div>
    )
}

export  {Bdmongo}