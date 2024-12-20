import "../../styles/projectpage.scss";
import "../../styles/globals.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

const WraplifyCode = () => {
    return (
        <>
            <Header page="code"/>
            <div className="WraplifyCode project-page">
                <div className="content">
                    <h2><a href="https://sites.google.com/view/wraplify-portfolio/our-app?authuser=0" style={{color: 'ivory'}}>Wraplify Project Link</a></h2>
                    {/* <iframe src={"https://sites.google.com/view/wraplify-portfolio/our-app?authuser=0"} alt="wraplify project website" style={{width: '100%', height: '40vw', backgroundColor: 'white'}}/> */}
                    <h2>More details coming soon!</h2>
                </div>
            </div>
            <Footer page="code"/>
        </>
    );
};

export default WraplifyCode;