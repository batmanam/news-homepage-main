import logo from '../assets/images/logo.svg'

function Nav(){

    return(
        <nav>
            <div className="left">
                <a href="#"><img src={logo} alt="logo" /></a>
            </div>
            <div className="right">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav