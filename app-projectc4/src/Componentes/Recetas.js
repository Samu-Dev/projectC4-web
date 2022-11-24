import React from "react";
import axios from "axios";

class Recetas extends React.Component {
    constructor() {
        super();
        
        this.state = {
            nombre: "",
            categoria: "",
            // usuario: "",
            ingredientes: "",
            porciones: 1,
            instrucciones: "",
            imagen: "",            
            idUsuario: "123456789",
        }
    }
    
    cambio = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        console.log(this.state)        
        this.setState({ [nam]: val });        
    }

    // editar = () => {
    //     let id = this.props.id
    //     axios.post(`http://localhost:5000/servicios/actualizar/${id}`)
    // }

    eliminar = (e) => {
        let direccion = `http://localhost:5000/servicios/borrar/${e.target.name}` 
        axios.get(direccion)
            .then(dato => console.log("borrado " + e.target.name))
            .catch(e => ({e}));
        window.location.reload(false)  
    }

    render() {

        return (
            
            <div className="col-sm-4 text-center mt-4">
                <div className="card border-primary mb-3 p-2 mx-auto" style={{ "width": "25rem" }}>
                    <div className="card-body">
                        <img className="card-img-top" height="200" width="auto" src={process.env.PUBLIC_URL + this.props.imagen} alt=""></img>
                        <h5 className="card-title text-dark mt-3">{this.props.nombre}</h5>
                        <span className="badge bg-danger rounded-pill">Categoría: {this.props.categoria}</span>
                        <br />
                        <span className="badge bg-success rounded-pill">Usuario: {this.props.usuario}</span>
                        <br />
                        <span className="badge bg-primary rounded-pill">Porciones: {this.props.porciones}</span>
                        <br />

                        <button className="btn btn-primary border mx-auto me-2 mt-1" data-bs-toggle="modal" data-bs-target={"#editar_cuadro" + this.props.id} >Editar</button>
                        <button className="btn btn-danger border mx-auto mt-1 me-2" data-bs-toggle="modal" data-bs-target={"#receta" + this.props.id}>Eliminar</button>
                    </div>
                </div>


                {/* Editar */}
                <div className="modal fade" id={"editar_cuadro" + this.props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Editar Receta</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p className="text-dark">{this.props.id}</p>
                                <form>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label text-dark text-start">Titulo Receta</label>
                                        <input type="text" className="form-control" id="recipient-name" name="nombre" defaultValue={this.props.nombre} onChange={this.cambio}/>
                                    </div>;
                                    <div className="mb-1">
                                        <label htmlFor="message-text" className="col-form-label text-dark text-st" >Ingredientes</label>
                                        <textarea className="form-control" id="message-text" name="ingredientes" defaultValue={this.props.ingredientes} onChange={this.cambio}></textarea>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label text-dark text-start" >Categoría</label>
                                        <div className="form-group">
                                            <select className="form-control" name="categoria" defaultValue={this.props.categoria} onChange={this.cambio}>
                                                <option>Entrada</option>
                                                <option>Plato Fuerte</option>
                                                <option>Postre</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label text-dark text-start" >Porciones</label>
                                        <input type="number" className="form-control" id="recipient-name" name='porciones' defaultValue={this.props.porciones} onChange={this.cambio}/>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="message-text" className="col-form-label text-dark text-st" >Instrucciones</label>
                                        <textarea className="form-control" id="message-text" name="instrucciones" defaultValue={this.props.instrucciones} onChange={this.cambio}></textarea>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label text-dark text-start">URL Imagen</label>
                                        <input type="text" className="form-control" id="recipient-name" name='imagen' defaultValue={this.props.imagen} onChange={this.cambio}/>
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-success" name={this.props.id} onClick={this.editar}>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Eliminar */}
                <div className="modal fade" id={"receta" + this.props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Eliminar</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-dark">
                                Desea eliminar la receta {this.props.nombre}, serial: {this.props.id}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-danger" onClick={this.eliminar} name={this.props.id} data-nombre={this.props.nombre} >Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>



        );
    }

}

export { Recetas };