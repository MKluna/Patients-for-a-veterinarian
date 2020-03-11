import React, { Component } from 'react';
import uuid from 'uuid';
import PropType from 'prop-types';

const stateinicial ={
    cita:{
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    },error:false
}


class NuevaCita extends Component {
    state = {...stateinicial }

     //Cuando el usuario escribe en los inputs

     handleChange =  e =>{

        //Target.name es en que input esta escribiendo
        //Target.value es saber que esta escribiendo ._.xd
         console.log(e.target.name+': '+e.target.value);

         //capturar lo que el usuario escribe y ponerlo en el state

         this.setState({

            cita : {
                ...this.state.cita,
                [e.target.name]:e.target.value
            }

         })
     }


     //cuando el usuario envia el formulario

     handleSubmit=e=>{
         e.preventDefault();

         //extraer los valores del state
         const{mascota,propietario,fecha,hora,sintomas}=this.state.cita;
         //validar que todo este lleno
         

         if(mascota===''|| propietario===''||fecha===''||hora===''||sintomas==='')
         {
            this.setState({
                error:true
            });
            //detener el codigo
            return;
         }
         //generar objeto con datos

         const NuevaCita={...this.state.cita}
         NuevaCita.id = uuid();

         //agregar la cita al state de app

         this.props.CrearNuevaCita(NuevaCita);


        //colocar en el state el state incial

        this.setState({
            ...stateinicial
        })


     }





    render() { 

        //extraer el valor del state

        const { error }=this.state;



        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        LLena el formulario para crear una nueva cita
                    </h2>


                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}



                    <form
                    onSubmit={this.handleSubmit}
                    
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    id="mascota"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de la Mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div> {/*Aqui Cierra el form-group*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre del Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño Mascot"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div> {/*Aqui Cierra el form-group*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div> {/*Aqui Cierra el form-group*/}
                        
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">

                                <textarea 
                                className="form-control"
                                name="sintomas"
                                placeholder="Describa los sintomas"
                                onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                ></textarea>        
                            </div>
                        </div> {/*Aqui Cierra el form-group*/}

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita"/>

                    </form>

                </div>
            </div>
         );
    }
}

NuevaCita.PropType={
    CrearNuevaCita: PropType.func.isRequired
}
 
export default NuevaCita;