import {Link} from 'react-router-dom'
import logo from './media/v.svg'
import user from './media/login.svg'
import './styles/Navbar.css'
import Widget from './CartWidget'
function Navbar(){
    return(
        <header>
        <Link to={`/`}><img src={logo} className="logo" alt="logo"/>
        </Link>

        <nav>
            <ul>
            <li><Link to={`/productos`} className="productos">Productos</Link></li>
            <li><Link to={`/users`}><img src={user} alt="img user"/></Link></li>
            <Widget />
            </ul>
        </nav>
        

        </header>
    )
}

export default Navbar
