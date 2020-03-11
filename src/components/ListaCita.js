import React from 'react';
import Cita from './Cita';
import PropType from 'prop-types';

const ListaCita = ({citas,EliminarCita}) => {
    
    //Imprimir mensaje en base si hay o no citas

    const mensaje = Object.keys(citas).length===0 ? 'No Hay Citas' : 'Administra Las citas Aqui';
    
    
    
    
    return(
        
            <div className="card mt-2 py-5">
                <div className="card-body">
    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-citas">
                        {citas.map(cita=>(
                            <Cita
                            key={cita.id}
                            cita={cita}
                            EliminarCita={EliminarCita}
                            />
                        ))}
                    </div>
                </div>
            </div> 
    )
}

ListaCita.prototype={
    cita: PropType.array.isRequired,
    EliminarCita: PropType.func.isRequired
}
 
export default ListaCita;
