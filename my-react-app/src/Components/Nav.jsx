import React,{ useState } from 'react';
import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-menu-close.svg'
import NewNav from './NewNav';


function Nav(){

    const [isVisible , setIsVisible] = useState(false);

    function openEvent(){
        setIsVisible(true);
    }

    function closeEvent(){
        setIsVisible(false);
    }

    return(

        <nav>
            <div className="left">
                <a href="#"><img src={logo} alt="logo" /></a>
            </div>
            <img onClick={openEvent} className='menu' src={menu} alt="menu" />
            {isVisible && <NewNav closeEvent={closeEvent}/> }
            <div id='menuButton' className="right">
                <ul className="notRes">
                    <img id='closeButton' className='close' src={close} alt="close" />
                    <li ><a href="#">Home</a></li>
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