import "../../styles/projectpage.scss";
import "../../styles/globals.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

import GutInstinctCaseStudy from "../../assets/GutInstinctCaseStudy.pdf";

const GutInstinct = () => {
    return (
        <>
            <Header page="designs"/>
            <div className="GutInstinct project-page">
                <div className="content">
                    <h2>Final App Design: <a className="underline" href="https://www.figma.com/proto/P1xnFwk0SPFIV0XxwcnGrY/Sanjeena-and-Hebe?node-id=1-3&p=f&viewport=132%2C254%2C0.05&t=hLRTdFB4D4X63Yft-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8265%3A6483&show-proto-sidebar=1" style={{color: 'ivory'}}>Click Here!</a></h2>
                    <br/>
                    <iframe src={GutInstinctCaseStudy} alt="Gut Instincts Case Study" style={{width: '100%', height: '40vw', backgroundColor: 'white'}}/>
                    {/* <h2>Case study coming soon!</h2> */}
                </div>
            </div>
            <Footer page="designs"/>
        </>
    );
};

export default GutInstinct;