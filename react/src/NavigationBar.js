import { Link } from 'react-router-dom';
import logo from './img/logo.svg'

export default function NavigationBar() {
	return (
		<>
			<div className="topNavigationMenu">
				<img id="topLogo" src={logo} alt="Logotipo de Thincrs" />
				<Link to="/">Listado de productos</Link>
				<Link to="/nuevaPersona">Crear nuevo producto</Link>
			</div>
		</>
	);
}
