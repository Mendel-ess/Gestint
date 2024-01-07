

export const Login = () => {
    return (
        <div>
            <form action="POST">
                <span>Nombre de Usuario:</span>
                <input type="text" placeholder="Ingresa el nombre de usuario"/>
                <span>Contraseña: </span>
                <input type="password" placeholder="********" />
            </form>
        </div>
    );
}