import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <header>
            <div>
                <div>
                    <div>
                       <Link to={"/session/login"}>
                            <img src={logo} alt="logo" />
                        </Link> 
                    </div>
                    <div>
                        <Link to={"/login"}>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}