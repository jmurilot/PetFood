import LogoWhite from "../../assets/logo-white.png"
import Logo from "../../assets/logo.png"

interface HeaderProps {
  whiteversion: boolean;
}

const Header = ({whiteversion}: HeaderProps) => {
    return (
    <div className="col-12">
        <header className="py-4 px-4 text-center">
            <img src={whiteversion ? LogoWhite : Logo} className="img-fluid" />
        </header>
    </div>
    )
}

export default Header;