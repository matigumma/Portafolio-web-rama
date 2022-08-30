function OtroComponente({handleIncrement, contador}) {
// idependencia de uso...
    return (
        <>
            <button className='p-1 rounded-lg text-white ml-2 bg-gray-800 'onClick={handleIncrement}>
                incrementar contador 2
            </button>
            {contador === 13 && <div className="bg-blue-500 h-10 w-10 inline-block" />}
        </>
    )
}

export default OtroComponente
