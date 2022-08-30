import { useState, useEffect } from 'react'
import Navbar from "./nav-bar";
import OtroComponente from "./OtroComponente";

function Home() {
// estado de la home
// contador
// variable dentro de un Componente es un estado...#
    const [contador, setContador] = useState(10); // tipo es heredado
    // vos podes hacer tus proprio hooks.....
    const [reset, setReset] = useState(false);// de entrada es false
    const [modal, setModal] = useState(false);
    // flags, banderines check
    

    const handleIncrement = () => {
        // logica
        setContador(c => c + 1) // mejor forma de hacer un cambio del estado
    }

    // const modalDiv = document.getElementById('modal');
    // modalDiv.attributes()


    const handleReset = () =>{
        setReset(true)
    }
    
    const handleModal = () => {
        setModal(!modal)
    } 
    
    useEffect(() => {
        if(reset) {
            setContador(0)// hace esto 
            setReset(false)// volve a como estaba
        }
    }, [reset]);


    useEffect(() => {
        // se va a hacer esto 
        // meter logica
        if(contador > 20) {
            setContador(10)
        }

    }, [contador])

// abris url => (index => app => home) => (aboutme)
    useEffect(() => {
        setContador(5)
        // por unica vez al cargar el componente Home
        // const cotizacion = await fetch('urlbitcoin');

        // return () => {
        //     // antes de que se vaya del componente Home
        //     // cancelame el fetch
        //     cotizacion = null;
        // }
    }, [])

    return (<>
        <Navbar />
        <div>
            contador actual: {contador}


            <OtroComponente handleIncrement={handleIncrement} contador={contador}/>

            <button className='p-1 rounded-lg text-white ml-2 bg-gray-800' onClick={handleModal}>
                Open Modal
            </button>
                    
        </div>
        <div className={`${modal ? 'flex' : ' hidden' } w-1/2 h-1/3 bg-red-500 text-white`} >
            ESTE ES UN MODAL
        </div>
    </>)
}

export default Home;
