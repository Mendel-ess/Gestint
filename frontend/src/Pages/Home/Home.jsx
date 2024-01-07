import { Link } from "react-router-dom";
export const Home = () => {
    return (
        <>
            <h1> Bienvenido a Gestint</h1>
            <h3>¿Que deseas hacer?</h3>
            <button><Link to='/login'>Inicar Sesion</Link></button>
            <button><Link to='/signup'>Registrarse</Link></button>
        </>
    );
}