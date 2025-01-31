import Paciente from './Paciente'
function ListadoPacientes({ pacientes , setPaciente, eliminarPaciente }) {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? 
        (
          <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-lg text-center mt-2 mb-10">
              Administra tus {''}
              <span className="text-green-600 font-bold">Pacientes y Citas</span>
            </p>
            {pacientes.map(paciente => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))
            }
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-lg text-center mt-2 mb-10">
              Comienza agregando pacientes {''}
              <span className="text-green-600 font-bold">y apareceran en este lugar.</span>
            </p>
          </>
        )
      }
    </div>
  )
}

export default ListadoPacientes