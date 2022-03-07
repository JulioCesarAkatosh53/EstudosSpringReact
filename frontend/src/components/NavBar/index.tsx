import { ReactComponent as GitHubIcon } from 'assets/img/git-hub-icon.svg';
import './styles.css';
function NavBar() {

    return (

        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>

                    <h1>DS Movie</h1>


                    <a href="https://github.com/jczar-coder">

                        <div className='dsmovie-contact-container'>

                        <GitHubIcon />
                        

                        <p className='dsmovie-link-container'> 
                            /ds-contact
                        </p>


                        </div>
                    </a>


                </div>



            </nav>
        </header>

    );



}

export default NavBar;