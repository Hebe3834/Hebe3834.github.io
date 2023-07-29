import "../styles/header.scss";
import "../styles/globals.scss";
import {Link} from 'react-router-dom';
import HB from '../assets/butterfly.png';

const Header = () => {
    return (<>
        <header>
            <img src={HB} alt="logo" />
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/Papercrafts">Papercrafts</Link>
            </div>
        </header>
    </>);
}

export default Header;