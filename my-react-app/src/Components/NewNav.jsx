import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-menu-close.svg'

function NewNav({ closeEvent }){



    return(
        
                <ul className='newNav'>
                    <img onClick={closeEvent} className='close' src={close} alt="close" />
                    <li ><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                </ul>
                
            
    );
}

export default NewNav