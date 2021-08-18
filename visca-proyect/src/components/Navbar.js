import logo from './v.svg'
import cart from './shopping-cart.svg'
import user from './login.svg'
import './Navbar.css'
function Navbar(){
    return(
        <header>
        <a href="#"><img src={logo} className="logo"/>
        </a>

        <nav>
            <ul>
            <li><a href="#" className="productos">Productos</a></li>
            <li><a href="#"><img src={user}/></a></li>
            <li><a href="#"><img src={cart}/></a></li>
            </ul>
        </nav>
        

        </header>
    )
}

export default Navbar
