import "../../styles/projectpage.scss";
import "../../styles/globals.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

import GutInstinctCaseStudy from "../../assets/GutInstinctCaseStudy.pdf";

const GutInstinct = () => {
    return (
        <>
            <Header page="code"/>
            <div className="GutInstinct project-page">
                <div className="content">
                    <iframe src={GutInstinctCaseStudy} alt="Gut Instincts Case Study" style={{width: '100%', height: '40vw', backgroundColor: 'white'}}/>
                    {/* <h2>Case study coming soon!</h2> */}
                </div>
            </div>
            <Footer page="code"/>
        </>
    );
};

export default GutInstinct;