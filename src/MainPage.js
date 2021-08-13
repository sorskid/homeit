import './MainPage.css'
import CompanyLogo from './CompanyLogo';

function MainPage() {
    return(
        <div className="mainpage">
            <header>
                <aside>
                <div id="test"><small>&copy;Daniel is the best</small></div>
                </aside>
                <CompanyLogo />
            </header>
            
        </div>
    );
}

export default MainPage;