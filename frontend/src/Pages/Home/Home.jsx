import { Link } from "react-router-dom";
export const Home = () => {
    return (
        <>
            <div className="container min-h-screen min-w-screen flex flex-col justify-center mx-auto">
                <span className="text-center text-8xl font-bold text-black pb-16"> Bienvenido a Gestint</span>
                <span className="text-center text-6xl text-black font-bold pb-14">¿Que deseas hacer?</span>
                <div className="flex flex-row justify-center">
                    <button className="bg-green-600 hover:bg-green-800 rounded shadow mx-6 w-96 h-20 text-4xl text-center text-white font-bold"><Link to='/login'>Inicar Sesion</Link></button>
                    <button className="bg-green-600 hover:bg-green-800 rounded shadow mx-6 w-96 h-20 text-4xl text-center text-white font-bold"><Link to='/signup'>Registrarse</Link></button>
                </div>
            </div>
        </>
    );
}