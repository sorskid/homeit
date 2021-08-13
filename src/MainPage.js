import './MainPage.css'
import CompanyLogo from './CompanyLogo';
import Test from './Func';

function MainPage() {
    const x = 100;
    const name = "Daniel";
    return(
        <div className="mainpage">
            <header>
                <CompanyLogo />
                <Test /> {x} <b>{name}</b>
            </header>           
        </div>
    );
}

export default MainPage;