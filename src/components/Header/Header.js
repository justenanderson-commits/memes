import { Link } from 'react-router-dom'
import './Header.scss'


const Header = () => {
  return ( 
    <div className="header">
      <Link to="/" className="title">Memes</Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/saved-memes">Saved Memes</Link>
      </nav>
    </div>
   )
}
 
export default Header