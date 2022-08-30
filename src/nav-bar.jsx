import { Link } from "react-router-dom";

const Navbar = () => {
  
return(
<div className='bg-slate-700 text-black text-xl' >
   <ul className="flex flex-row gap-2 justify-end">
    <li className=" bg-slate-700 text-white rounded-xl" ><Link className="p-5  hover:scale-105 duration-75 " to="#">Home</Link></li>
    <li className="p-5 bg-slate-700 text-white hover:scale-105 duration-75 rounded-xl" ><Link to="#">About Me</Link></li>
    <li className="p-5 bg-slate-700 text-white hover:scale-105 duration-75 rounded-xl" ><Link to="#">Contact Me</Link></li>
    <li className="p-5 bg-slate-700 text-white hover:scale-105 duration-75 rounded-xl" ><Link to="/briefcase">Briefcase</Link></li>
   </ul>
</div>
)
};


export default Navbar