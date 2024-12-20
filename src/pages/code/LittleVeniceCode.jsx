import "../../styles/projectpage.scss";
import "../../styles/globals.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

const LittleVeniceCode = () => {
    return (
        <>
            <Header page="code"/>
            <div className="LittleVeniceCode project-page">
                <div className="content">
                    <h2><a href="https://littlevenicerestaurant.com/" style={{color: 'ivory'}}>https://littlevenicerestaurant.com/</a></h2>
                    <iframe src={"https://littlevenicerestaurant.com/"} alt="litle venice website" style={{width: '100%', height: '40vw', backgroundColor: 'white'}}/>
                    <h2>More details coming soon!</h2>
                </div>
            </div>
            <Footer page="code"/>
        </>
    );
};

export default LittleVeniceCode;