import { Link , NavLink} from "react-router-dom" 
import CartWidget from "./CartWidget"

const Nav = ({NavInFooter,NavInHeader}) => {
    if (NavInHeader) {
        return (
            <div >
                <Link to ="/">
                    <h1 className="Titulo">Tienda de Hugo</h1>
                </Link>
                <nav >
                        <NavLink to ={NavInHeader = "/categoria/celulares"}>{NavInHeader = "celulares"}</NavLink>
                        <NavLink to ={NavInHeader = "/categoria/fotografia"}>{NavInHeader = "fotografia"}</NavLink>
                        <NavLink to ={NavInHeader = "/categoria/computadoras"}>{NavInHeader = "computadoras"}</NavLink> 
                        <CartWidget/>
                </nav>
            </div>
        )
    }  if (NavInFooter) {
        return (
            <>
            <h3>
            <a href="#">Facebok</a>
            <a href="#">Instagram</a>
            <a href="#">Linkedin</a>
            </h3>
            </> 
            )
    }  else {
        return (
            <>
            <p>Copyright</p>
            </>
        )
    }
}

export default Nav

