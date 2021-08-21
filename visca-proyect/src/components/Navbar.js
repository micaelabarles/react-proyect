import logo from './media/v.svg'
import user from './media/login.svg'
import './Navbar.css'
import Widget from './CartWidget'
function Navbar(){
    return(
        <header>
        <a href="#"><img src={logo} className="logo"/>
        </a>

        <nav>
            <ul>
            <li><a href="#" className="productos">Productos</a></li>
            <li><a href="#"><img src={user}/></a></li>
             <Widget />
            </ul>
        </nav>
        

        </header>
    )
}

export default Navbar
