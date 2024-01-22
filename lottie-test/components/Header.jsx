import { Link } from "react-router-dom";

function Header () {
    return (
        <div className="headerContainer">
            <div className="headerContents">
                <span className="headerTitle">Lottie playground</span>
                <span>
                    <Link to={'/'} className="headerLink">Home</Link>
                    <a href="https://github.com/jaymckerracher/lottie-playground" target="blank" className="headerLink">GitHub</a>
                </span>
            </div>
        </div>
    )
}

export default Header;