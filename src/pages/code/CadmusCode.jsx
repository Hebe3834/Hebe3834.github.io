import "../../styles/projectpage.scss";
import "../../styles/globals.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CADMUS from "../../assets/cadmus.png";

import CadmusPresentation from "../../assets/CadmusPresentation.pdf";

const CadmusCode = () => {
    return (
        <>
            <Header page="code"/>
            <div className="CadmusCode project-page">
                <div className="content">
                    <h2>Live Website: <a href="https://www.cadmusanalytics.com/" style={{color: 'ivory'}}>cadmusanalytics.com</a></h2>
                    {/* <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/slides/L1IHNA3HrE2CSDhwp6mIZB/Summer-2024-Frontend-Internship-Presentation?node-id=2-1844&embed-host=share" allowFullScreen></iframe>                     */}
                    {/* <iframe src={"https://www.cadmusanalytics.com/"} alt="cadmus health analytics" style={{width: '100%', height: '40vw', backgroundColor: 'white'}}/> */}
                    <iframe src={CadmusPresentation} alt="cadmus health analytics" style={{width: '100%', height: '40vw', backgroundColor: 'white'}}/>
                    {/* <h2>Case study coming soon!</h2> */}
                </div>
            </div>
            <Footer page="code"/>
        </>
    );
};

export default CadmusCode;