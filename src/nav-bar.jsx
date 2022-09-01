import { Link } from "react-router-dom";

const Navbar = () => {
  
return(
<div className='bg-primary text-dark text-lg pr-5' >
   <ul className="flex flex-row gap-2 justify-end">
    <li className="p-5 hover:scale-105 hover:duration-75 hover:underline hover:underline-offset-8" ><Link to="/">Home</Link></li>
    <li className="p-5 hover:scale-105 hover:duration-75 hover:underline hover:underline-offset-8" ><Link to="/aboutme">About Me</Link></li>
    <li className="p-5 hover:scale-105 hover:duration-75 hover:underline hover:underline-offset-8" ><Link to="/contactme">Contact Me</Link></li>
    <li className="p-5 hover:scale-105 hover:duration-75 hover:underline hover:underline-offset-8" ><Link to="/briefcase">Briefcase</Link></li>
   </ul>
</div>
)
};


export default Navbar