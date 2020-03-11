import React,{Component} from 'react';
import './bootstrap.min.css';
import Header from './components/header';
import NuevaCita from './components/NuevaCita';
import ListaCita from './components/ListaCita';

class App extends Component {
  state = { 
      citas:[]
   }

   //cuando la aplicacion carga
   componentDidMount(){

      const citasLS = localStorage.getItem('citas');
      if (citasLS)
      {
        this.setState({
          citas: JSON.parse(citasLS)
        })
      }

   }

   //cuando eliminamos o agregamos una nueva cita

   componentDidUpdate()
   {
     localStorage.setItem('citas',JSON.stringify(this.state.citas));
   }





   CrearNuevaCita = datos =>{

    //copiar el state actual
    const citas =[...this.state.citas,datos];

    //agregar el nuevo state
    this.setState({
      citas
    })
   }

   //elima las citas del state

   EliminarCita = id =>{
     //tomar copia del state

     const citasactuales = [...this.state.citas];

     //utilizar filter para sacar el elemento @id del arreglo

      const citas = citasactuales.filter(citas=> citas.id !== id)
     //actualizar el state
     this.setState({citas})
   }




      
  render() 
  { 
    return (
        <div className="container">
          <Header
            titulo='Administrador de Pacientes de Veterinaria'
          />

          <div className="row">
              <div className="col-md-10 mx-auto">
                <NuevaCita
                CrearNuevaCita={this.CrearNuevaCita}
                />
              </div>

              <div className="mt-5 col-md-10 mx-auto">
                <ListaCita
                citas={this.state.citas}
                EliminarCita={this.EliminarCita}
                />
              </div>

          </div>
        </div>
      );
  }
}
 
export default App;


