
function Errores({mensaje}) {
    return (
        <div>
            <div className='bg-red-100 border-l-4 border-red-500 text-red-500 py-3 px-5'>
                <p className='text-center'>{mensaje}</p>
            </div>
        </div>
    )
}

export default Errores