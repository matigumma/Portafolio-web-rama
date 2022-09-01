import css from './img/css-3.png'
import js from './img/js.png'
import html from './img/html5.png'
import react from './img/react.png'
import github from './img/github.png'
import git from './img/git.png'
import tailwind from './img/Tailwind.png'
import devops from './img/DevOps News 1.png'
import appproduct from './img/appproduct.png'
import Navbar from './nav-bar'
function Briefcase() {

    return (
        <>
        <Navbar />
        
            <h1 className="text-center text-ligth text-xl name bg-primary p-5 bgh1 p-10 ">Hello i'm <span className='italic text-info'>Ramiro Gumma</span> Fronted Developer</h1>
                <div className="bg-dark p-20 text-white">
                     <div className="grid grid-cols-2 gap-x-96">
                        <div>Lenguages <span className="text-secondary">|knowledge</span></div>                       
                        <div>Herramientas <span className="text-secondary">|Tools</span></div>
                      </div>           
                                          
                        <div className="grid grid-cols-2 gap-x-96 mt-10">
                            <div className="grid grid-cols-3 gap-5">
                                <div><img className="w-20 h-20 hover:scale-125 duration-75" src={css} alt="" />
                                    <h3>Css</h3>
                                </div>
                                <div><img className="w-20 h-20 hover:scale-125 duration-75" src={js} alt="" />
                                    <h3>Javascript</h3>
                                </div>
                                <div><img className="w-20 h-20 hover:scale-125 duration-75" src={html} alt="" />
                                    <h3>Html</h3>
                                </div>
                               <div><img className="w-20 h-20 hover:scale-125 duration-75" src={react} alt="" />
                                    <h3>React</h3>
                                </div> 
                            </div> 

                            <div className="grid grid-cols-3 gap-5">
                                <div><img className="w-20 h-20 hover:scale-125 duration-75" src={github} alt="" />
                                    <h3>GitHub</h3>
                                </div>
                                <div><img className="w-20 h-20 hover:scale-125 duration-75" src={git} alt="" />
                                    <h3>Git</h3>
                                </div>
                                <div><img className="w-20 h-20 hover:scale-125 duration-75" src={tailwind} alt="" />
                                    <h3>Tailwind</h3>
                                </div>
                            </div>
                      </div>
                     
                       
                </div>  
                
        {/* PRYECTOS */}

           <div className='bg-dark'><h2 className='text-center text-xl text-white bg-primary w-11/12 m-auto rounded-lg '>Proyectos <span className='text-secondary'>| Experience</span></h2></div> 
            <div className= 'grid bg-dark grid-cols-2 gap-5 pt-5 '>
                 {/* DevOps News */}
                <div>
                    <img className='border-solid border-ligth border-2 m-auto w-4/5 cursor-pointer hover:scale-105 duration-75' src={devops} alt="" />
                </div>
                {/* App Product */}
                <div>
                    <img className='border-solid border-ligth border-2 m-auto w-4/5 cursor-pointer hover:scale-105 duration-75' src={appproduct} alt="" />
                </div>

            </div>
        </>
    )
}

export default Briefcase;
