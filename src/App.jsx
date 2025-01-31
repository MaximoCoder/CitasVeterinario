import { useState, useEffect } from 'react';
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  // guardar como texto en localstorage
  useEffect (() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  },[pacientes]);

  const eliminarPaciente = (id) =>{
    const pacientesNuevos = pacientes.filter( paciente => paciente.id !== id );
    // guardar en el state
    setPacientes(pacientesNuevos)
  }
  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className="md:flex mt-12">
        <Formulario 
          pacientes={pacientes}
          setPacientes ={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
