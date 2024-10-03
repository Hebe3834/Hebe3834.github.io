import "../styles/projects.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
import DesignBtn from "./components/DesignBtn";
import PERSONAL from "../assets/personal-site.png";
import RAFI from "../assets/rafi_mockup.png";
import QUESTIFY from "../assets/questify.png";

const Designs = () => {
    return (
        <>
            <Header page="designs" />
            <div className="Projects Designs">
                <div className="content">

                    <h1>Design Work</h1>
                    <div className="projects-grid">

                        <DesignBtn
                            id="1" 
                            name="This Site"
                            link="https://github.com/Hebe3834/Hebe3834.github.io"
                            img={PERSONAL}
                            scroll={true}
                            desc={<p>A <span>personal website</span> for a <span>student developer</span></p>}
                        />

                        <DesignBtn
                            id="2" 
                            name="Rafi's Portfolio"
                            link="#"
                            img={RAFI}
                            scroll={false}
                            desc={<p>An <span>online portfolio</span> for an <span>independent artist</span></p>}
                        />

                        <DesignBtn
                            id="3" 
                            name="Questify"
                            link="#"
                            img={QUESTIFY}
                            scroll={false}
                            desc={<p>A gamified <span>workout</span> and <span>fitness interface</span></p>}
                        />
                    
                    </div>
                </div>
            </div>
            <Footer page="designs" />
        </>
    );
}

export default Designs;