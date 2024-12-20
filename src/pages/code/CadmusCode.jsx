import "../../styles/projectpage.scss";
import "../../styles/globals.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CADMUS from "../../assets/cadmus.png";

const CadmusCode = () => {
    return (
        <>
            <Header page="code"/>
            <div className="CadmusCode project-page">
                <div className="content">
                    <h2><a href="https://www.cadmusanalytics.com/" style={{color: 'ivory'}}>cadmusanalytics.com</a></h2>
                    <iframe src={"https://www.cadmusanalytics.com/"} alt="cadmus health analytics" style={{width: '100%', height: '40vw', backgroundColor: 'white'}}/>
                    <h2>More details coming soon!</h2>
                </div>
            </div>
            <Footer page="code"/>
        </>
    );
};

export default CadmusCode;