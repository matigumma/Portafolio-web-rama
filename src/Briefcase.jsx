import css from './img/css-3.png'
import js from './img/js.png'
import html from './img/html5.png'
import react from './img/react.png'
import github from './img/github.png'
import git from './img/git.png'
import tailwind from './img/Tailwind.png'
function Briefcase() {

    return (
        <>
            <h1 className="text-center text-xl name bg-primary p-5 ">Hello i'm Ramiro Gumma Fronted Developer</h1>
                <div className="bg-dark p-20 text-white">
                     <div className="grid grid-cols-2 gap-x-96">
                        <div>Lenguages <span className="text-secondary">|knowledge</span></div>                       
                        <div>Herramientas <span className="text-secondary">|Tools</span></div>
                      </div>           
                                          
                        <div className="grid grid-cols-2 gap-x-96 mt-10">
                            <div className="grid grid-cols-3 gap-5">
                                <div><img className="w-20 h-20" src={css} alt="" />
                                    <h3>css</h3>
                                </div>
                                <div><img className="w-20 h-20" src={js} alt="" />
                                    <h3>Javascript</h3>
                                </div>
                                <div><img className="w-20 h-20" src={html} alt="" />
                                    <h3>Html</h3>
                                </div>
                               <div><img className="w-20 h-20" src={react} alt="" />
                                    <h3>React</h3>
                                </div> 
                            </div> 

                            <div className="grid grid-cols-3 gap-5">
                                <img className="w-20 h-20" src={github} alt="" />
                                <img className="w-20 h-20" src={git} alt="" />
                                <img className="w-20 h-20" src={tailwind} alt="" />
                            </div>
                      </div>
                     
                       
                </div>     

        </>
    )
}

export default Briefcase;
