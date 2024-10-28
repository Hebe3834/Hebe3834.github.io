import "../../styles/projectpage.scss";
import "../../styles/globals.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

const BitesDesign = () => {
    return (
        <>
            <Header page="designs"/>
            <div className="BitesDesign project-page">
                <div className="content">
                    <h2>Case study coming soon!</h2>
                </div>
            </div>
            <Footer page="designs"/>
        </>
    );
};

export default BitesDesign;