import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Mr Shop Online</h3>
            <div>
                <button>Mandolina</button>
                <button>Elevadores</button>
                <button>Kit de Limpieza</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar